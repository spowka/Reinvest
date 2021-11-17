import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { GetCatalogTreeResponse, CatalogLevel } from '../../../shared/catalog/catalog.model';
import { CatalogService } from '../../../shared/catalog/catalog.service';
import { CardService } from '../../../shared/cards/card.service';
import { GetCardsResponse, ItemIdResponse, CardBriefModel } from '../../../shared/cards/card.model';
import { TreeNode, DialogService, MessageService, ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardMoveComponent } from '../card-move/card-move.component';
import { TreeService } from '../../../shared/tree/tree.service';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { FormService } from '../../../shared/form/form-service';
import { InsertEmptyNode } from '../../../shared/helpers/array-helpers';
import { AdminAuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-lists.component.html',
  styleUrls: ['./card-lists.component.scss'],
})
export class CardListsComponent implements OnInit {
  public tree: TreeNode[];
  public cards: CardBriefModel[];
  public cols: any[];
  public statuses: any[];
  public activeElements: any[];

  public selectedLevelId: string;
  public selectedNode: TreeNode;

  public printCountFilter: number;
  public active = 'active';
  public title: string;
  public status: string = null;

  public canAddCard: boolean = false;

  private subscription: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private catalogService: CatalogService,
    private cardService: CardService,
    private activateRoute: ActivatedRoute,
    public router: Router,
    public dialogService: DialogService,
    public msg: MessageService,
    private treeService: TreeService,
    private textService: EditTextService,
    private confirmService: ConfirmationService,
    private formService: FormService,
    private auth: AdminAuthService
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CardCatalog);
    this.subscription = activateRoute.params.subscribe(params => {
      this._getCatalogTree(params.catalog_level_id);
    });
    var component = this;
    this.auth.authState.subscribe(user => {
      component.canAddCard = auth.hasAnyRole('CardsCatalog', ['Owner', 'Designer', 'DesignAdministrator']);
    });
  }

  public move(id: string) {
    const ref = this.dialogService.open(CardMoveComponent, {
      header: 'Перенос карточки',
      data: { id },
      width: '500px',
      contentStyle: { "max-height": "700px", "overflow": "auto" }
    });

    ref.onClose.subscribe((catalogLevelId: string) => {
      if (catalogLevelId) {
        this.cardService.set_level(id, catalogLevelId).subscribe(
          (response: ItemIdResponse) => {
            this.reloadCards();
            this.cdr.detectChanges();
          },
          error => {
            console.log(error);
            this.formService.showServerErrors(this.msg, error);
          });
      }
    });
  }

  public clearFilter() {
    this.printCountFilter = null;
    this.active = 'active';
    this.title = null;
    this.status = null;
    this.reloadCards();
  }

  public reloadCards() {
    this._getCards(this.selectedLevelId);
  }

  public reorder(ev) {
    const index = (ev.dropIndex > ev.dragIndex ? ev.dropIndex - 1 : ev.dropIndex);

    const card = this.cards[index];
    const beforeIndex = index - 1;
    const beforeCard = beforeIndex >= 0 && this.cards[beforeIndex] || null;

    this.cardService.reorder(card.id, beforeCard && beforeCard.id || '').subscribe(
      (response: GetCardsResponse) => {
        this.reloadCards();
        this.cdr.detectChanges();
      },
      error => {
        console.log(error);
        this.formService.showServerErrors(this.msg, error);
        this.reloadCards();
      });
  }

  public restore(id: string) {
    var msg = this.textService.getText(MessageGroupEnum.CardCatalog, 'CardCatalogRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.cardService.restore(id).subscribe(
          (response: GetCardsResponse) => {
            this.reloadCards();
            this.cdr.detectChanges();
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Карточка восстановлена' });
          });
      }
    });
  }

  public delete(id: string) {
    var msg = this.textService.getText(MessageGroupEnum.CardCatalog, 'CardCatalogDeleting');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.cardService.delete(id).subscribe(
          response => {
            this.reloadCards();
            this.cdr.detectChanges();
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Карточка удалена' });
          });
      }
    });
  }

  public archive(id: string) {
    var msg = this.textService.getText(MessageGroupEnum.CardCatalog, 'CardCatalogArchiving');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.cardService.archive(id).subscribe(
          (response: GetCardsResponse) => {
            this.reloadCards();
            this.cdr.detectChanges();
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Карточка перенесена в архив' });
          },
          (error) => {
            console.log(error);
            this.formService.showServerErrors(this.msg, error);
          });
      }
    });
  }

  public nodeSelect(event) {
    this._getCards(event.node.data.id);
  }

  private _getCatalogTree(catalogLevelId) {
    this.catalogService.getTree().subscribe(
      (tree: GetCatalogTreeResponse) => {
        this.tree = this._mapNodes(tree.themes);
        if (!catalogLevelId) {
          catalogLevelId = tree.themes[0].id;
        }
        this._getCards(catalogLevelId);
        this.cdr.detectChanges();
      }
    );
  }

  private _mapNodes(tree: CatalogLevel[]): TreeNode[] {
    return tree.map(res => ({ data: { id: res.id, name: res.name }, children: this._mapNodes(res.children) }));
  }

  private _setSelectedLevelId(id: string) {
    if (this.tree) {
      const path = this.treeService.FindElementPath(this.tree, id, []);
      path.forEach(element => {
        //element.expanded = true;
        this.selectedNode = element;
      });
    }
    this.selectedLevelId = id;
  }

  private _getCards(id: string) {
    this._setSelectedLevelId(id);
    this.selectedLevelId = id;
    this.cardService.getList(this.active, { catalogLevelId: id }).subscribe(
      (response: GetCardsResponse) => {
        this.cards = InsertEmptyNode(response.items, new CardBriefModel());
        this.cdr.detectChanges();
      }
    );
  }

  ngOnInit() {
    this.cols = [
      { field: 'title', header: 'Название карточки' },
      { field: 'printCount', header: 'Тираж >=' },
      { field: 'status', header: 'Статус' },
    ];
    this.statuses = [
      { label: 'Все', value: null },
      { label: 'Новая', value: 'New' },
      { label: 'Проверка', value: 'Check' },
      { label: 'Доработка', value: 'Modification' },
      { label: 'Активная', value: 'Active' },
      { label: 'Неактивная', value: 'NotActive' },
      { label: 'Тираж закончился', value: 'SoldOut' },
    ];
    this.activeElements = [
      { label: 'Действующие', value: 'active' },
      { label: 'Архивные', value: 'notactive' },
    ];
  }
}
