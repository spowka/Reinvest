/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsHomeGetMenuResponse } from '../models/trade-cards-models-home-get-menu-response';
import { TradeCardsModelsHomeGetCatalogTopLevelsResponse } from '../models/trade-cards-models-home-get-catalog-top-levels-response';
import { TradeCardsModelsHomeGetCatalogLevelDetailResponse } from '../models/trade-cards-models-home-get-catalog-level-detail-response';
import { TradeCardsModelsHomeGetCatalogChildrenResponse } from '../models/trade-cards-models-home-get-catalog-children-response';
import { TradeCardsModelsHomeGetCardDetailResponse } from '../models/trade-cards-models-home-get-card-detail-response';
import { TradeCardsModelsHomeGetHomeCardsResponse } from '../models/trade-cards-models-home-get-home-cards-response';
import { TradeCardsModelsHomeGetHomeCardsRequest } from '../models/trade-cards-models-home-get-home-cards-request';
@Injectable({
  providedIn: 'root',
})
class HomeService extends __BaseService {
  static readonly getMenuPath = '/api/home/menu';
  static readonly getCatalogTopLevelsPath = '/api/home/top';
  static readonly getCatalogLevelDetailPath = '/api/home/{id}';
  static readonly getCatalogChildrenPath = '/api/home/{id}/children/{level}';
  static readonly getCardDetailPath = '/api/home/card/{id}';
  static readonly getCardsPath = '/api/home/{id}/cards';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение структуры каталога (полное дерево уровней для меню)
   * @return Success
   */
  getMenuResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetMenuResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/home/menu`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetMenuResponse>;
      })
    );
  }
  /**
   * Получение структуры каталога (полное дерево уровней для меню)
   * @return Success
   */
  getMenu(): __Observable<TradeCardsModelsHomeGetMenuResponse> {
    return this.getMenuResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetMenuResponse)
    );
  }

  /**
   * Получение топовых уровней каталога
   * @return Success
   */
  getCatalogTopLevelsResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetCatalogTopLevelsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/home/top`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetCatalogTopLevelsResponse>;
      })
    );
  }
  /**
   * Получение топовых уровней каталога
   * @return Success
   */
  getCatalogTopLevels(): __Observable<TradeCardsModelsHomeGetCatalogTopLevelsResponse> {
    return this.getCatalogTopLevelsResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetCatalogTopLevelsResponse)
    );
  }

  /**
   * Получение подробных данных уровня каталога
   * @param id undefined
   * @return Success
   */
  getCatalogLevelDetailResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetCatalogLevelDetailResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/home/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetCatalogLevelDetailResponse>;
      })
    );
  }
  /**
   * Получение подробных данных уровня каталога
   * @param id undefined
   * @return Success
   */
  getCatalogLevelDetail(id: string): __Observable<TradeCardsModelsHomeGetCatalogLevelDetailResponse> {
    return this.getCatalogLevelDetailResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetCatalogLevelDetailResponse)
    );
  }

  /**
   * Получение дочерних уровней для уровня каталога
   * @param params The `HomeService.GetCatalogChildrenParams` containing the following parameters:
   *
   * - `level`:
   *
   * - `id`:
   *
   * @return Success
   */
  getCatalogChildrenResponse(params: HomeService.GetCatalogChildrenParams): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetCatalogChildrenResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/home/${encodeURIComponent(params.id)}/children/${encodeURIComponent(params.level)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetCatalogChildrenResponse>;
      })
    );
  }
  /**
   * Получение дочерних уровней для уровня каталога
   * @param params The `HomeService.GetCatalogChildrenParams` containing the following parameters:
   *
   * - `level`:
   *
   * - `id`:
   *
   * @return Success
   */
  getCatalogChildren(params: HomeService.GetCatalogChildrenParams): __Observable<TradeCardsModelsHomeGetCatalogChildrenResponse> {
    return this.getCatalogChildrenResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetCatalogChildrenResponse)
    );
  }

  /**
   * Получение детальных данных карточки (для сайта)
   * @param id undefined
   * @return Success
   */
  getCardDetailResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetCardDetailResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/home/card/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetCardDetailResponse>;
      })
    );
  }
  /**
   * Получение детальных данных карточки (для сайта)
   * @param id undefined
   * @return Success
   */
  getCardDetail(id: string): __Observable<TradeCardsModelsHomeGetCardDetailResponse> {
    return this.getCardDetailResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetCardDetailResponse)
    );
  }

  /**
   * Получение списка карточек для тематики (для сайта)
   * @param params The `HomeService.GetCardsParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `model`:
   *
   * @return Success
   */
  getCardsResponse(params: HomeService.GetCardsParams): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetHomeCardsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/home/${encodeURIComponent(params.id)}/cards`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetHomeCardsResponse>;
      })
    );
  }
  /**
   * Получение списка карточек для тематики (для сайта)
   * @param params The `HomeService.GetCardsParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `model`:
   *
   * @return Success
   */
  getCards(params: HomeService.GetCardsParams): __Observable<TradeCardsModelsHomeGetHomeCardsResponse> {
    return this.getCardsResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetHomeCardsResponse)
    );
  }
}

module HomeService {

  /**
   * Parameters for GetCatalogChildren
   */
  export interface GetCatalogChildrenParams {
    level: number;
    id: string;
  }

  /**
   * Parameters for GetCards
   */
  export interface GetCardsParams {
    id: string;
    model?: TradeCardsModelsHomeGetHomeCardsRequest;
  }
}

export { HomeService }
