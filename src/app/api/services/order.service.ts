/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsOrderPlaceOrderResponse } from '../models/trade-cards-models-order-place-order-response';
import { TradeCardsModelsOrderPlaceOrderRequest } from '../models/trade-cards-models-order-place-order-request';
import { TradeCardsModelsOrderOrdersBriefModelResponse } from '../models/trade-cards-models-order-orders-brief-model-response';
import { TradeCardsModelsOrderOrdersBriefModelRequest } from '../models/trade-cards-models-order-orders-brief-model-request';
import { TradeCardsModelsOrderOrderDataModel } from '../models/trade-cards-models-order-order-data-model';
import { TradeCardsModelsOrderStartPrintPreparingModel } from '../models/trade-cards-models-order-start-print-preparing-model';
import { TradeCardsModelsOrderGetPickupPointsOrdersRequest } from '../models/trade-cards-models-order-get-pickup-points-orders-request';
import { TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse } from '../models/trade-cards-models-order-get-order-details-for-employee-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsOrderGetPaymentStatusResponse } from '../models/trade-cards-models-order-get-payment-status-response';
import { TradeCardsModelsOrderGetPaymentStatusRequest } from '../models/trade-cards-models-order-get-payment-status-request';
@Injectable({
  providedIn: 'root',
})
class OrderService extends __BaseService {
  static readonly placeOrderPath = '/api/order/place';
  static readonly getOrdersPath = '/api/order/query';
  static readonly getOrderFastDataPath = '/api/order/{id}/data';
  static readonly startPrintPreparingPath = '/api/order/start-printing';
  static readonly getPrintingStatePath = '/api/order/printing-state';
  static readonly getPickupPointsPath = '/api/order/pickpoints';
  static readonly getOrderStatusHistoryPath = '/api/order/{id}/history';
  static readonly getOrderDetailsPath = '/api/order/{id}/details';
  static readonly updateOrderPath = '/api/order/{id}';
  static readonly getPaymentStatusPath = '/api/order/payment-status';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Разместить заказ
   * Здесь мы регистрируем инвойс в системе RBK и передаем в мета-данных все содержимое заказа
   * Заказ будет создан только тогда, когда инвойс будет оплачен
   * @param request undefined
   * @return Success
   */
  placeOrderResponse(request?: TradeCardsModelsOrderPlaceOrderRequest): __Observable<__StrictHttpResponse<TradeCardsModelsOrderPlaceOrderResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order/place`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderPlaceOrderResponse>;
      })
    );
  }
  /**
   * Разместить заказ
   * Здесь мы регистрируем инвойс в системе RBK и передаем в мета-данных все содержимое заказа
   * Заказ будет создан только тогда, когда инвойс будет оплачен
   * @param request undefined
   * @return Success
   */
  placeOrder(request?: TradeCardsModelsOrderPlaceOrderRequest): __Observable<TradeCardsModelsOrderPlaceOrderResponse> {
    return this.placeOrderResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderPlaceOrderResponse)
    );
  }

  /**
   * Получение списка заказов
   * @param model undefined
   * @return Success
   */
  getOrdersResponse(model?: TradeCardsModelsOrderOrdersBriefModelRequest): __Observable<__StrictHttpResponse<TradeCardsModelsOrderOrdersBriefModelResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderOrdersBriefModelResponse>;
      })
    );
  }
  /**
   * Получение списка заказов
   * @param model undefined
   * @return Success
   */
  getOrders(model?: TradeCardsModelsOrderOrdersBriefModelRequest): __Observable<TradeCardsModelsOrderOrdersBriefModelResponse> {
    return this.getOrdersResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderOrdersBriefModelResponse)
    );
  }

  /**
   * Получение сведений о заказе для быстрого просмотра из списка заказов
   * @param id undefined
   * @return Success
   */
  getOrderFastDataResponse(id: number): __Observable<__StrictHttpResponse<TradeCardsModelsOrderOrderDataModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/${encodeURIComponent(id)}/data`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderOrderDataModel>;
      })
    );
  }
  /**
   * Получение сведений о заказе для быстрого просмотра из списка заказов
   * @param id undefined
   * @return Success
   */
  getOrderFastData(id: number): __Observable<TradeCardsModelsOrderOrderDataModel> {
    return this.getOrderFastDataResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderOrderDataModel)
    );
  }

  /**
   * Подготовка к печати одного или нескольких заказов
   * @param model undefined
   */
  startPrintPreparingResponse(model?: TradeCardsModelsOrderStartPrintPreparingModel): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order/start-printing`,
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
   * Подготовка к печати одного или нескольких заказов
   * @param model undefined
   */
  startPrintPreparing(model?: TradeCardsModelsOrderStartPrintPreparingModel): __Observable<null> {
    return this.startPrintPreparingResponse(model).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение состояния печати
   * @param id undefined
   * @return Success
   */
  getPrintingStateResponse(id?: string): __Observable<__StrictHttpResponse<'Preparing' | 'Printing' | 'Finished'>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/printing-state`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<'Preparing' | 'Printing' | 'Finished'>;
      })
    );
  }
  /**
   * Получение состояния печати
   * @param id undefined
   * @return Success
   */
  getPrintingState(id?: string): __Observable<'Preparing' | 'Printing' | 'Finished'> {
    return this.getPrintingStateResponse(id).pipe(
      __map(_r => _r.body as 'Preparing' | 'Printing' | 'Finished')
    );
  }

  /**
   * Получение списка пунктов самовывоза для страницы оформления заказа
   * @return Success
   */
  getPickupPointsResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsOrderGetPickupPointsOrdersRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/pickpoints`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderGetPickupPointsOrdersRequest>;
      })
    );
  }
  /**
   * Получение списка пунктов самовывоза для страницы оформления заказа
   * @return Success
   */
  getPickupPoints(): __Observable<TradeCardsModelsOrderGetPickupPointsOrdersRequest> {
    return this.getPickupPointsResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsOrderGetPickupPointsOrdersRequest)
    );
  }

  /**
   * Получение истории статусов заказа.
   * Если запрашивает сотрудник, то выводится полная информация по любому заказу.
   * Если запрашивает покупатель, то выводится сокращенная инфа и только по своим заказам.
   * @param id undefined
   */
  getOrderStatusHistoryResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/${encodeURIComponent(id)}/history`,
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
   * Получение истории статусов заказа.
   * Если запрашивает сотрудник, то выводится полная информация по любому заказу.
   * Если запрашивает покупатель, то выводится сокращенная инфа и только по своим заказам.
   * @param id undefined
   */
  getOrderStatusHistory(id: number): __Observable<null> {
    return this.getOrderStatusHistoryResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение детальных сведений о заказе
   * @param id undefined
   * @return Success
   */
  getOrderDetailsResponse(id: number): __Observable<__StrictHttpResponse<TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order/${encodeURIComponent(id)}/details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse>;
      })
    );
  }
  /**
   * Получение детальных сведений о заказе
   * @param id undefined
   * @return Success
   */
  getOrderDetails(id: number): __Observable<TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse> {
    return this.getOrderDetailsResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse)
    );
  }

  /**
   * Обновление заказа через админку
   * @param params The `OrderService.UpdateOrderParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `NewStatusComment`:
   *
   * - `NewStatus`:
   *
   * - `DeliveryStreet`:
   *
   * - `DeliveryRegion`:
   *
   * - `DeliveryPostIndex`:
   *
   * - `DeliveryHouse`:
   *
   * - `DeliveryCity`:
   *
   * - `DeliveryBuilding`:
   *
   * - `DeliveryApartment`:
   *
   * - `Comment`:
   *
   * @return Success
   */
  updateOrderResponse(params: OrderService.UpdateOrderParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.NewStatusComment != null) { __formData.append('NewStatusComment', params.NewStatusComment as string | Blob);}
    if (params.NewStatus != null) { __formData.append('NewStatus', params.NewStatus as string | Blob);}
    if (params.DeliveryStreet != null) { __formData.append('DeliveryStreet', params.DeliveryStreet as string | Blob);}
    if (params.DeliveryRegion != null) { __formData.append('DeliveryRegion', params.DeliveryRegion as string | Blob);}
    if (params.DeliveryPostIndex != null) { __formData.append('DeliveryPostIndex', params.DeliveryPostIndex as string | Blob);}
    if (params.DeliveryHouse != null) { __formData.append('DeliveryHouse', params.DeliveryHouse as string | Blob);}
    if (params.DeliveryCity != null) { __formData.append('DeliveryCity', params.DeliveryCity as string | Blob);}
    if (params.DeliveryBuilding != null) { __formData.append('DeliveryBuilding', params.DeliveryBuilding as string | Blob);}
    if (params.DeliveryApartment != null) { __formData.append('DeliveryApartment', params.DeliveryApartment as string | Blob);}
    if (params.Comment != null) { __formData.append('Comment', params.Comment as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/order/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Обновление заказа через админку
   * @param params The `OrderService.UpdateOrderParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `NewStatusComment`:
   *
   * - `NewStatus`:
   *
   * - `DeliveryStreet`:
   *
   * - `DeliveryRegion`:
   *
   * - `DeliveryPostIndex`:
   *
   * - `DeliveryHouse`:
   *
   * - `DeliveryCity`:
   *
   * - `DeliveryBuilding`:
   *
   * - `DeliveryApartment`:
   *
   * - `Comment`:
   *
   * @return Success
   */
  updateOrder(params: OrderService.UpdateOrderParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateOrderResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Получение статуса заказа
   * @param request undefined
   * @return Success
   */
  getPaymentStatusResponse(request?: TradeCardsModelsOrderGetPaymentStatusRequest): __Observable<__StrictHttpResponse<TradeCardsModelsOrderGetPaymentStatusResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order/payment-status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderGetPaymentStatusResponse>;
      })
    );
  }
  /**
   * Получение статуса заказа
   * @param request undefined
   * @return Success
   */
  getPaymentStatus(request?: TradeCardsModelsOrderGetPaymentStatusRequest): __Observable<TradeCardsModelsOrderGetPaymentStatusResponse> {
    return this.getPaymentStatusResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderGetPaymentStatusResponse)
    );
  }
}

module OrderService {

  /**
   * Parameters for UpdateOrder
   */
  export interface UpdateOrderParams {
    id: number;
    NewStatusComment?: string;
    NewStatus?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
    DeliveryStreet?: string;
    DeliveryRegion?: string;
    DeliveryPostIndex?: string;
    DeliveryHouse?: string;
    DeliveryCity?: string;
    DeliveryBuilding?: string;
    DeliveryApartment?: string;
    Comment?: string;
  }
}

export { OrderService }
