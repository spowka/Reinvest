import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardSiteDetails } from 'src/app/admin/shared/cards/card.model';
import { CardService } from 'src/app/admin/shared/cards/card.service';
import { MessageService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { EditTextService } from 'src/app/admin/shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from 'src/app/admin/shared/edit-texts/MessageGroupEnum';
import { CaptchaCancelledError } from 'src/app/admin/shared/cart/cart.model';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { rollCardAnimation } from 'src/app/shared/animations/reloadCard.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [rollCardAnimation],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  public card: CardSiteDetails = null;
  public sidesTurned: boolean;
  public quantity: number = 1;
  public adding: boolean = false;

  cardId: string;
  cardPrice: number;
  activeCard: boolean;
  addToCartEnabled: boolean = true;
  addCardMessage: string;
  addCardSoldoutErrorMessage: string;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    protected cardService: CardService,
    private cartService: CartService,
    private msg: MessageService,
    private textService: EditTextService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CartAndOrders, () => {
      this.addCardMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CartAddCard').text;
      this.addCardSoldoutErrorMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CatalogAddCardSoldoutError').text;
    });

    if (this.config) {
      this.cardId = this.config.data;
      this.loadData();
    }
  }

  ngOnInit() {
  }

  switchSides() {
    setTimeout(() => {
      this.sidesTurned = !this.sidesTurned;
    }, 300)
  }

  addToCart() {
    if (!this.addToCartEnabled)
      return;

    this.adding = true;

    this.cartService.add(this.cardId, this.quantity).subscribe(
      response => {
        this.msg.add({ severity: 'success', summary: 'Товар добавлен в корзину', detail: this.addCardMessage });
        this.adding = false;
      },
      error => {
        this.adding = false;
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

  incrementQuantity(): void {
    if (this.quantity < this.card.printCountLeft) {
      this.quantity++;
      this.cardPrice = this.card.price * this.quantity
    }
  }

  decrementQuantity(): void {
    if (this.quantity >= 1) {
      this.quantity--;
      this.cardPrice = this.card.price * this.quantity
    }
  }

  getOld(e: any) {
    if (e.currentTarget.value.length < 1) {
      this.quantity = 1;
      this.cardPrice = this.card.price * this.quantity;
    }
  }

  getCounterChange() {
    if (this.quantity >= this.card.printCountLeft) {
      this.quantity = this.card.printCountLeft;
    }

    if (this.quantity > 0) {
      this.cardPrice = this.card.price * this.quantity;
    }
  }

  close() {
    this.adding = false;
    this.ref.close(null)
  }

  private loadData() {
    this.sidesTurned = false;
    if (this.cardId) {
      this.cardService.getCardDetails(this.cardId).subscribe(
        (response: CardSiteDetails) => {
          this.card = response;
          this.cardPrice = response.price;
        });
    }
  }
}
