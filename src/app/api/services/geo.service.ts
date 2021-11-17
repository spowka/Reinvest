/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsGeoSearchResponse } from '../models/trade-cards-models-geo-search-response';
@Injectable({
  providedIn: 'root',
})
class GeoService extends __BaseService {
  static readonly getYandexApiKeyPath = '/api/geo/yandex-api-key';
  static readonly searchPath = '/api/geo/search/{address}';
  static readonly getOfficeAddressPath = '/api/geo/office-address';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param address undefined
   */
  getYandexApiKeyResponse(address?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (address != null) __params = __params.set('address', address.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/geo/yandex-api-key`,
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
   * @param address undefined
   */
  getYandexApiKey(address?: string): __Observable<null> {
    return this.getYandexApiKeyResponse(address).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param address undefined
   * @return Success
   */
  searchResponse(address: string): __Observable<__StrictHttpResponse<TradeCardsModelsGeoSearchResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/geo/search/${encodeURIComponent(address)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsGeoSearchResponse>;
      })
    );
  }
  /**
   * @param address undefined
   * @return Success
   */
  search(address: string): __Observable<TradeCardsModelsGeoSearchResponse> {
    return this.searchResponse(address).pipe(
      __map(_r => _r.body as TradeCardsModelsGeoSearchResponse)
    );
  }

  /**
   * @return Success
   */
  getOfficeAddressResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsGeoSearchResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/geo/office-address`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsGeoSearchResponse>;
      })
    );
  }
  /**
   * @return Success
   */
  getOfficeAddress(): __Observable<TradeCardsModelsGeoSearchResponse> {
    return this.getOfficeAddressResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsGeoSearchResponse)
    );
  }
}

module GeoService {
}

export { GeoService }
