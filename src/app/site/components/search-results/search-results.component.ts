import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CatalogService } from 'src/app/admin/shared/catalog/catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { MessageService, DialogService } from 'primeng/api';
import { CardComponent } from '../card/card.component';
import { SiteSearchService } from 'src/app/admin/shared/site-search/site-search.service';
import { SearchResult, CatalogLevel, OtherResult } from 'src/app/admin/shared/site-search/site-search.model';
import { TabVM } from './TabVM';
import { Subscription } from 'rxjs';
import { EditTextService } from 'src/app/admin/shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from 'src/app/admin/shared/edit-texts/MessageGroupEnum';
import { CaptchaCancelledError } from 'src/app/admin/shared/cart/cart.model';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { CatalogCardsSortColumn } from 'src/app/admin/shared/catalog/catalog.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent implements OnInit {
  isLoading: boolean;
  lastSearchString: string;
  tabs: TabVM[];
  currentTab: TabVM;
  result: SearchResult;

  public cardsFilter = {
    showSoldOut: false,
    orderColumn: <CatalogCardsSortColumn>'Price'
  };

  addCardMessage: string;
  addCardSoldoutErrorMessage: string;

  private _searchString: string;
  private _subscriptions: Subscription[] = [];

  constructor(
    private dialogService: DialogService,
    private catalogService: CatalogService,
    private searchService: SiteSearchService,
    private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private msg: MessageService,
    private router: Router,
    private textService: EditTextService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CartAndOrders, () => {
      this.addCardMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CartAddCard').text;
      this.addCardSoldoutErrorMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CatalogAddCardSoldoutError').text;
    });

    activateRoute.params.subscribe(params => {
      this._searchString = params.searchString;
      this.reload();
    });
  }

  ngOnInit() {
    this._subscriptions.push(this.cartService.cartState.subscribe(
      data => {
        this.onCartStateUpdate();
      }
    ));
  }

  onCartStateUpdate() {
    var cartState = this.cartService.cartState.getValue();
    this.result && this.result.cards && this.result.cards.forEach(card => {
      var row = cartState && cartState.rows && cartState.rows.find(row => row.id == card.id);
      //TODO: завести нормальную модель для карточек
      card.cartQuantity = row && row.detailRows.map(t => t.quantity).reduce((a, b) => a + b, 0) || 0;
    });
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sb => sb.unsubscribe());
  }

  public mouseEnter(card) {
    card.hovered = true;
  }

  public mouseLeave(card) {
    card.hovered = false;
  }

  public addToCart($event, card: any) {
    $event.preventDefault();
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

  public cardClick($event, card) {
    if ($event.defaultPrevented)
      return;

    if (card.hovered) {
      this.openCard(card);
    } else {
      card.hovered = true;
    }
  }

  public openCard(card) {
    console.log("🚀 ~ file: search-results.component.ts ~ line 126 ~ SearchResultsComponent ~ openCard ~ card", card)
    const ref = this.dialogService.open(CardComponent, {
      style: { 'max-height': '95%', overflow: 'auto' },
      data: card.id
    });
    ref.onClose.subscribe(() => this.reload());
  }

  getCards() {
    if (!this.cardsFilter.showSoldOut) {
      return this.getActiveCards();
    } else {
      return this.getExpiredCards();
    }
  }

  getActiveCards() {
    return this.result && this.result.cards ?
      this.result.cards.filter(t => t.unlimited || t.printCountLeft > 0) : [];
  }

  getExpiredCards() {
    return this.result && this.result.cards ?
      this.result.cards.filter(t => t.unlimited || t.printCountLeft > 0) : [];
  }

  private reload() {
    this.isLoading = true;
    this.searchService.search(this._searchString).subscribe(
      response => {
        this.lastSearchString = this._searchString;
        this.result = response;
        this.onCartStateUpdate();
        this.updateTabs();
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  updateTabs() {
    this.tabs = [];
    this.getCards().length && this.tabs.push(new TabVM('cards'));
    this.result.themes.length && this.tabs.push(new TabVM('themes'));
    this.result.series.length && this.tabs.push(new TabVM('series'));
    this.result.sets.length && this.tabs.push(new TabVM('sets'));
    this.result.otherResults.length && this.tabs.push(new TabVM('other'));
    this.currentTab = this.tabs.length && this.tabs[0] || null;

    //process search markers
    this.result.cards.forEach(t => {
      t.title = this.searchService.processSearchMarkers(t.title);
    });
    this.result.themes.forEach(t => {
      t.name = this.searchService.processSearchMarkers(t.name);
      t.shortDescription = this.searchService.processSearchMarkers(t.shortDescription);
    });
    this.result.series.forEach(g => g.series.forEach(t => {
      t.name = this.searchService.processSearchMarkers(t.name);
      t.shortDescription = this.searchService.processSearchMarkers(t.shortDescription);
    }));
    this.result.sets.forEach(g => g.sets.forEach(t => {
      t.name = this.searchService.processSearchMarkers(t.name);
      t.shortDescription = this.searchService.processSearchMarkers(t.shortDescription);
    }));
    this.result.otherResults.forEach(t => {
      t.title = this.searchService.processSearchMarkers(t.title);
      t.description = this.searchService.processSearchMarkers(t.description);
    });
  }

  hasChildren(catalogLevel: CatalogLevel, level: number): boolean {
    if (level == 1) {
      return catalogLevel.children.length && catalogLevel.children.every(child => child.children.length <= 0);
    } else if (level == 2) {
      return catalogLevel.children.some(child => child.children.length > 0);
    } else {
      return false;
    }
  }
  hasNoChildren(catalogLevel: CatalogLevel) {
    return catalogLevel.children.length <= 0;
  }

  getOtherResultPath(result: OtherResult) {
    if (result.type == 'BlogPost')
      return 'Главная / Будь в курсе ';
    else if (result.type == 'TextPage')
      return 'Главная';
    else
      return '';
  }

  gotoOtherResult(result: OtherResult) {
    let url = this.getOtherResultLink(result);
    this.router.navigate([url]);
  }

  getOtherResultLink(result: OtherResult) {
    if (result.type == 'BlogPost')
      return `/blog/${result.logicalName}`;
    else if (result.type == 'TextPage')
      return `/${result.logicalName}`;
    else
      return '';
  }
}
