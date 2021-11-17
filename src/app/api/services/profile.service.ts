/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsProfileGetProfileDataResponse } from '../models/trade-cards-models-profile-get-profile-data-response';
import { TradeCardsModelsProfileGetActiveOrdersResponse } from '../models/trade-cards-models-profile-get-active-orders-response';
import { TradeCardsModelsProfileGetOrderDetailsResponse } from '../models/trade-cards-models-profile-get-order-details-response';
import { TradeCardsModelsProfileGetFinishedOrdersResponse } from '../models/trade-cards-models-profile-get-finished-orders-response';
import { TradeCardsModelsProfileGetProfileFinishedOrdersRequest } from '../models/trade-cards-models-profile-get-profile-finished-orders-request';
@Injectable({
  providedIn: 'root',
})
class ProfileService extends __BaseService {
  static readonly getCurrentProfilePath = '/api/profile/info';
  static readonly updateCurrentProfilePath = '/api/profile/info';
  static readonly getActiveOrdersPath = '/api/profile/active-orders';
  static readonly getOrderDetailsPath = '/api/profile/order/{id}';
  static readonly getFinishedOrdersPath = '/api/profile/finished-orders';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение профиля авторизованного покупателя
   * @return Success
   */
  getCurrentProfileResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsProfileGetProfileDataResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profile/info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsProfileGetProfileDataResponse>;
      })
    );
  }
  /**
   * Получение профиля авторизованного покупателя
   * @return Success
   */
  getCurrentProfile(): __Observable<TradeCardsModelsProfileGetProfileDataResponse> {
    return this.getCurrentProfileResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsProfileGetProfileDataResponse)
    );
  }

  /**
   * Обновление профиля авторизованного покупателя
   * @param params The `ProfileService.UpdateCurrentProfileParams` containing the following parameters:
   *
   * - `PhoneNumber`:
   *
   * - `LastName`:
   *
   * - `FirstName`:
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
   * @return Success
   */
  updateCurrentProfileResponse(params: ProfileService.UpdateCurrentProfileParams): __Observable<__StrictHttpResponse<TradeCardsModelsProfileGetProfileDataResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.PhoneNumber != null) { __formData.append('PhoneNumber', params.PhoneNumber as string | Blob);}
    if (params.LastName != null) { __formData.append('LastName', params.LastName as string | Blob);}
    if (params.FirstName != null) { __formData.append('FirstName', params.FirstName as string | Blob);}
    if (params.DeliveryStreet != null) { __formData.append('DeliveryStreet', params.DeliveryStreet as string | Blob);}
    if (params.DeliveryRegion != null) { __formData.append('DeliveryRegion', params.DeliveryRegion as string | Blob);}
    if (params.DeliveryPostIndex != null) { __formData.append('DeliveryPostIndex', params.DeliveryPostIndex as string | Blob);}
    if (params.DeliveryHouse != null) { __formData.append('DeliveryHouse', params.DeliveryHouse as string | Blob);}
    if (params.DeliveryCity != null) { __formData.append('DeliveryCity', params.DeliveryCity as string | Blob);}
    if (params.DeliveryBuilding != null) { __formData.append('DeliveryBuilding', params.DeliveryBuilding as string | Blob);}
    if (params.DeliveryApartment != null) { __formData.append('DeliveryApartment', params.DeliveryApartment as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/profile/info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsProfileGetProfileDataResponse>;
      })
    );
  }
  /**
   * Обновление профиля авторизованного покупателя
   * @param params The `ProfileService.UpdateCurrentProfileParams` containing the following parameters:
   *
   * - `PhoneNumber`:
   *
   * - `LastName`:
   *
   * - `FirstName`:
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
   * @return Success
   */
  updateCurrentProfile(params: ProfileService.UpdateCurrentProfileParams): __Observable<TradeCardsModelsProfileGetProfileDataResponse> {
    return this.updateCurrentProfileResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsProfileGetProfileDataResponse)
    );
  }

  /**
   * Получение заказов "в работе" авторизованного покупателя
   * @return Success
   */
  getActiveOrdersResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsProfileGetActiveOrdersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profile/active-orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsProfileGetActiveOrdersResponse>;
      })
    );
  }
  /**
   * Получение заказов "в работе" авторизованного покупателя
   * @return Success
   */
  getActiveOrders(): __Observable<TradeCardsModelsProfileGetActiveOrdersResponse> {
    return this.getActiveOrdersResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsProfileGetActiveOrdersResponse)
    );
  }

  /**
   * Получение детальных сведений о заказе
   * @param id undefined
   * @return Success
   */
  getOrderDetailsResponse(id: number): __Observable<__StrictHttpResponse<TradeCardsModelsProfileGetOrderDetailsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profile/order/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsProfileGetOrderDetailsResponse>;
      })
    );
  }
  /**
   * Получение детальных сведений о заказе
   * @param id undefined
   * @return Success
   */
  getOrderDetails(id: number): __Observable<TradeCardsModelsProfileGetOrderDetailsResponse> {
    return this.getOrderDetailsResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsProfileGetOrderDetailsResponse)
    );
  }

  /**
   * Получение завершенных заказов авторизованного покупателя
   * @param request undefined
   * @return Success
   */
  getFinishedOrdersResponse(request?: TradeCardsModelsProfileGetProfileFinishedOrdersRequest): __Observable<__StrictHttpResponse<TradeCardsModelsProfileGetFinishedOrdersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/profile/finished-orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsProfileGetFinishedOrdersResponse>;
      })
    );
  }
  /**
   * Получение завершенных заказов авторизованного покупателя
   * @param request undefined
   * @return Success
   */
  getFinishedOrders(request?: TradeCardsModelsProfileGetProfileFinishedOrdersRequest): __Observable<TradeCardsModelsProfileGetFinishedOrdersResponse> {
    return this.getFinishedOrdersResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsProfileGetFinishedOrdersResponse)
    );
  }
}

module ProfileService {

  /**
   * Parameters for UpdateCurrentProfile
   */
  export interface UpdateCurrentProfileParams {
    PhoneNumber?: string;
    LastName?: string;
    FirstName?: string;
    DeliveryStreet?: string;
    DeliveryRegion?: string;
    DeliveryPostIndex?: string;
    DeliveryHouse?: string;
    DeliveryCity?: string;
    DeliveryBuilding?: string;
    DeliveryApartment?: string;
  }
}

export { ProfileService }
