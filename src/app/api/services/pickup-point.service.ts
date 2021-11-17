/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPickupPointPickupPointBriefModel } from '../models/trade-cards-models-pickup-point-pickup-point-brief-model';
import { TradeCardsModelsPickupPointGetPickupPointsRequest } from '../models/trade-cards-models-pickup-point-get-pickup-points-request';
import { TradeCardsModelsPickupPointPickupPointModel } from '../models/trade-cards-models-pickup-point-pickup-point-model';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
@Injectable({
  providedIn: 'root',
})
class PickupPointService extends __BaseService {
  static readonly getPickupPointsPath = '/api/pickup-point/query';
  static readonly getPickupPointPath = '/api/pickup-point/{id}';
  static readonly updatePickupPointPath = '/api/pickup-point/{id}';
  static readonly createPickupPointPath = '/api/pickup-point';
  static readonly archivePickupPointPath = '/api/pickup-point/{id}/archive';
  static readonly restorePickupPointPath = '/api/pickup-point/{id}/restore';
  static readonly sendRegDataPath = '/api/pickup-point/{id}/sendregdata';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка ПС
   * @param model Данные
   * @return Success
   */
  getPickupPointsResponse(model?: TradeCardsModelsPickupPointGetPickupPointsRequest): __Observable<__StrictHttpResponse<Array<TradeCardsModelsPickupPointPickupPointBriefModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/pickup-point/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsPickupPointPickupPointBriefModel>>;
      })
    );
  }
  /**
   * Получение списка ПС
   * @param model Данные
   * @return Success
   */
  getPickupPoints(model?: TradeCardsModelsPickupPointGetPickupPointsRequest): __Observable<Array<TradeCardsModelsPickupPointPickupPointBriefModel>> {
    return this.getPickupPointsResponse(model).pipe(
      __map(_r => _r.body as Array<TradeCardsModelsPickupPointPickupPointBriefModel>)
    );
  }

  /**
   * Получение данных ПС
   * @param id Идентификатор ПС
   * @return Success
   */
  getPickupPointResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsPickupPointPickupPointModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/pickup-point/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPickupPointPickupPointModel>;
      })
    );
  }
  /**
   * Получение данных ПС
   * @param id Идентификатор ПС
   * @return Success
   */
  getPickupPoint(id: string): __Observable<TradeCardsModelsPickupPointPickupPointModel> {
    return this.getPickupPointResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsPickupPointPickupPointModel)
    );
  }

  /**
   * Обновление данных собственника ПС
   * @param params The `PickupPointService.UpdatePickupPointParams` containing the following parameters:
   *
   * - `id`: Идентификатор сотрудника
   *
   * - `Schedule`: Время работы
   *
   * - `Phones`: Телефоны
   *
   * - `OwnerId`: Идентификатор собственника ПС
   *
   * - `Name`: Наименование
   *
   * - `ManualCoordinates`: Если true, то координаты установлены вручную (не по адресу)
   *
   * - `Longitude`: Долгота
   *
   * - `Latitude`: Широта
   *
   * - `IsOffice`: Является офисом
   *
   * - `IsAvailable`: Доступность для заказа
   *
   * - `EmployeePassword`: Привязанный сотрудник. Пароль
   *
   * - `EmployeeEmail`: Привязанный сотрудник. Email
   *
   * - `Comment`: Дополнительно
   *
   * - `Address`: Адрес
   *
   * @return Success
   */
  updatePickupPointResponse(params: PickupPointService.UpdatePickupPointParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.Schedule != null) { __formData.append('Schedule', params.Schedule as string | Blob);}
    if (params.Phones != null) { __formData.append('Phones', params.Phones as string | Blob);}
    if (params.OwnerId != null) { __formData.append('OwnerId', params.OwnerId as string | Blob);}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.ManualCoordinates != null) { __formData.append('ManualCoordinates', JSON.stringify(params.ManualCoordinates));}
    if (params.Longitude != null) __params = __params.set('Longitude', params.Longitude.toString());
    if (params.Latitude != null) __params = __params.set('Latitude', params.Latitude.toString());
    if (params.IsOffice != null) { __formData.append('IsOffice', JSON.stringify(params.IsOffice));}
    if (params.IsAvailable != null) { __formData.append('IsAvailable', JSON.stringify(params.IsAvailable));}
    if (params.EmployeePassword != null) { __formData.append('EmployeePassword', params.EmployeePassword as string | Blob);}
    if (params.EmployeeEmail != null) { __formData.append('EmployeeEmail', params.EmployeeEmail as string | Blob);}
    if (params.Comment != null) { __formData.append('Comment', params.Comment as string | Blob);}
    if (params.Address != null) { __formData.append('Address', params.Address as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/pickup-point/${encodeURIComponent(params.id)}`,
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
   * Обновление данных собственника ПС
   * @param params The `PickupPointService.UpdatePickupPointParams` containing the following parameters:
   *
   * - `id`: Идентификатор сотрудника
   *
   * - `Schedule`: Время работы
   *
   * - `Phones`: Телефоны
   *
   * - `OwnerId`: Идентификатор собственника ПС
   *
   * - `Name`: Наименование
   *
   * - `ManualCoordinates`: Если true, то координаты установлены вручную (не по адресу)
   *
   * - `Longitude`: Долгота
   *
   * - `Latitude`: Широта
   *
   * - `IsOffice`: Является офисом
   *
   * - `IsAvailable`: Доступность для заказа
   *
   * - `EmployeePassword`: Привязанный сотрудник. Пароль
   *
   * - `EmployeeEmail`: Привязанный сотрудник. Email
   *
   * - `Comment`: Дополнительно
   *
   * - `Address`: Адрес
   *
   * @return Success
   */
  updatePickupPoint(params: PickupPointService.UpdatePickupPointParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updatePickupPointResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Создание ПС
   * @param params The `PickupPointService.CreatePickupPointParams` containing the following parameters:
   *
   * - `Schedule`: Время работы
   *
   * - `Phones`: Телефоны
   *
   * - `OwnerId`: Идентификатор собственника ПС
   *
   * - `Name`: Наименование
   *
   * - `ManualCoordinates`: Если true, то координаты установлены вручную (не по адресу)
   *
   * - `Longitude`: Долгота
   *
   * - `Latitude`: Широта
   *
   * - `IsOffice`: Является офисом
   *
   * - `IsAvailable`: Доступность для заказа
   *
   * - `EmployeePassword`: Привязанный сотрудник. Пароль
   *
   * - `EmployeeEmail`: Привязанный сотрудник. Email
   *
   * - `Comment`: Дополнительно
   *
   * - `Address`: Адрес
   *
   * @return Success
   */
  createPickupPointResponse(params: PickupPointService.CreatePickupPointParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Schedule != null) { __formData.append('Schedule', params.Schedule as string | Blob);}
    if (params.Phones != null) { __formData.append('Phones', params.Phones as string | Blob);}
    if (params.OwnerId != null) { __formData.append('OwnerId', params.OwnerId as string | Blob);}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.ManualCoordinates != null) { __formData.append('ManualCoordinates', JSON.stringify(params.ManualCoordinates));}
    if (params.Longitude != null) __params = __params.set('Longitude', params.Longitude.toString());
    if (params.Latitude != null) __params = __params.set('Latitude', params.Latitude.toString());
    if (params.IsOffice != null) { __formData.append('IsOffice', JSON.stringify(params.IsOffice));}
    if (params.IsAvailable != null) { __formData.append('IsAvailable', JSON.stringify(params.IsAvailable));}
    if (params.EmployeePassword != null) { __formData.append('EmployeePassword', params.EmployeePassword as string | Blob);}
    if (params.EmployeeEmail != null) { __formData.append('EmployeeEmail', params.EmployeeEmail as string | Blob);}
    if (params.Comment != null) { __formData.append('Comment', params.Comment as string | Blob);}
    if (params.Address != null) { __formData.append('Address', params.Address as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/pickup-point`,
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
   * Создание ПС
   * @param params The `PickupPointService.CreatePickupPointParams` containing the following parameters:
   *
   * - `Schedule`: Время работы
   *
   * - `Phones`: Телефоны
   *
   * - `OwnerId`: Идентификатор собственника ПС
   *
   * - `Name`: Наименование
   *
   * - `ManualCoordinates`: Если true, то координаты установлены вручную (не по адресу)
   *
   * - `Longitude`: Долгота
   *
   * - `Latitude`: Широта
   *
   * - `IsOffice`: Является офисом
   *
   * - `IsAvailable`: Доступность для заказа
   *
   * - `EmployeePassword`: Привязанный сотрудник. Пароль
   *
   * - `EmployeeEmail`: Привязанный сотрудник. Email
   *
   * - `Comment`: Дополнительно
   *
   * - `Address`: Адрес
   *
   * @return Success
   */
  createPickupPoint(params: PickupPointService.CreatePickupPointParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.createPickupPointResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправка ПС в архив
   * @param id Идентификатор ПС
   * @return Success
   */
  archivePickupPointResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/pickup-point/${encodeURIComponent(id)}/archive`,
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
   * Отправка ПС в архив
   * @param id Идентификатор ПС
   * @return Success
   */
  archivePickupPoint(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.archivePickupPointResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Восстановление ПС из архива
   * @param id Идентификатор ПС
   * @return Success
   */
  restorePickupPointResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/pickup-point/${encodeURIComponent(id)}/restore`,
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
   * Восстановление ПС из архива
   * @param id Идентификатор ПС
   * @return Success
   */
  restorePickupPoint(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.restorePickupPointResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправить рег. данные ПС
   * @param id Идентификатор ПС
   * @return Success
   */
  sendRegDataResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/pickup-point/${encodeURIComponent(id)}/sendregdata`,
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
   * Отправить рег. данные ПС
   * @param id Идентификатор ПС
   * @return Success
   */
  sendRegData(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.sendRegDataResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }
}

module PickupPointService {

  /**
   * Parameters for UpdatePickupPoint
   */
  export interface UpdatePickupPointParams {

    /**
     * Идентификатор сотрудника
     */
    id: string;

    /**
     * Время работы
     */
    Schedule?: string;

    /**
     * Телефоны
     */
    Phones?: string;

    /**
     * Идентификатор собственника ПС
     */
    OwnerId?: string;

    /**
     * Наименование
     */
    Name?: string;

    /**
     * Если true, то координаты установлены вручную (не по адресу)
     */
    ManualCoordinates?: boolean;

    /**
     * Долгота
     */
    Longitude?: number;

    /**
     * Широта
     */
    Latitude?: number;

    /**
     * Является офисом
     */
    IsOffice?: boolean;

    /**
     * Доступность для заказа
     */
    IsAvailable?: boolean;

    /**
     * Привязанный сотрудник. Пароль
     */
    EmployeePassword?: string;

    /**
     * Привязанный сотрудник. Email
     */
    EmployeeEmail?: string;

    /**
     * Дополнительно
     */
    Comment?: string;

    /**
     * Адрес
     */
    Address?: string;
  }

  /**
   * Parameters for CreatePickupPoint
   */
  export interface CreatePickupPointParams {

    /**
     * Время работы
     */
    Schedule?: string;

    /**
     * Телефоны
     */
    Phones?: string;

    /**
     * Идентификатор собственника ПС
     */
    OwnerId?: string;

    /**
     * Наименование
     */
    Name?: string;

    /**
     * Если true, то координаты установлены вручную (не по адресу)
     */
    ManualCoordinates?: boolean;

    /**
     * Долгота
     */
    Longitude?: number;

    /**
     * Широта
     */
    Latitude?: number;

    /**
     * Является офисом
     */
    IsOffice?: boolean;

    /**
     * Доступность для заказа
     */
    IsAvailable?: boolean;

    /**
     * Привязанный сотрудник. Пароль
     */
    EmployeePassword?: string;

    /**
     * Привязанный сотрудник. Email
     */
    EmployeeEmail?: string;

    /**
     * Дополнительно
     */
    Comment?: string;

    /**
     * Адрес
     */
    Address?: string;
  }
}

export { PickupPointService }
