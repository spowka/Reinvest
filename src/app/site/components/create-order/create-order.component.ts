import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { GetCartResponse, CartRow } from 'src/app/admin/shared/cart/cart.model';
import { ConfirmationService, MessageService, DialogService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { SiteAuthService } from '../../shared/auth-service/auth.service';
import { PhoneNumberRegex } from 'src/app/shared/validation';
import { Router } from '@angular/router';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { DeliveryType as DeliveryType, PickupPointOrderModel } from 'src/app/admin/shared/order/order.model';
import { GeoService } from 'src/app/admin/shared/geo-service/geo.service';
import { ProfileService } from '../../shared/profile/profile.service';
import { EditTextService } from 'src/app/admin/shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from 'src/app/admin/shared/edit-texts/MessageGroupEnum';
import { OrderPaymentComponent } from './order-payment/order-payment.component';
import { initRbkmoneyCheckout } from '../../shared/rbk-loader/rbk-loader';
import { Consts } from 'src/app/consts';
import { Subscription, Observable, combineLatest, of } from 'rxjs';
import { catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormHelper } from 'src/app/admin/shared/helpers/form-helper';

const maxRows = 5;

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOrderComponent implements OnInit {
  form: FormGroup;
  rows: CartRow[];
  totalPrice: number;
  sending: boolean;
  isAuthorized: boolean;
  deliveryType: DeliveryType;
  showAllRows: boolean;
  cartGuestContactsNotice: string;
  cartCustomerContactsNotice: string;
  cartOrderPickupNotice: string;
  cartOrderDeliveryNotice: string;
  orderPaymentMessage: string;
  orderGuestCreateAccountMessage: string;
  orderGuestCreateAccountErrorDuplicateEmailMessage: string;

  hasSaveAttempt: boolean;
  selectedPickpoint: PickupPointOrderModel;

  isRBKMoneyEnabled: boolean;
  invoiceId: string;
  invoiceAccessToken: string;

  timer: NodeJS.Timer = null;
  checkoutDialog: any;

  countdownTime: string;
  countdownMessage: string;

  private _subscriptions: Subscription[] = [];

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private confirmService: ConfirmationService,
    private formBuilder: FormBuilder,
    private auth: SiteAuthService,
    private router: Router,
    private msg: MessageService,
    private formService: FormService,
    private geoService: GeoService,
    private cdr: ChangeDetectorRef,
    private profileService: ProfileService,
    private textService: EditTextService,
    public dialogService: DialogService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Cart, () => {
      this.cartGuestContactsNotice = this.textService.getText(MessageGroupEnum.Cart, 'CartGuestContactsNotice').text;
      this.cartCustomerContactsNotice = this.textService.getText(MessageGroupEnum.Cart, 'CartCustomerContactsNotice').text;
      this.cartOrderPickupNotice = this.textService.getText(MessageGroupEnum.Cart, 'CartOrderPickupNotice').text;
      this.cartOrderDeliveryNotice = this.textService.getText(MessageGroupEnum.Cart, 'CartOrderDeliveryNotice').text;
    });
    this.textService.loadTextsGroup(MessageGroupEnum.CartAndOrders, () => {
      this.countdownMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'OrderCountdown').text;
      this.orderPaymentMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'OrderPayment').text;
      this.orderGuestCreateAccountMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'OrderGuestCreateAccount').text;
      this.orderGuestCreateAccountErrorDuplicateEmailMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'OrderGuestCreateAccountErrorDuplicateEmail').text;
    });

    if (!this.orderService.currentOrder || !this.orderService.currentOrder.items.length) {
      this.router.navigate(['/cart']);
    }

    this.rows = this.orderService.currentOrder.items;
    this.showAllRows = false;
    this.totalPrice = this.orderService.currentOrder.totalPrice;

    var user = this.auth.currentUser.getValue();
    this.isAuthorized = user && user.userType == 'Customer';

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email]), this.validateEmailAsync.bind(this)],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(PhoneNumberRegex)])],
      deliveryRegion: ['', FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)],
      deliveryCity: ['', FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)],
      deliveryPostIndex: [''],
      deliveryStreet: ['', FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)],
      deliveryHouse: ['', FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)],
      deliveryBuilding: [''],
      deliveryApartment: [''],
      comment: [''],
      createAccount: [!this.isAuthorized]
    });

    if (this.isAuthorized) {
      this.profileService.getProfile().subscribe(value => {
        this.form.controls.firstName.setValue(value.firstName || '');
        this.form.controls.lastName.setValue(value.lastName || '');
        this.form.controls.email.setValue(value.email || '');
        this.form.controls.phone.setValue(value.phoneNumber || '');
        this.form.controls.deliveryRegion.setValue(value.deliveryRegion || '');
        this.form.controls.deliveryCity.setValue(value.deliveryCity || '');
        this.form.controls.deliveryPostIndex.setValue(value.deliveryPostIndex || '');
        this.form.controls.deliveryStreet.setValue(value.deliveryStreet || '');
        this.form.controls.deliveryHouse.setValue(value.deliveryHouse || '');
        this.form.controls.deliveryBuilding.setValue(value.deliveryBuilding || '');
        this.form.controls.deliveryApartment.setValue(value.deliveryApartment || '');
      });
    }
  }

  ngOnInit() {
    let thisVM = this;

    this.setDeliveryType('Pickpoint');

    initRbkmoneyCheckout().subscribe(() => this.isRBKMoneyEnabled = true);

    this.timer = setInterval(() => this.checkInvoiceTimer(thisVM), 5000);

    this._subscriptions.push(this.cartService.cartCleanup.subscribe(() => this.router.navigate(['/cart'])));
    this._subscriptions.push(this.cartService.cartCountdownState.subscribe(value => this.countdownTime = value));
  }

  ngOnDestroy() {
    this.timer && clearInterval(this.timer);
    this._subscriptions.forEach(sb => sb.unsubscribe());
  }

  checkInvoiceTimer(thisVM: CreateOrderComponent) {
    if (thisVM.isRBKMoneyEnabled && thisVM.invoiceId) {
      thisVM.orderService.getPaymentStatus({ invoiceId: thisVM.invoiceId }).subscribe(
        response => {
          switch (response.status) {
            case 'Success': {
              thisVM.checkoutDialog && thisVM.checkoutDialog.close();
              thisVM.auth.reloadUser();
              thisVM.cartService.reloadCart();
              thisVM.router.navigate(['/order-created']);
              break;
            }
            case 'Cancelled': {
              thisVM.checkoutDialog && thisVM.checkoutDialog.close();
              this.confirmService.confirm({
                ...Consts.Confirmation,
                header: 'Не удалось создать заказ',
                message: `Время на оплату счета истекло.`,
                acceptLabel: 'OK',
                rejectVisible: false,
                accept: () => { this.router.navigate(['/cart']); }
              });
              break;
            }
            case 'Error': {
              thisVM.checkoutDialog && thisVM.checkoutDialog.close();
              this.confirmService.confirm({
                ...Consts.Confirmation,
                header: 'Не удалось создать заказ',
                message: `Во время оплаты заказа произошла ошибка. Идентификатор счета: ${thisVM.invoiceId}`,
                acceptLabel: 'OK',
                rejectVisible: false,
                accept: () => {
                  this.router.navigate(['/cart']);
                }
              });
              break;
            }
          }
        }
      )
    }
  }

  setSelectedPickpoint(value) {
    this.selectedPickpoint = value;
    this.cdr.detectChanges();
  }

  requiredIfDeliveryTypeAddress(sender: CreateOrderComponent, control: AbstractControl): ValidationErrors | null {
    return sender.form && sender.deliveryType == 'Address' ? Validators.required(control) : null;
  }

  public setDeliveryType(value: DeliveryType) {
    this.deliveryType = value;
  }

  public placeOrder() {
    this.hasSaveAttempt = true;

    if (this.form.invalid) {
      this.formService.showFormErrors(this.msg);
    } else if (this.deliveryType == 'Pickpoint' && !this.selectedPickpoint) {
      this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Выберите пункт самовывоза' });
    } else {
      this.sending = true;

      const form = {
        ...this.form.value,
        totalPrice: this.totalPrice,
        deliveryType: this.deliveryType,
        deliveryPickupPointId: this.deliveryType == 'Pickpoint' && this.selectedPickpoint.id,
      }

      if (this.invoiceId && this.invoiceAccessToken) {
        this.showMoneyCheckout();
      } else {
        this.orderService.placeOrder(form).subscribe(
          response => {
            this.sending = false;

            this.invoiceId = response.invoiceId;
            this.invoiceAccessToken = response.invoiceAccessToken;
            this.showMoneyCheckout();
          },
          error => {
            this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось создать заказ. Рекомендуем вернуться в корзину и попробовать еще раз' });
            this.sending = false;
          }
        );
      }
    }
  }

  //показать платежную форму
  showMoneyCheckout() {
    let thisVM = this;

    initRbkmoneyCheckout().subscribe(
      RbkmoneyCheckout => {
        if (RbkmoneyCheckout) {
          thisVM.checkoutDialog = RbkmoneyCheckout.configure({
            invoiceID: thisVM.invoiceId,
            invoiceAccessToken: thisVM.invoiceAccessToken,
            name: 'TradeCards',
            description: 'Cards',
            opened: () => console.log('Checkout opened'),
            closed: () => { console.log('Checkout closed'); return false; },
            finished: () => { console.log('Payment successful finished'); thisVM.router.navigate(['/order-created']); }
          });
          thisVM.checkoutDialog.open();
        }
      }
    );
  }

  get visibleRows() { return this.showAllRows ? this.rows : this.rows.slice(0, maxRows); }

  get isShowMoreRowsVisible() { return !this.showAllRows && this.rows.length > maxRows; }

  get f() { return this.form.controls; }

  hasError(control: any, validationType: string = null) {
    return FormHelper.controlHasError(control, validationType);
  }

  validateEmailAsync({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.isAuthorized ? of(null) : this.auth.isEmailFree(value).pipe(
      map(response => {
        if (response.hasUser) {
          return { isEmailNotFree: true };
        }
        return null;
      }));
  }
}
