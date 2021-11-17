/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsCartAddRowResponse } from '../models/trade-cards-models-cart-add-row-response';
import { TradeCardsModelsCartAddRowRequest } from '../models/trade-cards-models-cart-add-row-request';
import { TradeCardsModelsCartUpdateRowResponse } from '../models/trade-cards-models-cart-update-row-response';
import { TradeCardsModelsCartUpdateRowRequest } from '../models/trade-cards-models-cart-update-row-request';
import { TradeCardsModelsCartDeleteRowResponse } from '../models/trade-cards-models-cart-delete-row-response';
import { TradeCardsModelsCartDeleteRowRequest } from '../models/trade-cards-models-cart-delete-row-request';
import { TradeCardsModelsCartCart } from '../models/trade-cards-models-cart-cart';
import { TradeCardsModelsCartMoveCartRequest } from '../models/trade-cards-models-cart-move-cart-request';
import { TradeCardsModelsCartTimerInfoResponse } from '../models/trade-cards-models-cart-timer-info-response';
@Injectable({
  providedIn: 'root',
})
class CartService extends __BaseService {
  static readonly addPath = '/api/cart/add';
  static readonly updateRowPath = '/api/cart/update';
  static readonly deletePath = '/api/cart/delete';
  static readonly getCartPath = '/api/cart';
  static readonly moveCartPath = '/api/cart/move';
  static readonly startCheckoutPath = '/api/cart/start-checkout';
  static readonly renewTimerPath = '/api/cart/renew-inaction-timer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Добавить карточку в корзину
   * @param request undefined
   * @return Success
   */
  addResponse(request?: TradeCardsModelsCartAddRowRequest): __Observable<__StrictHttpResponse<TradeCardsModelsCartAddRowResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cart/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCartAddRowResponse>;
      })
    );
  }
  /**
   * Добавить карточку в корзину
   * @param request undefined
   * @return Success
   */
  add(request?: TradeCardsModelsCartAddRowRequest): __Observable<TradeCardsModelsCartAddRowResponse> {
    return this.addResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsCartAddRowResponse)
    );
  }

  /**
   * Обновить количество карточек в корзине
   * @param request undefined
   * @return Success
   */
  updateRowResponse(request?: TradeCardsModelsCartUpdateRowRequest): __Observable<__StrictHttpResponse<TradeCardsModelsCartUpdateRowResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cart/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCartUpdateRowResponse>;
      })
    );
  }
  /**
   * Обновить количество карточек в корзине
   * @param request undefined
   * @return Success
   */
  updateRow(request?: TradeCardsModelsCartUpdateRowRequest): __Observable<TradeCardsModelsCartUpdateRowResponse> {
    return this.updateRowResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsCartUpdateRowResponse)
    );
  }

  /**
   * Удалить карточку из корзины
   * @param request undefined
   * @return Success
   */
  deleteResponse(request?: TradeCardsModelsCartDeleteRowRequest): __Observable<__StrictHttpResponse<TradeCardsModelsCartDeleteRowResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cart/delete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCartDeleteRowResponse>;
      })
    );
  }
  /**
   * Удалить карточку из корзины
   * @param request undefined
   * @return Success
   */
  delete(request?: TradeCardsModelsCartDeleteRowRequest): __Observable<TradeCardsModelsCartDeleteRowResponse> {
    return this.deleteResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsCartDeleteRowResponse)
    );
  }

  /**
   * Получение списка карточек
   * @return Success
   */
  getCartResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsCartCart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/cart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCartCart>;
      })
    );
  }
  /**
   * Получение списка карточек
   * @return Success
   */
  getCart(): __Observable<TradeCardsModelsCartCart> {
    return this.getCartResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsCartCart)
    );
  }

  /**
   * Перенести содержимое корзины из гостевого акаунта в покупательский
   * @param request undefined
   */
  moveCartResponse(request?: TradeCardsModelsCartMoveCartRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cart/move`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Перенести содержимое корзины из гостевого акаунта в покупательский
   * @param request undefined
   */
  moveCart(request?: TradeCardsModelsCartMoveCartRequest): __Observable<null> {
    return this.moveCartResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Начинает обратный отсчет на оформление заказа
   */
  startCheckoutResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cart/start-checkout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Начинает обратный отсчет на оформление заказа
   */
  startCheckout(): __Observable<null> {
    return this.startCheckoutResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Обновляет таймер на бездействие терминала
   * @return Success
   */
  renewTimerResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsCartTimerInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cart/renew-inaction-timer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCartTimerInfoResponse>;
      })
    );
  }
  /**
   * Обновляет таймер на бездействие терминала
   * @return Success
   */
  renewTimer(): __Observable<TradeCardsModelsCartTimerInfoResponse> {
    return this.renewTimerResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsCartTimerInfoResponse)
    );
  }
}

module CartService {
}

export { CartService }
