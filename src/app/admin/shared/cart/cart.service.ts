import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject, forkJoin, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map, tap, flatMap } from 'rxjs/internal/operators';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { GetCartResponse, CaptchaCancelledError } from './cart.model';
import { MessageService, DialogService, ConfirmationService } from 'primeng/api';
import { UserChangedEventArgs } from 'src/app/site/shared/auth-service/auth-service.model';
import { CurrentUserSiteResponse } from 'src/app/site/shared/user/user';
import { padNumber } from '../helpers/format-helper';
import { Consts } from 'src/app/consts';
import { EditTextService } from '../edit-texts/edit-text.service';
import { MessageGroupEnum } from '../edit-texts/MessageGroupEnum';
import { CaptchaService } from '../captcha/captcha.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //текущее состояние корзины
  cartState = new BehaviorSubject<GetCartResponse>(null);
  //сколько секунд осталось до очистки корзины (человекочитаемая строка)
  cartCountdownState = new BehaviorSubject<string>(null);
  //событие очистки корзины
  cartCleanup = new EventEmitter<any>();

  private prefix = '/cart';
  private _timer: NodeJS.Timer = null;
  private _cartCountdownEndMessage: string;
  private _orderCountdownEndMessage: string;

  constructor(
    private http: HttpClient,
    private auth: SiteAuthService,
    private backend: BackendService,
    private msg: MessageService,
    private dialogService: DialogService,
    private confirmService: ConfirmationService,
    private textService: EditTextService,
    private captchaService: CaptchaService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CartAndOrders, () => {
      this._cartCountdownEndMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'CartCountdownEnd').text;
      this._orderCountdownEndMessage = this.textService.getText(MessageGroupEnum.CartAndOrders, 'OrderCountdownEnd').text;
    });
    this.auth.currentUserUpdating.subscribe((e: UserChangedEventArgs) => {
      let o = e.oldValue, n = e.newValue;
      if (o && n && o.userType == 'Guest' && n.userType == 'Customer' && e.oldToken) {
        this._moveCartToAccount(e.oldToken, e.newValue.id).subscribe(() => this.reloadCart());
      }
    });
    this.auth.currentUserUpdated.subscribe(() => this.reloadCart());

    this._timer = setInterval(() => {
      this._updateCountdownTime();
    }, 500);
  }

  add(cardId: string, quantity: number | null = null) {
    let thisService = this;

    if (this.auth.currentUser.getValue()) {
      return addInternal();
    } else {
      return this.auth.guestLogin().pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        }),
        flatMap(response => addInternal())
      );
    }

    function addInternal() {
      return thisService.captchaService.getCaptchaIfNeeded().pipe(
        flatMap(res => {
          if (res.userCancel)
            return throwError(CaptchaCancelledError);
          var url = `${environment.API}${thisService.prefix}/add`;

          return thisService.http.post(url, { cardId, quantity, captchaResponse: res.captchaResponse }, {}).pipe(
            catchError(err => {
              console.log(err);
              return throwError(err);
            }),
            tap(data => {
              thisService.reloadCart()
            })
          );
        })
      );
    }
  }

  updateCart(cardId: string, quantity: number) {
    if (this.auth.currentUser.getValue()) {

      return this.captchaService.getCaptchaIfNeeded().pipe(
        flatMap(res => {
          if (res.userCancel)
            return throwError(CaptchaCancelledError);

          return this.http.post(`${environment.API}${this.prefix}/update`, { cardId, quantity, captchaResponse: res.captchaResponse }, {}).pipe(
            catchError(err => {
              console.log(err);
              return throwError(err);
            }),
            tap(data => this.reloadCart())
          )
        })
      );
    }
  }

  deleteCart(cardId: string) {
    if (this.auth.currentUser.getValue()) {
      return this.captchaService.getCaptchaIfNeeded().pipe(
        flatMap(res => {
          if (res.userCancel)
            return throwError(CaptchaCancelledError);

          return this.http.post(`${environment.API}${this.prefix}/delete`, { cardId, captchaResponse: res.captchaResponse }, {}).pipe(
            catchError(err => {
              console.log(err);
              return throwError(err);
            }),
            tap(data => this.reloadCart())
          );
        })
      );
    }
  }

  reloadCart(callback?: () => void) {
    if (this.auth.currentUser.getValue()) {
      this._getCart().subscribe(response => {
        this.cartState.next(response);
        callback && callback();
      });
    } else {
      this.cartState.next(null);
      callback && callback();
    }
  }

  startCheckout() {
    if (this.auth.currentUser.getValue()) {
      return this.http.post(`${environment.API}${this.prefix}/start-checkout`, {}, {}).pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        }),
        tap(data => this.reloadCart())
      );
    }
  }

  private _getCart() {
    return this.http.get<GetCartResponse>(`${environment.API}${this.prefix}`, {}).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  //переносит содержимое корзины из гостевого акаунта в обычный покупательский акаунт
  //вызывается только при смене пользователя с гостя на покупателя
  private _moveCartToAccount(guestToken: string, customerId: string) {
    return this.http.post<GetCartResponse>(`${environment.API}${this.prefix}/move`, { customerId }, {
      headers: {
        'Authorization': `Bearer ${guestToken}`
      }
    }).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      }),
      tap(response => this.cartState.next(response))
    );
  }

  private _updateCountdownTime() {
    let cart = this.cartState.getValue();
    if (cart && cart.cleanupTime) {
      let date = new Date(cart.cleanupTime), currentDate = new Date(new Date().toUTCString());
      let deltaS = (date.getTime() - currentDate.getTime()) / 1000;
      if (deltaS > 0) {
        let minutes = Math.trunc(deltaS / 60);
        let seconds = Math.trunc(deltaS % 60);
        this.cartCountdownState.next(`${padNumber(minutes, 2)}:${padNumber(seconds, 2)}`);
      } else {
        //таймер на очистку корзины истек
        //клиент не очищает корзину, это должен делать сервер
        //клиент просто обновляет содержимое корзины и выводит сообщение об очистке
        this.reloadCart();
        this.cartCountdownState.next(null);

        let message = cart.cleanupType == "Cart" ? this._cartCountdownEndMessage : this._orderCountdownEndMessage;
        this.confirmService.confirm({
          acceptLabel: 'OK', rejectVisible: false,
          header: 'Извините, но ваша корзина очищена',
          message
        });

        this.cartCleanup.emit();
      }
    } else {
      this.cartCountdownState.getValue() && this.cartCountdownState.next(null);
    }
  }
}
