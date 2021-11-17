/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPPMOrderGetOrdersResponse } from '../models/trade-cards-models-ppmorder-get-orders-response';
import { TradeCardsModelsPPMOrderGetOrdersRequest } from '../models/trade-cards-models-ppmorder-get-orders-request';
import { TradeCardsModelsPPMOrderSetAwaitingDeliveryRequest } from '../models/trade-cards-models-ppmorder-set-awaiting-delivery-request';
import { TradeCardsModelsPPMOrderGetOrderDetailsResponse } from '../models/trade-cards-models-ppmorder-get-order-details-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
@Injectable({
  providedIn: 'root',
})
class PPMOrderService extends __BaseService {
  static readonly getOrdersPath = '/api/ppm-order/query';
  static readonly setAwaitingDeliveryPath = '/api/ppm-order/set-awaiting-delivery';
  static readonly getOrderDetailsPath = '/api/ppm-order/{id}/details';
  static readonly updateOrderPath = '/api/ppm-order/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка заказов
   * @param model undefined
   * @return Success
   */
  getOrdersResponse(model?: TradeCardsModelsPPMOrderGetOrdersRequest): __Observable<__StrictHttpResponse<TradeCardsModelsPPMOrderGetOrdersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ppm-order/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPPMOrderGetOrdersResponse>;
      })
    );
  }
  /**
   * Получение списка заказов
   * @param model undefined
   * @return Success
   */
  getOrders(model?: TradeCardsModelsPPMOrderGetOrdersRequest): __Observable<TradeCardsModelsPPMOrderGetOrdersResponse> {
    return this.getOrdersResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsPPMOrderGetOrdersResponse)
    );
  }

  /**
   * Перевод одного или нескольких заказов в статус "Ожидает выдачи"
   * @param request undefined
   */
  setAwaitingDeliveryResponse(request?: TradeCardsModelsPPMOrderSetAwaitingDeliveryRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ppm-order/set-awaiting-delivery`,
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
   * Перевод одного или нескольких заказов в статус "Ожидает выдачи"
   * @param request undefined
   */
  setAwaitingDelivery(request?: TradeCardsModelsPPMOrderSetAwaitingDeliveryRequest): __Observable<null> {
    return this.setAwaitingDeliveryResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение детальных сведений о заказе
   * @param id undefined
   * @return Success
   */
  getOrderDetailsResponse(id: number): __Observable<__StrictHttpResponse<TradeCardsModelsPPMOrderGetOrderDetailsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ppm-order/${encodeURIComponent(id)}/details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPPMOrderGetOrderDetailsResponse>;
      })
    );
  }
  /**
   * Получение детальных сведений о заказе
   * @param id undefined
   * @return Success
   */
  getOrderDetails(id: number): __Observable<TradeCardsModelsPPMOrderGetOrderDetailsResponse> {
    return this.getOrderDetailsResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsPPMOrderGetOrderDetailsResponse)
    );
  }

  /**
   * Обновление заказа через админку
   * @param params The `PPMOrderService.UpdateOrderParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `NewStatusComment`:
   *
   * - `NewStatus`:
   *
   * - `Comment`:
   *
   * @return Success
   */
  updateOrderResponse(params: PPMOrderService.UpdateOrderParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.NewStatusComment != null) { __formData.append('NewStatusComment', params.NewStatusComment as string | Blob);}
    if (params.NewStatus != null) { __formData.append('NewStatus', params.NewStatus as string | Blob);}
    if (params.Comment != null) { __formData.append('Comment', params.Comment as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ppm-order/${encodeURIComponent(params.id)}`,
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
   * @param params The `PPMOrderService.UpdateOrderParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `NewStatusComment`:
   *
   * - `NewStatus`:
   *
   * - `Comment`:
   *
   * @return Success
   */
  updateOrder(params: PPMOrderService.UpdateOrderParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateOrderResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }
}

module PPMOrderService {

  /**
   * Parameters for UpdateOrder
   */
  export interface UpdateOrderParams {
    id: number;
    NewStatusComment?: string;
    NewStatus?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
    Comment?: string;
  }
}

export { PPMOrderService }
