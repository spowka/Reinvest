import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { GetCartResponse, CartRow, CaptchaCancelledError } from 'src/app/admin/shared/cart/cart.model';
import { ConfirmationService, DialogService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { Consts } from 'src/app/consts';
import { SiteAuthService } from '../../shared/auth-service/auth.service';
import { CardComponent } from '../card/card.component';
import { Subscription, Subject } from 'rxjs';
import { FormCartRow } from './FormCartRow';
import { EditTextService } from 'src/app/admin/shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from 'src/app/admin/shared/edit-texts/MessageGroupEnum';
import { padNumber } from 'src/app/admin/shared/helpers/format-helper';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  cart: GetCartResponse;
  rows: FormCartRow[];

  cols: any[];
  updating: boolean;
  lastDeletedRow: CartRow;

  countdownTime: string;
  countdownMessage: string;
  addCardSoldoutErrorMessage: string;

  // for promo code  
  isNotification: boolean = false;
  isError: boolean = false;
  isPromoSalePercent: any = 25;
  promocode: string = '';
  withPromoUpdating: boolean = false;
  isSelectCard: any;
  // *********************************

  private _debounceCode = new Subject<FormCartRow>();
  private _subscriptions: Subscription[] = [];

  constructor(
    private dialogService: DialogService,
    private cartService: CartService,
    private auth: SiteAuthService,
    private orderService: OrderService,
    private confirmService: ConfirmationService,
    private router: Router,
    private textService: EditTextService,
    private msg: MessageService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CartAndOrders, () => {
      this.countdownMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CartCountdown').text;
      this.addCardSoldoutErrorMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CatalogAddCardSoldoutError').text;
    });

    this.auth.currentUser.subscribe(value => this.cartService.reloadCart());

    this._subscriptions.push(this.cartService.cartState.subscribe(
      value => {
        this.cart = value;

        if (value) {
          this.rows = value.rows && value.rows.map(t => ({ ...t, isDeleted: false }) as FormCartRow) || [];
          if (this.lastDeletedRow && !this.rows.filter(t => t.id == this.lastDeletedRow.id).length) {
            this.rows.push({ ...this.lastDeletedRow, isDeleted: true } as FormCartRow);
          }
        }
      }));
    this._subscriptions.push(this.cartService.cartCountdownState.subscribe(
      value => this.countdownTime = value
    ));

    this._debounceCode.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(value => {
      if (value)
        this.quantityChange(value);
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'previewImage' },
      { field: 'title' },
      { field: 'price' },
      { field: 'quantity' },
      { field: 'rowPrice' },
      {}
    ];
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sb => sb.unsubscribe());
  }

  quantityChange(rowData) {
    //не знаю почему, но этот обработчик вызывается дважды при каждом изменении
    //поэтому мы должны игнорировать второй вызов
    if (this.updating) {
      return;
    }

    if (!rowData.rowQuantity) {
      return;
    }

    this.updating = true;
    this.cartService.updateCart(rowData.id, rowData.rowQuantity).subscribe(
      response => {
        this.cartService.reloadCart(() => {
          this.updating = false;
        });
      },
      error => {
        if (error == CaptchaCancelledError)
          return;
        this.cartService.reloadCart(() => {
          this.updating = false;
        });
        console.log(error);

        let detail = `Не удалось добавить товар в корзину. ${ServerErrorHelper.getError(error, 'Неизвестная ошибка')}`;
        ServerErrorHelper.processErrorModel(error, 'NotEnoughAvailableCardsErrorResponse', (errorModel) => {
          detail = this.addCardSoldoutErrorMessage;
        });
        this.msg.add({ severity: 'error', summary: 'Ошибка', detail });
      }
    );
  }

  incrementRowQuantity(rowData: FormCartRow): void {
    if (rowData.printCountLeft > 0) {
      this.isSelectCard = rowData.id;
      rowData.rowQuantity++;
      this._debounceCode.next(rowData);
    }
  }

  decrementRowQuantity(rowData: FormCartRow): void {
    if (rowData.rowQuantity > 0) {
      this.isSelectCard = rowData.id;
      rowData.rowQuantity--;
      this._debounceCode.next(rowData);
    }
  }

  remove(rowData: FormCartRow) {
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: 'Подтвердите удаление',
      message: 'Убрать карточку из корзины?',
      acceptLabel: 'Убрать',
      rejectLabel: 'Оставить',
      accept: () => {
        this.updating = true;
        this.cartService.deleteCart(rowData.id).subscribe(
          response => {
            this.updating = false;
            this.lastDeletedRow = rowData;
            this.cartService.reloadCart();
          },
          error => {
            this.updating = false;
            if (error == CaptchaCancelledError)
              return;
            console.log(error);
            let detail = ServerErrorHelper.getError(error, 'Неизвестная ошибка');
            this.msg.add({ severity: 'error', summary: 'Ошибка', detail });
            this.cartService.reloadCart();
          }
        );
      }
    });
  }

  restore(rowData: FormCartRow) {
    this.updating = true;
    this.cartService.add(rowData.id, rowData.rowQuantity).subscribe(
      response => {
        this.updating = false;
        this.lastDeletedRow = null;
        this.cartService.reloadCart();
      },
      error => {
        this.updating = false;
        if (error == CaptchaCancelledError)
          return;
        this.cartService.reloadCart();
        console.log(error);
        const detail = `Не удалось добавить товар в корзину. ${ServerErrorHelper.getError(error, 'Неизвестная ошибка')}`;
        this.msg.add({ severity: 'error', summary: 'Ошибка', detail });
      }
    );
  }

  cardClick($event, card: FormCartRow) {
    if ($event.defaultPrevented)
      return;

    const ref = this.dialogService.open(CardComponent, {
      style: { 'max-height': '95%', overflow: 'auto' },
      data: card.id
    });
    ref.onClose.subscribe(() => {
      this.cartService.reloadCart();
    });
  }

  startCheckout() {
    this.cartService.startCheckout().subscribe(
      response => {
        this.orderService.setOrderItems(this.rows.filter(t => !t.isDeleted), this.cart.totalPrice);
        this.router.navigate(['/create-order']);
      },
      error => {
        this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось начать оформление заказа. Пожалуйста, обратитесь в службу поддержки.' });
      }
    );
  }

  // for promo code
  applyCode() {
    this.updating = true;
    this.withPromoUpdating = true;
    setTimeout(() => {
      this.updating = false;
      this.withPromoUpdating = false;
    }, 500)
  }
}
