/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsOrderTerminalOrderTerminalBriefResponse } from '../models/trade-cards-models-order-terminal-order-terminal-brief-response';
import { TradeCardsModelsOrderTerminalPrintingOrderTerminalResultRequest } from '../models/trade-cards-models-order-terminal-printing-order-terminal-result-request';
import { TradeCardsModelsOrderTerminalGetOrderTerminalListResponse } from '../models/trade-cards-models-order-terminal-get-order-terminal-list-response';
import { TradeCardsModelsOrderTerminalGetOrderTerminalListRequest } from '../models/trade-cards-models-order-terminal-get-order-terminal-list-request';
import { TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse } from '../models/trade-cards-models-order-terminal-get-order-terminal-details-for-employee-response';
@Injectable({
  providedIn: 'root',
})
class OrderTerminalService extends __BaseService {
  static readonly startPrintingTerminalPath = '/api/order-terminal/start-printing';
  static readonly printingOrderTermialResultPath = '/api/order-terminal/printing-result';
  static readonly getOrdersPath = '/api/order-terminal/query';
  static readonly getOrderDetailsPath = '/api/order-terminal/{id}/details';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Сигнал терминала, что заказ оплачен и началась печать
   * @return Success
   */
  startPrintingTerminalResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsOrderTerminalOrderTerminalBriefResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order-terminal/start-printing`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderTerminalOrderTerminalBriefResponse>;
      })
    );
  }
  /**
   * Сигнал терминала, что заказ оплачен и началась печать
   * @return Success
   */
  startPrintingTerminal(): __Observable<TradeCardsModelsOrderTerminalOrderTerminalBriefResponse> {
    return this.startPrintingTerminalResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsOrderTerminalOrderTerminalBriefResponse)
    );
  }

  /**
   * Сообщение результата печати заказа в терминале
   * @param model Модель запроса
   */
  printingOrderTermialResultResponse(model?: TradeCardsModelsOrderTerminalPrintingOrderTerminalResultRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order-terminal/printing-result`,
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
   * Сообщение результата печати заказа в терминале
   * @param model Модель запроса
   */
  printingOrderTermialResult(model?: TradeCardsModelsOrderTerminalPrintingOrderTerminalResultRequest): __Observable<null> {
    return this.printingOrderTermialResultResponse(model).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение списка заказов в терминалах
   * @param model undefined
   * @return Success
   */
  getOrdersResponse(model?: TradeCardsModelsOrderTerminalGetOrderTerminalListRequest): __Observable<__StrictHttpResponse<TradeCardsModelsOrderTerminalGetOrderTerminalListResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order-terminal/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderTerminalGetOrderTerminalListResponse>;
      })
    );
  }
  /**
   * Получение списка заказов в терминалах
   * @param model undefined
   * @return Success
   */
  getOrders(model?: TradeCardsModelsOrderTerminalGetOrderTerminalListRequest): __Observable<TradeCardsModelsOrderTerminalGetOrderTerminalListResponse> {
    return this.getOrdersResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderTerminalGetOrderTerminalListResponse)
    );
  }

  /**
   * Получение детальных сведений о заказе в терминале
   * @param id undefined
   * @return Success
   */
  getOrderDetailsResponse(id: number): __Observable<__StrictHttpResponse<TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order-terminal/${encodeURIComponent(id)}/details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse>;
      })
    );
  }
  /**
   * Получение детальных сведений о заказе в терминале
   * @param id undefined
   * @return Success
   */
  getOrderDetails(id: number): __Observable<TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse> {
    return this.getOrderDetailsResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse)
    );
  }
}

module OrderTerminalService {
}

export { OrderTerminalService }
