/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsCustomerGetCustomersResponse } from '../models/trade-cards-models-customer-get-customers-response';
import { TradeCardsModelsCustomerGetCustomersRequest } from '../models/trade-cards-models-customer-get-customers-request';
import { TradeCardsModelsCustomerGetCustomerResponse } from '../models/trade-cards-models-customer-get-customer-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsAccountLoginResponse } from '../models/trade-cards-models-account-login-response';
import { TradeCardsModelsAccountRegisterCustomerRequest } from '../models/trade-cards-models-account-register-customer-request';
import { TradeCardsModelsCustomerGetCustomerActiveOrdersResponse } from '../models/trade-cards-models-customer-get-customer-active-orders-response';
import { TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse } from '../models/trade-cards-models-customer-get-customer-finished-orders-response';
import { TradeCardsModelsCustomerGetCustomerFinishedOrdersRequest } from '../models/trade-cards-models-customer-get-customer-finished-orders-request';
@Injectable({
  providedIn: 'root',
})
class CustomerService extends __BaseService {
  static readonly getCustomersPath = '/api/customer/query';
  static readonly getCustomerPath = '/api/customer/{id}';
  static readonly updateCustomerPath = '/api/customer/{id}';
  static readonly deleteCustomerPath = '/api/customer/{id}';
  static readonly registerCustomerPath = '/api/customer';
  static readonly archiveCustomerPath = '/api/customer/{id}/archive';
  static readonly restoreCustomerPath = '/api/customer/{id}/restore';
  static readonly sendRegDataPath = '/api/customer/{id}/sendregdata';
  static readonly getActiveOrdersPath = '/api/customer/{id}/active-orders';
  static readonly getFinishedOrdersPath = '/api/customer/{id}/finished-orders';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * ?????????????????? ???????????????? ???????????? ??????????????????????
   * @param model ???????????? ??????????????
   * @return Success
   */
  getCustomersResponse(model?: TradeCardsModelsCustomerGetCustomersRequest): __Observable<__StrictHttpResponse<TradeCardsModelsCustomerGetCustomersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customer/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCustomerGetCustomersResponse>;
      })
    );
  }
  /**
   * ?????????????????? ???????????????? ???????????? ??????????????????????
   * @param model ???????????? ??????????????
   * @return Success
   */
  getCustomers(model?: TradeCardsModelsCustomerGetCustomersRequest): __Observable<TradeCardsModelsCustomerGetCustomersResponse> {
    return this.getCustomersResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsCustomerGetCustomersResponse)
    );
  }

  /**
   * ?????????????????? ???????????? ????????????????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  getCustomerResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsCustomerGetCustomerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/customer/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCustomerGetCustomerResponse>;
      })
    );
  }
  /**
   * ?????????????????? ???????????? ????????????????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  getCustomer(id: string): __Observable<TradeCardsModelsCustomerGetCustomerResponse> {
    return this.getCustomerResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsCustomerGetCustomerResponse)
    );
  }

  /**
   * ???????????????????? ???????????? ????????????????????
   * @param params The `CustomerService.UpdateCustomerParams` containing the following parameters:
   *
   * - `id`: ?????????????????????????? ????????????????????
   *
   * - `FirstName`:
   *
   * - `PhoneNumber`:
   *
   * - `Password`:
   *
   * - `LastName`:
   *
   * - `Email`:
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
  updateCustomerResponse(params: CustomerService.UpdateCustomerParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.FirstName != null) { __formData.append('FirstName', params.FirstName as string | Blob);}
    if (params.PhoneNumber != null) { __formData.append('PhoneNumber', params.PhoneNumber as string | Blob);}
    if (params.Password != null) { __formData.append('Password', params.Password as string | Blob);}
    if (params.LastName != null) { __formData.append('LastName', params.LastName as string | Blob);}
    if (params.Email != null) { __formData.append('Email', params.Email as string | Blob);}
    if (params.DeliveryStreet != null) { __formData.append('DeliveryStreet', params.DeliveryStreet as string | Blob);}
    if (params.DeliveryRegion != null) { __formData.append('DeliveryRegion', params.DeliveryRegion as string | Blob);}
    if (params.DeliveryPostIndex != null) { __formData.append('DeliveryPostIndex', params.DeliveryPostIndex as string | Blob);}
    if (params.DeliveryHouse != null) { __formData.append('DeliveryHouse', params.DeliveryHouse as string | Blob);}
    if (params.DeliveryCity != null) { __formData.append('DeliveryCity', params.DeliveryCity as string | Blob);}
    if (params.DeliveryBuilding != null) { __formData.append('DeliveryBuilding', params.DeliveryBuilding as string | Blob);}
    if (params.DeliveryApartment != null) { __formData.append('DeliveryApartment', params.DeliveryApartment as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/customer/${encodeURIComponent(params.id)}`,
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
   * ???????????????????? ???????????? ????????????????????
   * @param params The `CustomerService.UpdateCustomerParams` containing the following parameters:
   *
   * - `id`: ?????????????????????????? ????????????????????
   *
   * - `FirstName`:
   *
   * - `PhoneNumber`:
   *
   * - `Password`:
   *
   * - `LastName`:
   *
   * - `Email`:
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
  updateCustomer(params: CustomerService.UpdateCustomerParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateCustomerResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * ???????????????? ???????????? ????????????????????
   * @param id ?????????????????????????? ????????????????????????
   * @return Success
   */
  deleteCustomerResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/customer/${encodeURIComponent(id)}`,
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
   * ???????????????? ???????????? ????????????????????
   * @param id ?????????????????????????? ????????????????????????
   * @return Success
   */
  deleteCustomer(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.deleteCustomerResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * ?????????????????????? ????????????????????
   * @param model ???????????? ?????? ??????????????????????
   * @return Success
   */
  registerCustomerResponse(model?: TradeCardsModelsAccountRegisterCustomerRequest): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ?????????????????????? ????????????????????
   * @param model ???????????? ?????? ??????????????????????
   * @return Success
   */
  registerCustomer(model?: TradeCardsModelsAccountRegisterCustomerRequest): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.registerCustomerResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }

  /**
   * ???????????????? ???????????? ???????????????????? ?? ??????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  archiveCustomerResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customer/${encodeURIComponent(id)}/archive`,
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
   * ???????????????? ???????????? ???????????????????? ?? ??????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  archiveCustomer(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.archiveCustomerResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * ???????????????????????????? ???????????? ???????????????????? ???? ????????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  restoreCustomerResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customer/${encodeURIComponent(id)}/restore`,
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
   * ???????????????????????????? ???????????? ???????????????????? ???? ????????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  restoreCustomer(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.restoreCustomerResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * ?????????????????? ??????. ???????????? ????????????????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  sendRegDataResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customer/${encodeURIComponent(id)}/sendregdata`,
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
   * ?????????????????? ??????. ???????????? ????????????????????
   * @param id ?????????????????????????? ????????????????????
   * @return Success
   */
  sendRegData(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.sendRegDataResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * ?????????????????? ?????????????? "?? ????????????" ????????????????????
   * @param id undefined
   * @return Success
   */
  getActiveOrdersResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsCustomerGetCustomerActiveOrdersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/customer/${encodeURIComponent(id)}/active-orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCustomerGetCustomerActiveOrdersResponse>;
      })
    );
  }
  /**
   * ?????????????????? ?????????????? "?? ????????????" ????????????????????
   * @param id undefined
   * @return Success
   */
  getActiveOrders(id: string): __Observable<TradeCardsModelsCustomerGetCustomerActiveOrdersResponse> {
    return this.getActiveOrdersResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsCustomerGetCustomerActiveOrdersResponse)
    );
  }

  /**
   * ?????????????????? ?????????????????????? ?????????????? ????????????????????
   * @param params The `CustomerService.GetFinishedOrdersParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `request`:
   *
   * @return Success
   */
  getFinishedOrdersResponse(params: CustomerService.GetFinishedOrdersParams): __Observable<__StrictHttpResponse<TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customer/${encodeURIComponent(params.id)}/finished-orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse>;
      })
    );
  }
  /**
   * ?????????????????? ?????????????????????? ?????????????? ????????????????????
   * @param params The `CustomerService.GetFinishedOrdersParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `request`:
   *
   * @return Success
   */
  getFinishedOrders(params: CustomerService.GetFinishedOrdersParams): __Observable<TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse> {
    return this.getFinishedOrdersResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse)
    );
  }
}

module CustomerService {

  /**
   * Parameters for UpdateCustomer
   */
  export interface UpdateCustomerParams {

    /**
     * ?????????????????????????? ????????????????????
     */
    id: string;
    FirstName: string;
    PhoneNumber?: string;
    Password?: string;
    LastName?: string;
    Email?: string;
    DeliveryStreet?: string;
    DeliveryRegion?: string;
    DeliveryPostIndex?: string;
    DeliveryHouse?: string;
    DeliveryCity?: string;
    DeliveryBuilding?: string;
    DeliveryApartment?: string;
  }

  /**
   * Parameters for GetFinishedOrders
   */
  export interface GetFinishedOrdersParams {
    id: string;
    request?: TradeCardsModelsCustomerGetCustomerFinishedOrdersRequest;
  }
}

export { CustomerService }
