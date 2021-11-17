import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, ConfirmationService } from "primeng/api";
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { FormService } from '../../../shared/form/form-service';
import { TerminalsService } from '../../../shared/terminals/terminals.service';
import { TerminalModel } from '../../../shared/terminals/terminals.model';
import { CatalogService } from '../../../shared/catalog/catalog.service';
import { GetCatalogTreeResponse, CatalogLevel } from '../../../shared/catalog/catalog.model';
import { CatalogLevelPublishVM } from './catalog-level-publish-vm';
import { RecursiveAction } from '../../../shared/helpers/array-helpers';
import { CatalogLevelImageVM } from './catalog-level-image-vm';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { FileEditModel } from '../../../shared/file/file-edit-model';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { AddFileToForm } from '../../../shared/file/add-file-to-form';
import { LegalEntitiesService } from '../../../../api/services/legal-entities.service';
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest } from '../../../../api/models/trade-cards-models-legal-entities-get-legal-entities-request';
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse } from '../../../../api/models/trade-cards-models-legal-entities-get-legal-entities-response';

@Component({
  selector: 'app-info-terminal',
  templateUrl: './info-terminal.component.html',
  styleUrls: ['../../../shared-admin.scss', './info-terminal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoTerminalComponent implements OnInit {
  public terminalForm: FormGroup;
  public isEdit: boolean;
  public isArchived: boolean = false;
  public terminal: TerminalModel;
  public legalEntities: any[] = null;
  public publishCatalogTree: CatalogLevelPublishVM[] = null;
  public imageCatalogTree: CatalogLevelImageVM[] = null;
  public previewImage: ImageEditModel = null;
  public popoverPosition = { left: 0, top: 0 };
  public promo: FileEditModel;

  private hasSaveAttempt: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private confirmService: ConfirmationService,
    private textService: EditTextService,
    private msg: MessageService,
    private terminalService: TerminalsService,
    private legalEntitiesService: LegalEntitiesService,
    private formService: FormService,
    private catalogService: CatalogService,
    private sanitizer: DomSanitizer,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Terminals);
    this.terminal = new TerminalModel();
    this.promo = new FileEditModel('50 МБ');
    this._buildForm();

    this.catalogService.getTree().subscribe(
      (response: GetCatalogTreeResponse) => {
        this._updateCatalogTree(response.themes);
      }
    );

    this.legalEntitiesService.getLegalEntities(<TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest>{ isActive: true }).subscribe(
      (data: TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse) => {
        this.legalEntities = data.items.map(t => ({
          label: t.name, value: t.id
        })).concat(({ label: '-----', value: null }));
      });

    if (this.activatedRoute.snapshot.params['id']) {
      let id = this.activatedRoute.snapshot.params['id'];
      this.isEdit = true;
      this._getTerminal(id);
    }
  }

  public showPreviewImage($event: any, vm: CatalogLevelImageVM) {
    var position = $event.target.getBoundingClientRect();
    this.popoverPosition = { left: position.left, top: position.bottom };
    this.previewImage = vm.image;
  }

  public hidePreviewImage() {
    this.previewImage = null;
  }

  public cancelHidePreviewImage($event) {
    $event.stopPropagation();
  }

  public get isDataReady() {
    return this.terminal && this.legalEntities && this.publishCatalogTree && this.imageCatalogTree;
  }

  ngOnInit() { }

  private _updateCatalogTree(themes: CatalogLevel[]) {
    if (themes) {
      this.publishCatalogTree = themes.map(
        t1 => new CatalogLevelPublishVM(t1.id, t1.name, 'theme', t1.activeCards, t1.archiveCards,
          t1.children.map(t2 => new CatalogLevelPublishVM(t2.id, t2.name, 'series', t2.activeCards, t2.archiveCards,
            t2.children.map(t3 => new CatalogLevelPublishVM(t3.id, t3.name, 'set', t3.activeCards, t3.archiveCards, [])))))
      );

      this.imageCatalogTree = themes.map(
        t1 => new CatalogLevelImageVM(this.sanitizer, t1.id, t1.name, 'theme',
          t1.children.map(t2 => new CatalogLevelImageVM(this.sanitizer, t2.id, t2.name, 'series', [])))
      );
    }

    if (this.publishCatalogTree) {
      RecursiveAction(this.publishCatalogTree, t => {
        t.selected = this.terminal && this.terminal.publishCatalogLevels ?
          this.terminal.publishCatalogLevels.includes(t.id) : false;
        t.updateChildrenDisabled();
      });
    }

    if (this.imageCatalogTree) {
      RecursiveAction(this.imageCatalogTree, t => {
        if (this.terminal.customCatalogLevelImages) {
          var customImage = this.terminal.customCatalogLevelImages.find(ci => ci.catalogLevelId == t.id);
          if (customImage) {
            t.unique = true;
            t.image.url = customImage.backgroundImage;
          }
        }
      });
    }
  }

  private _buildForm() {
    var terminal = this.terminal;
    this.terminalForm = this.formBuilder.group({
      inventoryNumber: [terminal.inventoryNumber, Validators.required],
      connectId: [terminal.connectId, Validators.required],
      terminalOwnerId: [terminal.terminalOwnerId],
      location: [terminal.location],
      cartCleanupWarningDelay: [terminal.cartCleanupWarningDelay, Validators.required],
      cartCleanupCountdown: [terminal.cartCleanupCountdown, Validators.required],
      canPayBankCard: [terminal.canPayBankCard]
    });

    this.isArchived = !terminal.isActive;
    this.promo.url = this.terminal.promoVideo;
  }

  private _getFormData(): FormData {
    const formData = FormService.getFormData(this.terminalForm);

    AddFileToForm(formData, `promoVideo`, this.promo.file);

    var publishCatalogLevels: CatalogLevelPublishVM[] = [];
    RecursiveAction(this.publishCatalogTree, t => {
      if (t.selected)
        publishCatalogLevels.push(t);
    });
    publishCatalogLevels.forEach((item, index) => {
      formData.append(`publishCatalogLevels[${index}]`, item.id);
    });

    var customCatalogLevelImages: CatalogLevelImageVM[] = [];
    RecursiveAction(this.imageCatalogTree, t => {
      if (t.unique && t.image.imageSrc)
        customCatalogLevelImages.push(t);
    });
    customCatalogLevelImages.forEach((item, index) => {
      formData.append(`customCatalogLevelImages[${index}]`, item.id);
      if (item.image.file)
        AddFileToForm(formData, `${item.id}_background`, item.image.file);
    });

    return formData;
  }

  private _getTerminal(id: string) {
    this.terminalService.getTerminal(id).subscribe((data: TerminalModel) => {
      this.terminal = data;
      this._buildForm();
      this._updateCatalogTree(null);
    });
  }

  public registerTerminal() {
    this.hasSaveAttempt = true;

    if (this.terminalForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      this.terminalService.registerTerminal(this._getFormData()).subscribe(
        (response) => {
          console.log(response, 'in');
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Терминал зарегистрирован' });
          this.router.navigate([`/admin/main/terminals/${response}`]);
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        }
      );
    }
  }

  public saveTerminal() {
    this.hasSaveAttempt = true;

    if (this.terminalForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      this.terminalService.updateTerminal(this.terminal.id, this._getFormData())
        .subscribe(
          (response: any) => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
            this.router.navigate([`/admin/main/terminals/${response.id}`]);
          },
          (error) => {
            this.formService.showServerErrors(this.msg, error);
          })
    }
  }

  public restoreTerminal() {
    var msg = this.textService.getText(MessageGroupEnum.Terminals, 'TerminalRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.terminalService.restoreTerminal(this.terminal.id).subscribe(
          () => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Терминал восстановлен' });
            this.router.navigate(['/admin/main/terminals/']);
          }
        )
      }
    });
  }

  get f() { return this.terminalForm.controls; }

  public hasError(control: any) {
    if (this.isArchived)
      return false;
    else
      return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }
}