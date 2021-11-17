import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CatalogService } from 'src/app/admin/shared/catalog/catalog.service';
import { GetCatalogDetailsResponse, GetCatalogChildrenResponse, CatalogCardsSortColumn } from 'src/app/admin/shared/catalog/catalog.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { MessageService, DialogService } from 'primeng/api';
import { CardComponent } from '../card/card.component';
import { Subscription } from 'rxjs';
import { EditTextService } from 'src/app/admin/shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from 'src/app/admin/shared/edit-texts/MessageGroupEnum';
import { CaptchaCancelledError } from 'src/app/admin/shared/cart/cart.model';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { CarouselItem } from '../../shared/carousel/CarouselItem';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  public catalog: GetCatalogDetailsResponse = null;
  public catalogMode: null | 'ThemeNoSeriesNoSet' | 'ThemeHasSeriesNoSet' | 'ThemeHasSeriesHasSet' | 'Series' | 'Set' = null;
  public allSeriesLoaded: boolean;
  public allSetsLoaded: boolean;
  public cards: any[];
  public series: any[];
  public sets: any[];

  public loadingCards: boolean;
  public cardsFilter = {
    showSoldOut: false,
    orderColumn: <CatalogCardsSortColumn>'Price'
  };
  public catalogBanner: CarouselItem[] = [{
    image: '/assets/images/main.jpg'
  }];

  private _catalogId: string;
  addCardMessage: string;
  addCardSoldoutErrorMessage: string;

  constructor(
    private dialogService: DialogService,
    private catalogService: CatalogService,
    private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private msg: MessageService,
    private textService: EditTextService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CartAndOrders, () => {
      this.addCardMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CartAddCard').text;
      this.addCardSoldoutErrorMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CatalogAddCardSoldoutError').text;
    });

    activateRoute.params.subscribe(params => {
      this._catalogId = params.id;
      this.loadData();
    });
  }

  ngOnInit() {
    this._subscriptions.push(this.cartService.cartState.subscribe(
      data => this.onCartStateUpdate()
    ));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sb => sb.unsubscribe());
  }

  onCartStateUpdate() {
    var cartState = this.cartService.cartState.getValue();

    this.cards && this.cards.forEach(card => {
      var row = cartState && cartState.rows && cartState.rows.find(row => row.id == card.id);
      //TODO: завести нормальную модель для карточек
      card.cartQuantity = row && row.detailRows.map(t => t.quantity).reduce((a, b) => a + b, 0) || 0;
    });
  }

  public mouseEnter(card) {
    card.hovered = true;
  }

  public mouseLeave(card) {
    card.hovered = false;
  }

  public addToCart($event, card: any) {
    this.cartService.add(card.id).subscribe(
      response => {
        this.msg.add({ severity: 'success', summary: 'Товар добавлен в корзину', detail: this.addCardMessage });

        //TODO: завести нормальную модель для карточек
        card.cartQuantity = card.cartQuantity || 0;
        card.cartQuantity++;
      },
      error => {
        if (error == CaptchaCancelledError)
          return;
        console.log(error);

        let detail = `Не удалось добавить товар в корзину. ${ServerErrorHelper.getError(error, 'Неизвестная ошибка')}`;
        ServerErrorHelper.processErrorModel(error, 'NotEnoughAvailableCardsErrorResponse', (errorModel) => {
          detail = this.addCardSoldoutErrorMessage;
        });
        this.msg.add({ severity: 'error', summary: 'Ошибка', detail });
      });
  }

  public setOrder(order: CatalogCardsSortColumn) {
    this.cardsFilter.orderColumn = order;
    this.reloadCards();
  }

  public openCard(card) {
    const ref = this.dialogService.open(CardComponent, {
      // header: card.title,
      style: { 'max-height': '95%', overflow: 'auto' },
      data: card.id
    });
    ref.onClose.subscribe(() => this.reloadCards());
  }

  private loadData() {
    this.allSeriesLoaded = false;
    this.allSetsLoaded = false;
    this.loadingCards = false;
    this.catalog = null;

    this.catalogService.getCatalogDetails(this._catalogId).subscribe(
      (response: GetCatalogDetailsResponse) => {
        this.catalog = response;
        if (this.catalog.levelType == 'Series') {
          this.catalogMode = 'Series';
          this.sets = this.catalog.topLevels;
        } else if (this.catalog.levelType == 'Set') {
          this.catalogMode = 'Set';
        } else {
          this.series = this.catalog.topLevels;
          this.sets = this.catalog.topLevels.map(l1 => l1.topLevels || []);
          if (this.sets.length)
            this.sets = this.sets.reduce((a, b) => a.concat(b));

          if (this.series.length && this.sets.length) {
            this.catalogMode = 'ThemeHasSeriesHasSet';
          } else if (this.series.length) {
            this.catalogMode = 'ThemeHasSeriesNoSet';
          } else {
            this.catalogMode = 'ThemeNoSeriesNoSet';
          }
        }

        this.reloadCards();
      });
  }

  public loadAllSeries() {
    this.catalogService.getCatalogChildren(this._catalogId, 1).subscribe(
      (response: GetCatalogChildrenResponse) => {
        this.series = response.levels;
        this.allSeriesLoaded = true;
      });
  }

  public loadAllSets() {
    this.catalogService.getCatalogChildren(this._catalogId, 1).subscribe(
      (response: GetCatalogChildrenResponse) => {
        this.sets = response.levels;
        this.allSetsLoaded = true;
      });
  }

  public reloadCards() {
    if (this.catalogMode == 'Set' || this.catalogMode == 'ThemeNoSeriesNoSet') {
      this.loadingCards = true;
      this.catalogService.getCatalogCards(this._catalogId, this.cardsFilter.showSoldOut, this.cardsFilter.orderColumn).subscribe(
        response => {
          this.cards = response.items;
          this.onCartStateUpdate();
          this.loadingCards = false;
        },
        (error) => {
          this.cards = [];
          this.loadingCards = false;
        });
    }
  }
}
