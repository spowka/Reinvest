/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsSiteSearchSearchResult } from '../models/trade-cards-models-site-search-search-result';
import { TradeCardsModelsSiteSearchSearchRequest } from '../models/trade-cards-models-site-search-search-request';
import { TradeCardsModelsSiteSearchSuggestsResult } from '../models/trade-cards-models-site-search-suggests-result';
@Injectable({
  providedIn: 'root',
})
class SiteSearchService extends __BaseService {
  static readonly searchPath = '/api/site-search/search';
  static readonly getSuggestPath = '/api/site-search/suggests/{searchString}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Поиск по сайту
   * @param request undefined
   * @return Success
   */
  searchResponse(request?: TradeCardsModelsSiteSearchSearchRequest): __Observable<__StrictHttpResponse<TradeCardsModelsSiteSearchSearchResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/site-search/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSiteSearchSearchResult>;
      })
    );
  }
  /**
   * Поиск по сайту
   * @param request undefined
   * @return Success
   */
  search(request?: TradeCardsModelsSiteSearchSearchRequest): __Observable<TradeCardsModelsSiteSearchSearchResult> {
    return this.searchResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsSiteSearchSearchResult)
    );
  }

  /**
   * Поиск по сайту
   * @param searchString undefined
   * @return Success
   */
  getSuggestResponse(searchString: string): __Observable<__StrictHttpResponse<TradeCardsModelsSiteSearchSuggestsResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/site-search/suggests/${encodeURIComponent(searchString)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSiteSearchSuggestsResult>;
      })
    );
  }
  /**
   * Поиск по сайту
   * @param searchString undefined
   * @return Success
   */
  getSuggest(searchString: string): __Observable<TradeCardsModelsSiteSearchSuggestsResult> {
    return this.getSuggestResponse(searchString).pipe(
      __map(_r => _r.body as TradeCardsModelsSiteSearchSuggestsResult)
    );
  }
}

module SiteSearchService {
}

export { SiteSearchService }
