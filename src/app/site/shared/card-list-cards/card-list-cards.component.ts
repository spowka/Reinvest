import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogService, MessageService } from 'primeng/api';
import { CaptchaCancelledError } from 'src/app/admin/shared/cart/cart.model';
import { CatalogTopLevel } from 'src/app/admin/shared/catalog/catalog.model';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { CartService } from 'src/app/api/services';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'rs-card-list-cards',
  templateUrl: './card-list-cards.component.html',
  styleUrls: ['./card-list-cards.component.sass']
})
export class CardListCardsComponent implements OnInit {

  @Input() cardList: any[];
  @Input() cardsTitle: string;
  @Input() showMoreTitle: string;
  @Input() cardQuantity: number;
  @Output() handleShowMore = new EventEmitter();

  addCardSoldoutErrorMessage: string;
  addCardMessage: string;

  constructor(
    private dialogService: DialogService,
    private cartService: CartService,
    private msg: MessageService,
  ) { }

  ngOnInit() {}

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

  public openCard(card) {
    const ref = this.dialogService.open(CardComponent, {
      style: { 'max-height': '95%', overflow: 'auto' },
      data: card.id
    });
    // ref.onClose.subscribe(() => this.reload());
  }

  onShowMore(): void {
    this.handleShowMore.emit();
  }

}
