/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse } from '../models/trade-cards-models-legal-entities-get-legal-entities-response';
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest } from '../models/trade-cards-models-legal-entities-get-legal-entities-request';
import { TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse } from '../models/trade-cards-models-legal-entities-tabs-response-legal-entity-basic-info-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsLegalEntitiesTabsRequestCreateLegalEntityRequest } from '../models/trade-cards-models-legal-entities-tabs-request-create-legal-entity-request';
import { TradeCardsModelsLegalEntitiesTabsRequestUpdateLegalEntityBasicInfoRequest } from '../models/trade-cards-models-legal-entities-tabs-request-update-legal-entity-basic-info-request';
import { TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel } from '../models/trade-cards-models-legal-entities-get-legal-entity-map-view-model';
@Injectable({
  providedIn: 'root',
})
class LegalEntitiesService extends __BaseService {
  static readonly getLegalEntitiesPath = '/api/legal-entities/query';
  static readonly getLegalEntityBasicInfoPath = '/api/legal-entities/{id}/basic-info';
  static readonly createLegalEntityPath = '/api/legal-entities';
  static readonly updateLegalEntityBasicInfoPath = '/api/legal-entities/{id}';
  static readonly archiveLegalEntityPath = '/api/legal-entities/{id}/archive';
  static readonly restoreLegalEntityPath = '/api/legal-entities/{id}/restore';
  static readonly sendRegDataPath = '/api/legal-entities/{id}/sendregdata';
  static readonly updateMapViewPath = '/api/legal-entities/{id}/update-map-view';
  static readonly getMapViewPath = '/api/legal-entities/{id}/get-map-view';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение страницы списка юридических лиц
   * @param model Данные
   * @return Success
   */
  getLegalEntitiesResponse(model?: TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest): __Observable<__StrictHttpResponse<TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse>;
      })
    );
  }
  /**
   * Получение страницы списка юридических лиц
   * @param model Данные
   * @return Success
   */
  getLegalEntities(model?: TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest): __Observable<TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse> {
    return this.getLegalEntitiesResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse)
    );
  }

  /**
   * Получение базового описания юр. лица
   * @param id Идентификатор юр.лица
   * @return Success
   */
  getLegalEntityBasicInfoResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(id)}/basic-info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse>;
      })
    );
  }
  /**
   * Получение базового описания юр. лица
   * @param id Идентификатор юр.лица
   * @return Success
   */
  getLegalEntityBasicInfo(id: string): __Observable<TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse> {
    return this.getLegalEntityBasicInfoResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse)
    );
  }

  /**
   * Создание юр. лица
   * @param model Данные
   * @return Success
   */
  createLegalEntityResponse(model?: TradeCardsModelsLegalEntitiesTabsRequestCreateLegalEntityRequest): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities`,
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
   * Создание юр. лица
   * @param model Данные
   * @return Success
   */
  createLegalEntity(model?: TradeCardsModelsLegalEntitiesTabsRequestCreateLegalEntityRequest): __Observable<TradeCardsModelsItemIdResponse> {
    return this.createLegalEntityResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Обновление данных юр. лица
   * @param params The `LegalEntitiesService.UpdateLegalEntityBasicInfoParams` containing the following parameters:
   *
   * - `id`: Идентификатор юр. лица
   *
   * - `model`: Данные
   *
   * @return Success
   */
  updateLegalEntityBasicInfoResponse(params: LegalEntitiesService.UpdateLegalEntityBasicInfoParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(params.id)}`,
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
   * Обновление данных юр. лица
   * @param params The `LegalEntitiesService.UpdateLegalEntityBasicInfoParams` containing the following parameters:
   *
   * - `id`: Идентификатор юр. лица
   *
   * - `model`: Данные
   *
   * @return Success
   */
  updateLegalEntityBasicInfo(params: LegalEntitiesService.UpdateLegalEntityBasicInfoParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateLegalEntityBasicInfoResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправка юр. лица в архив
   * @param id Идентификатор юр. лица
   */
  archiveLegalEntityResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(id)}/archive`,
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
   * Отправка юр. лица в архив
   * @param id Идентификатор юр. лица
   */
  archiveLegalEntity(id: string): __Observable<null> {
    return this.archiveLegalEntityResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Восстановление юр. лица
   * @param id Идентификатор юр. лица
   */
  restoreLegalEntityResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(id)}/restore`,
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
   * Восстановление юр. лица
   * @param id Идентификатор юр. лица
   */
  restoreLegalEntity(id: string): __Observable<null> {
    return this.restoreLegalEntityResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Отправить рег. данные юр лица
   * @param id Идентификатор юр. лица
   */
  sendRegDataResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(id)}/sendregdata`,
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
   * Отправить рег. данные юр лица
   * @param id Идентификатор юр. лица
   */
  sendRegData(id: string): __Observable<null> {
    return this.sendRegDataResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Обновить настройки отображения на карте пунктов самовывоза юр. лица
   * @param params The `LegalEntitiesService.UpdateMapViewParams` containing the following parameters:
   *
   * - `id`: Идентификатор юр. лица
   *
   * - `InactiveMapIcon`: Иконка для карты неактивная
   *
   * - `ActiveMapIcon`: Иконка для карты активная
   */
  updateMapViewResponse(params: LegalEntitiesService.UpdateMapViewParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.InactiveMapIcon != null) { __formData.append('InactiveMapIcon', params.InactiveMapIcon as string | Blob);}
    if (params.ActiveMapIcon != null) { __formData.append('ActiveMapIcon', params.ActiveMapIcon as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(params.id)}/update-map-view`,
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
   * Обновить настройки отображения на карте пунктов самовывоза юр. лица
   * @param params The `LegalEntitiesService.UpdateMapViewParams` containing the following parameters:
   *
   * - `id`: Идентификатор юр. лица
   *
   * - `InactiveMapIcon`: Иконка для карты неактивная
   *
   * - `ActiveMapIcon`: Иконка для карты активная
   */
  updateMapView(params: LegalEntitiesService.UpdateMapViewParams): __Observable<null> {
    return this.updateMapViewResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получить настройки отображения на карте пунктов самовывоза юр. лица
   * @param id Идентификатор юр. лица
   * @return Success
   */
  getMapViewResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/legal-entities/${encodeURIComponent(id)}/get-map-view`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel>;
      })
    );
  }
  /**
   * Получить настройки отображения на карте пунктов самовывоза юр. лица
   * @param id Идентификатор юр. лица
   * @return Success
   */
  getMapView(id: string): __Observable<TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel> {
    return this.getMapViewResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel)
    );
  }
}

module LegalEntitiesService {

  /**
   * Parameters for UpdateLegalEntityBasicInfo
   */
  export interface UpdateLegalEntityBasicInfoParams {

    /**
     * Идентификатор юр. лица
     */
    id: string;

    /**
     * Данные
     */
    model?: TradeCardsModelsLegalEntitiesTabsRequestUpdateLegalEntityBasicInfoRequest;
  }

  /**
   * Parameters for UpdateMapView
   */
  export interface UpdateMapViewParams {

    /**
     * Идентификатор юр. лица
     */
    id: string;

    /**
     * Иконка для карты неактивная
     */
    InactiveMapIcon?: Blob;

    /**
     * Иконка для карты активная
     */
    ActiveMapIcon?: Blob;
  }
}

export { LegalEntitiesService }
