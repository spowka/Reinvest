/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPromoBannerPromoBannerModel } from '../models/trade-cards-models-promo-banner-promo-banner-model';
@Injectable({
  providedIn: 'root',
})
class PromoBannerService extends __BaseService {
  static readonly getPromoBannersPath = '/api/promo-banner';
  static readonly updateBannersPath = '/api/promo-banner';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка промо баннеров для админки
   * @return Success
   */
  getPromoBannersResponse(): __Observable<__StrictHttpResponse<Array<TradeCardsModelsPromoBannerPromoBannerModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/promo-banner`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsPromoBannerPromoBannerModel>>;
      })
    );
  }
  /**
   * Получение списка промо баннеров для админки
   * @return Success
   */
  getPromoBanners(): __Observable<Array<TradeCardsModelsPromoBannerPromoBannerModel>> {
    return this.getPromoBannersResponse().pipe(
      __map(_r => _r.body as Array<TradeCardsModelsPromoBannerPromoBannerModel>)
    );
  }

  /**
   * Обновление баннеров
   * @param items undefined
   */
  updateBannersResponse(items?: Array<any>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    (items || []).forEach(val => {if (val != null) __formData.append('items', JSON.stringify(val))});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/promo-banner`,
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
   * Обновление баннеров
   * @param items undefined
   */
  updateBanners(items?: Array<any>): __Observable<null> {
    return this.updateBannersResponse(items).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PromoBannerService {
}

export { PromoBannerService }
