import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { GetCatalogTreeResponse, CatalogLevel } from '../../../shared/catalog/catalog.model';
import { CatalogService } from '../../../shared/catalog/catalog.service';
import { CardService } from '../../../shared/cards/card.service';
import { CardFullModel, GetCardsResponse, ItemIdResponse, PriceModel, cardStatuses, CardStatus, PrintFilesMode, CardAvailableStatus, StatusWarning } from '../../../shared/cards/card.model';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectItem, MessageService, DialogService } from 'primeng/api';
import { TreeService } from '../../../shared/tree/tree.service';
import { FormService } from '../../../shared/form/form-service';
import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';
import { CardStatusHistoryComponent } from './card-status-history/card-status-history.component';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { TrustedScriptString } from '@angular/core/src/sanitization/bypass';
import { AddFileToForm } from '../../../shared/file/add-file-to-form';
import { CardImagesValidator } from './card.validation';

const emptySeries = 'В корень тематики';
const emptySet = 'В корень серии';

@Component({
  selector: 'app-info-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../../shared-admin.scss', './card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  activateCardText: string;
  deactivateCardText: string;

  cardForm: FormGroup;

  isBusy: boolean;
  tree: CatalogLevel[];
  cardThemes: CatalogLevel[]
  availableThemes: SelectItem[];
  availableSeries: SelectItem[];
  availableSets: SelectItem[];

  card: CardFullModel;
  isEdit: boolean;

  previewImage: ImageEditModel;
  frontImage: ImageEditModel;
  backImage: ImageEditModel;
  terminalPreviewImage: ImageEditModel;
  terminalFrontImage: ImageEditModel;
  terminalBackImage: ImageEditModel;
  terminalPrintFrontImage: ImageEditModel;
  terminalPrintFrontHolo: ImageEditModel;
  terminalPrintFrontLamination: ImageEditModel;
  terminalPrintBackImage: ImageEditModel;
  terminalPrintBackHolo: ImageEditModel;
  terminalPrintBackLamination: ImageEditModel;

  printFilesMode: PrintFilesMode;

  statuses: SelectItem[];
  openLists = [];
  isSetCatalogIdEnabled: boolean = false;

  isStatusChanged: boolean = false;
  isStatusChangedToActive: boolean = false;
  isStatusChangedToInactive: boolean = false;

  private _initialCatalogLevelId: string;
  private _hasSaveAttempt: boolean;
  private _validator: CardImagesValidator;

  constructor(
    private dialogService: DialogService,
    private activateRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private catalogService: CatalogService,
    private cardService: CardService,
    private msg: MessageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private treeService: TreeService,
    private formService: FormService,
    private sanitizer: DomSanitizer,
    private textService: EditTextService,
  ) {
    this._validator = new CardImagesValidator(this);
    this.textService.loadTextsGroup(MessageGroupEnum.CardCatalog,
      (data) => {
        this.activateCardText = this.textService.getText(MessageGroupEnum.CardCatalog, 'CardCatalogActivateCard').text;
        this.deactivateCardText = this.textService.getText(MessageGroupEnum.CardCatalog, 'CardCatalogDeactivateCard').text;
      });

    this.previewImage = new ImageEditModel(sanitizer, '161х320');
    this.frontImage = new ImageEditModel(sanitizer, '322х460');
    this.backImage = new ImageEditModel(sanitizer, '322х460');
    this.terminalPreviewImage = new ImageEditModel(sanitizer, 'от 64x64 до 1080x1920');
    this.terminalFrontImage = new ImageEditModel(sanitizer, 'от 64x64 до 1080x1920');
    this.terminalBackImage = new ImageEditModel(sanitizer, 'от 64x64 до 1080x1920');
    this.terminalPrintFrontImage = new ImageEditModel(sanitizer, '720х1028');
    this.terminalPrintFrontHolo = new ImageEditModel(sanitizer, '720х1028');
    this.terminalPrintFrontLamination = new ImageEditModel(sanitizer, '720х1028');
    this.terminalPrintBackImage = new ImageEditModel(sanitizer, '720х1028');
    this.terminalPrintBackHolo = new ImageEditModel(sanitizer, '720х1028');
    this.terminalPrintBackLamination = new ImageEditModel(sanitizer, '720х1028');

    this.card = { ...new CardFullModel(), priceModel: PriceModel.Fixed, printFilesMode: 'None', canEdit: true };
    this._buildForm();
    this._getCatalogTree();
    activateRoute.params.subscribe(params => {
      this._initialCatalogLevelId = params.catalog_level_id;
      if (params.id != null) {
        this._getCard(params.id);
      }
      this._updateSelectedItems();
    });
  }

  showStatusHistory() {
    const ref = this.dialogService.open(CardStatusHistoryComponent, {
      header: 'История статусов',
      style: { 'max-height': '95%', overflow: 'auto' },
      data: {
        cardName: this.card.title,
        cardId: this.card.id
      }
    });
  }

  gotoTemplatesAssign() {
    const catalogLevelId = this.card.catalogLevelId;
    this.router.navigate([`/admin/main/card-number-print-templates/assign/${catalogLevelId}`]);
  }

  private _buildForm() {
    const card = this.card;

    this.previewImage.url = card.previewImage;
    this.frontImage.url = card.frontImage;
    this.backImage.url = card.backImage;
    this.terminalPreviewImage.url = card.terminalPreviewImage;
    this.terminalFrontImage.url = card.terminalFrontImage;
    this.terminalBackImage.url = card.terminalBackImage;
    this.terminalPrintFrontImage.url = card.terminalPrintFrontImage;
    this.terminalPrintFrontHolo.url = card.terminalPrintFrontHolo;
    this.terminalPrintFrontLamination.url = card.terminalPrintFrontLamination;
    this.terminalPrintBackImage.url = card.terminalPrintBackImage;
    this.terminalPrintBackHolo.url = card.terminalPrintBackHolo;
    this.terminalPrintBackLamination.url = card.terminalPrintBackLamination;

    this.printFilesMode = card.printFilesMode || 'None';

    this.cardForm = this.formBuilder.group({
      themeCatalogLevelId: ['', Validators.required],
      seriesCatalogLevelId: ['', Validators.required],
      setCatalogLevelId: ['', Validators.required],
      title: [card.title, Validators.required],
      description: [card.description, Validators.required],
      terminalDescription: [card.terminalDescription, Validators.required],
      printCount: [
        card.printCount,
        FormService.customValidator(this, this._printCountValidator)],
      unlimited: [card.unlimited],
      price: [card.price, Validators.compose([Validators.required, Validators.min(1)])],
      priceModel: [card.priceModel, Validators.required],
      status: [card.status],
      comment: ['', FormService.customValidator(this, this._commentValidator)]
    });
    this.cardForm.setValidators(this._validator.imagesValidator())

    this.f.unlimited.valueChanges.subscribe(val => {
      this.f.printCount.updateValueAndValidity({ emitEvent: false });
    });
    this.f.seriesCatalogLevelId.valueChanges.subscribe(val => {
      this.isSetCatalogIdEnabled = val && val != this.cardThemes[0].id && val != emptySeries;
      this._updateSets(val);
    });
    this.f.priceModel.valueChanges.subscribe(val => {
      this.f.price.updateValueAndValidity({ emitEvent: false });
    });
    this.f.status.valueChanges.subscribe(val => {
      this.isStatusChanged = val != this.card.status;
      this.isStatusChangedToActive = val == 'Active';
      this.isStatusChangedToInactive = val == 'NotActive';
    });

    if (card.availableStatuses) {
      this.statuses = card.availableStatuses.map(t => {
        var cardStatusText = cardStatuses.find(s => s.value == t.status);
        let ret = <SelectItem>{
          label: cardStatusText ? cardStatusText.label : t.status,
          value: t.status,
          disabled: t.warning ? true : false,
        };
        if (t.warning == StatusWarning.NoCardNumberPrintTemplate) {
          (<any>ret).warning = '(не назначен шаблон печати номера)';
        }
        return ret;
      });
    } else {
      this.statuses = [];
    }
  }

  private _printCountValidator(sender: CardComponent, control: AbstractControl): ValidationErrors | null {
    return sender.unlimited ? null : Validators.required(control);
  }
  private _commentValidator(sender: CardComponent, control: AbstractControl): ValidationErrors | null {
    if (sender.f) {
      if (!sender.isStatusChanged)
        return null;
      return Validators.required(control);
    } else return null;
  }

  private _updateSelectedItems() {
    if (this._initialCatalogLevelId != null && this.tree != null) {
      const catalogLevelPath = this.treeService.FindElementPath(this.tree, this._initialCatalogLevelId, []);
      const theme = catalogLevelPath[0];
      const series = catalogLevelPath[1] || null;
      const set = catalogLevelPath[2] || null;

      this.cardThemes = catalogLevelPath;
      this.availableThemes = this.treeService.ToSelectItemArray([theme]);
      this.availableSeries = this.treeService.ChildrenToSelectItemArray(theme, emptySeries);

      var themeId = theme ? theme.id : null;
      var seriesId = series ? series.id : themeId;
      var setId = set ? set.id : seriesId;

      this.cardForm.get('themeCatalogLevelId').setValue(themeId);
      this.cardForm.get('seriesCatalogLevelId').setValue(seriesId);
      this.cardForm.get('setCatalogLevelId').setValue(setId);
    }
  }

  private _updateSets(val: any) {
    if (this.isSetCatalogIdEnabled) {
      var id = val.value || val;
      var seriesPath = this.treeService.FindElementPath(this.tree, id, []);
      this.availableSets = this.treeService.ChildrenToSelectItemArray(seriesPath[1], emptySet);
      if (this.availableSets.length) {
        this.cardForm.get('setCatalogLevelId').setValue(this.availableSets[0].value);
      }
    } else {
      this.availableSets = [];
    }
  }

  private _getCatalogTree() {
    this.catalogService.getTree().subscribe(
      (tree: GetCatalogTreeResponse) => {
        this.tree = tree.themes;
        this._updateSelectedItems();
        this.cdr.detectChanges();
      }
    );
  }

  createCard() {
    this._hasSaveAttempt = true;

    if (this.cardForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = this._getFormData();
      this.isBusy = true;
      this.cardService.create(formData).subscribe(
        (response: ItemIdResponse) => {
          this.card.id = response.id;
          var catalogLevelId = formData.get('catalogLevelId').toString();
          this.router.navigate(['admin/main/card-lists', { catalog_level_id: catalogLevelId }]);
          this.isBusy = false;
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
          this.isBusy = false;
        }
      );
    }
  }

  saveCard() {
    this._hasSaveAttempt = true;

    this.cardForm.updateValueAndValidity();
    if (this.cardForm.invalid) {
      let controls = FormService.getInvalidControls(this.cardForm);
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = this._getFormData();
      this.isBusy = true;
      this.cardService.update(this.card.id, formData).subscribe(
        response => {
          var catalogLevelId = formData.get('catalogLevelId').toString();
          this.router.navigate(['admin/main/card-lists', { catalog_level_id: catalogLevelId }]);
          this.isBusy = false;
        },
        error => {
          this.formService.showServerErrors(this.msg, error);

          if (error.error.code == 'ExpiredRecord') {
            this._getCard(this.card.id);
          } else {
            this.isBusy = false;
          }
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['admin/main/card-lists', { catalog_level_id: this._initialCatalogLevelId }]);
  }

  private _getFormData() {
    const formData = FormService.getFormData(this.cardForm);

    AddFileToForm(formData, 'previewImage', this.previewImage.file);
    AddFileToForm(formData, 'frontImage', this.frontImage.file);
    AddFileToForm(formData, 'backImage', this.backImage.file);
    AddFileToForm(formData, 'terminalPreviewImage', this.terminalPreviewImage.file);
    AddFileToForm(formData, 'terminalFrontImage', this.terminalFrontImage.file);
    AddFileToForm(formData, 'terminalBackImage', this.terminalBackImage.file);
    AddFileToForm(formData, 'terminalPrintFrontImage', this.terminalPrintFrontImage.file);
    AddFileToForm(formData, 'terminalPrintFrontHolo', this.terminalPrintFrontHolo.file);
    AddFileToForm(formData, 'terminalPrintFrontLamination', this.terminalPrintFrontLamination.file);
    AddFileToForm(formData, 'terminalPrintBackImage', this.terminalPrintBackImage.file);
    AddFileToForm(formData, 'terminalPrintBackHolo', this.terminalPrintBackHolo.file);
    AddFileToForm(formData, 'terminalPrintBackLamination', this.terminalPrintBackLamination.file);

    formData.append('printFilesMode', this.printFilesMode.toString());

    var catalogLevelId = this.isSetCatalogIdEnabled ?
      this.cardForm.value.setCatalogLevelId.value || this.cardForm.value.setCatalogLevelId :
      this.cardForm.value.seriesCatalogLevelId.value || this.cardForm.value.seriesCatalogLevelId;
    formData.append('catalogLevelId', catalogLevelId);

    if (this.isEdit) {
      formData.append('updated', this.card.updated.toString());
    }

    return formData;
  }

  private _getCard(id) {
    this.isBusy = true;
    this.cardService.get(id).subscribe(
      (response: CardFullModel) => {
        this.card = response;
        this._buildForm();
        this.isEdit = true;
        this._initialCatalogLevelId = this.card.catalogLevelId;
        this._updateSelectedItems();
        this.cdr.detectChanges();
        this.isBusy = false;
      },
      (error) => {
        this.formService.showServerErrors(this.msg, error);
        this.isBusy = false;
      }
    );
  }

  showPreview() {
    window.open(`admin/main/card/preview/${this.card.id}`);
  }

  ngOnInit() {
    this._hasSaveAttempt = false;
    this.isBusy = false;
  }

  get f() { return this.cardForm && this.cardForm.controls; }

  get unlimited() { return this.cardForm && this.cardForm.controls && this.cardForm.controls.unlimited.value };

  get priceModel() { return this.cardForm && this.cardForm.controls && this.cardForm.controls.priceModel.value };

  hasError(control: any) {
    if (!this.card.canEdit)
      return false;
    else
      return control.invalid && (control.dirty || control.touched || this._hasSaveAttempt);
  }

  get generalErrors() {
    return this._hasSaveAttempt && this.cardForm.errors || {};
  }

  get priceLabel() {
    if (this.f.priceModel.value == 'Fixed' || this.f.unlimited.value)
      return 'Цена, Р';
    else
      return 'Стартовая цена, Р';
  }
}
