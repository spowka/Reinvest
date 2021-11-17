/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPromoBannerPromoBannerSiteModel } from '../models/trade-cards-models-promo-banner-promo-banner-site-model';
@Injectable({
  providedIn: 'root',
})
class ContentService extends __BaseService {
  static readonly getPromoBannersPath = '/api/content/promo-banners';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка промо баннеров для сайта
   * @return Success
   */
  getPromoBannersResponse(): __Observable<__StrictHttpResponse<Array<TradeCardsModelsPromoBannerPromoBannerSiteModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/content/promo-banners`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsPromoBannerPromoBannerSiteModel>>;
      })
    );
  }
  /**
   * Получение списка промо баннеров для сайта
   * @return Success
   */
  getPromoBanners(): __Observable<Array<TradeCardsModelsPromoBannerPromoBannerSiteModel>> {
    return this.getPromoBannersResponse().pipe(
      __map(_r => _r.body as Array<TradeCardsModelsPromoBannerPromoBannerSiteModel>)
    );
  }
}

module ContentService {
}

export { ContentService }
