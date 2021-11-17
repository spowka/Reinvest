/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsCatalogGetCatalogTreeResponse } from '../models/trade-cards-models-catalog-get-catalog-tree-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsCatalogGetCatalogLevelResponse } from '../models/trade-cards-models-catalog-get-catalog-level-response';
import { TradeCardsModelsCatalogMoveCatalogLevelRequest } from '../models/trade-cards-models-catalog-move-catalog-level-request';
import { TradeCardsModelsCatalogGetCatalogPublishTreeResponse } from '../models/trade-cards-models-catalog-get-catalog-publish-tree-response';
@Injectable({
  providedIn: 'root',
})
class CatalogService extends __BaseService {
  static readonly getCatalogTreePath = '/api/catalog';
  static readonly addCatalogLevelPath = '/api/catalog';
  static readonly getCatalogLevelPath = '/api/catalog/{id}';
  static readonly updateCatalogLevelPath = '/api/catalog/{id}';
  static readonly deleteCatalogLevelPath = '/api/catalog/{id}';
  static readonly moveCatalogLevelPath = '/api/catalog/{id}/move';
  static readonly getCatalogPublishTreePath = '/api/catalog/publish';
  static readonly publishCatalogLevelPath = '/api/catalog/{id}/publish';
  static readonly unpublishCatalogLevelPath = '/api/catalog/{id}/unpublish';
  static readonly publishInCatalogTopPath = '/api/catalog/{id}/publish/top';
  static readonly unpublishInCatalogTopPath = '/api/catalog/{id}/unpublish/top';
  static readonly publishInCatalogLevelTopPath = '/api/catalog/{id}/publish/top/{topLevel}';
  static readonly unpublishInCatalogLevelTopPath = '/api/catalog/{id}/unpublish/top/{topLevel}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение структуры каталога (полное дерево уровней)
   * @return Success
   */
  getCatalogTreeResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsCatalogGetCatalogTreeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/catalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCatalogGetCatalogTreeResponse>;
      })
    );
  }
  /**
   * Получение структуры каталога (полное дерево уровней)
   * @return Success
   */
  getCatalogTree(): __Observable<TradeCardsModelsCatalogGetCatalogTreeResponse> {
    return this.getCatalogTreeResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsCatalogGetCatalogTreeResponse)
    );
  }

  /**
   * Добавление уровня каталога
   * @param params The `CatalogService.AddCatalogLevelParams` containing the following parameters:
   *
   * - `TerminalThemeListImage`: Терминал. Изображение для списка тематик
   *
   * - `TerminalSeriesListImage`: Терминал. Изображение для списка серий
   *
   * - `TerminalCollectionsListImage`: Терминал. Изображение для списка коллекций
   *
   * - `TerminalCardsListImage`: Терминал. Изображение для списка карточек
   *
   * - `TerminalBackgroundImage`: Терминал. Фон
   *
   * - `ShortDescription`: Краткое описание
   *
   * - `ParentId`: Идентификатор родительского уровня
   *
   * - `Name`: Наименование
   *
   * - `Image`: Изображение
   *
   * - `ExtendedDescription`: Расширенное описание
   *
   * @return Success
   */
  addCatalogLevelResponse(params: CatalogService.AddCatalogLevelParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.TerminalThemeListImage != null) { __formData.append('TerminalThemeListImage', params.TerminalThemeListImage as string | Blob);}
    if (params.TerminalSeriesListImage != null) { __formData.append('TerminalSeriesListImage', params.TerminalSeriesListImage as string | Blob);}
    if (params.TerminalCollectionsListImage != null) { __formData.append('TerminalCollectionsListImage', params.TerminalCollectionsListImage as string | Blob);}
    if (params.TerminalCardsListImage != null) { __formData.append('TerminalCardsListImage', params.TerminalCardsListImage as string | Blob);}
    if (params.TerminalBackgroundImage != null) { __formData.append('TerminalBackgroundImage', params.TerminalBackgroundImage as string | Blob);}
    if (params.ShortDescription != null) { __formData.append('ShortDescription', params.ShortDescription as string | Blob);}
    if (params.ParentId != null) { __formData.append('ParentId', params.ParentId as string | Blob);}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.Image != null) { __formData.append('Image', params.Image as string | Blob);}
    if (params.ExtendedDescription != null) { __formData.append('ExtendedDescription', params.ExtendedDescription as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog`,
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
   * Добавление уровня каталога
   * @param params The `CatalogService.AddCatalogLevelParams` containing the following parameters:
   *
   * - `TerminalThemeListImage`: Терминал. Изображение для списка тематик
   *
   * - `TerminalSeriesListImage`: Терминал. Изображение для списка серий
   *
   * - `TerminalCollectionsListImage`: Терминал. Изображение для списка коллекций
   *
   * - `TerminalCardsListImage`: Терминал. Изображение для списка карточек
   *
   * - `TerminalBackgroundImage`: Терминал. Фон
   *
   * - `ShortDescription`: Краткое описание
   *
   * - `ParentId`: Идентификатор родительского уровня
   *
   * - `Name`: Наименование
   *
   * - `Image`: Изображение
   *
   * - `ExtendedDescription`: Расширенное описание
   *
   * @return Success
   */
  addCatalogLevel(params: CatalogService.AddCatalogLevelParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.addCatalogLevelResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Получение данных уровня каталога (для редактирования)
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  getCatalogLevelResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsCatalogGetCatalogLevelResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/catalog/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCatalogGetCatalogLevelResponse>;
      })
    );
  }
  /**
   * Получение данных уровня каталога (для редактирования)
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  getCatalogLevel(id: string): __Observable<TradeCardsModelsCatalogGetCatalogLevelResponse> {
    return this.getCatalogLevelResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsCatalogGetCatalogLevelResponse)
    );
  }

  /**
   * Обновление уровня каталога
   * @param params The `CatalogService.UpdateCatalogLevelParams` containing the following parameters:
   *
   * - `id`: Идентификатор уровня каталога
   *
   * - `TerminalThemeListImage`: Терминал. Изображение для списка тематик
   *
   * - `TerminalSeriesListImage`: Терминал. Изображение для списка серий
   *
   * - `TerminalCollectionsListImage`: Терминал. Изображение для списка коллекций
   *
   * - `TerminalCardsListImage`: Терминал. Изображение для списка карточек
   *
   * - `TerminalBackgroundImage`: Терминал. Фон
   *
   * - `ShortDescription`: Краткое описание
   *
   * - `ParentId`: Идентификатор родительского уровня
   *
   * - `Name`: Наименование
   *
   * - `Image`: Изображение
   *
   * - `ExtendedDescription`: Расширенное описание
   *
   * @return Success
   */
  updateCatalogLevelResponse(params: CatalogService.UpdateCatalogLevelParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.TerminalThemeListImage != null) { __formData.append('TerminalThemeListImage', params.TerminalThemeListImage as string | Blob);}
    if (params.TerminalSeriesListImage != null) { __formData.append('TerminalSeriesListImage', params.TerminalSeriesListImage as string | Blob);}
    if (params.TerminalCollectionsListImage != null) { __formData.append('TerminalCollectionsListImage', params.TerminalCollectionsListImage as string | Blob);}
    if (params.TerminalCardsListImage != null) { __formData.append('TerminalCardsListImage', params.TerminalCardsListImage as string | Blob);}
    if (params.TerminalBackgroundImage != null) { __formData.append('TerminalBackgroundImage', params.TerminalBackgroundImage as string | Blob);}
    if (params.ShortDescription != null) { __formData.append('ShortDescription', params.ShortDescription as string | Blob);}
    if (params.ParentId != null) { __formData.append('ParentId', params.ParentId as string | Blob);}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.Image != null) { __formData.append('Image', params.Image as string | Blob);}
    if (params.ExtendedDescription != null) { __formData.append('ExtendedDescription', params.ExtendedDescription as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/catalog/${encodeURIComponent(params.id)}`,
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
   * Обновление уровня каталога
   * @param params The `CatalogService.UpdateCatalogLevelParams` containing the following parameters:
   *
   * - `id`: Идентификатор уровня каталога
   *
   * - `TerminalThemeListImage`: Терминал. Изображение для списка тематик
   *
   * - `TerminalSeriesListImage`: Терминал. Изображение для списка серий
   *
   * - `TerminalCollectionsListImage`: Терминал. Изображение для списка коллекций
   *
   * - `TerminalCardsListImage`: Терминал. Изображение для списка карточек
   *
   * - `TerminalBackgroundImage`: Терминал. Фон
   *
   * - `ShortDescription`: Краткое описание
   *
   * - `ParentId`: Идентификатор родительского уровня
   *
   * - `Name`: Наименование
   *
   * - `Image`: Изображение
   *
   * - `ExtendedDescription`: Расширенное описание
   *
   * @return Success
   */
  updateCatalogLevel(params: CatalogService.UpdateCatalogLevelParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateCatalogLevelResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Удаление уровня каталога
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  deleteCatalogLevelResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/catalog/${encodeURIComponent(id)}`,
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
   * Удаление уровня каталога
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  deleteCatalogLevel(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.deleteCatalogLevelResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Перемещение уровня каталога
   * @param params The `CatalogService.MoveCatalogLevelParams` containing the following parameters:
   *
   * - `id`: Идентификатор уровня каталога
   *
   * - `model`: Параметры запроса перемещения уровня каталога
   *
   * @return Success
   */
  moveCatalogLevelResponse(params: CatalogService.MoveCatalogLevelParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(params.id)}/move`,
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
   * Перемещение уровня каталога
   * @param params The `CatalogService.MoveCatalogLevelParams` containing the following parameters:
   *
   * - `id`: Идентификатор уровня каталога
   *
   * - `model`: Параметры запроса перемещения уровня каталога
   *
   * @return Success
   */
  moveCatalogLevel(params: CatalogService.MoveCatalogLevelParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.moveCatalogLevelResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Получение структуры каталога (полное дерево уровней для настройки публикации)
   * @return Success
   */
  getCatalogPublishTreeResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsCatalogGetCatalogPublishTreeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/catalog/publish`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCatalogGetCatalogPublishTreeResponse>;
      })
    );
  }
  /**
   * Получение структуры каталога (полное дерево уровней для настройки публикации)
   * @return Success
   */
  getCatalogPublishTree(): __Observable<TradeCardsModelsCatalogGetCatalogPublishTreeResponse> {
    return this.getCatalogPublishTreeResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsCatalogGetCatalogPublishTreeResponse)
    );
  }

  /**
   * Отметка текущего уровня каталога как публикуемого на сайте
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  publishCatalogLevelResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(id)}/publish`,
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
   * Отметка текущего уровня каталога как публикуемого на сайте
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  publishCatalogLevel(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.publishCatalogLevelResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Снятие отметки текущего уровня каталога как публикуемого на сайте
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  unpublishCatalogLevelResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(id)}/unpublish`,
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
   * Снятие отметки текущего уровня каталога как публикуемого на сайте
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  unpublishCatalogLevel(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.unpublishCatalogLevelResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отметка текущего уровня каталога как публикуемого в топе каталога
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  publishInCatalogTopResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(id)}/publish/top`,
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
   * Отметка текущего уровня каталога как публикуемого в топе каталога
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  publishInCatalogTop(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.publishInCatalogTopResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Снятие отметки текущего уровня каталога как публикуемого в топе каталога
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  unpublishInCatalogTopResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(id)}/unpublish/top`,
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
   * Снятие отметки текущего уровня каталога как публикуемого в топе каталога
   * @param id Идентификатор уровня каталога
   * @return Success
   */
  unpublishInCatalogTop(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.unpublishInCatalogTopResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отметка текущего уровня каталога как публикуемого в топе уровня каталога
   * @param params The `CatalogService.PublishInCatalogLevelTopParams` containing the following parameters:
   *
   * - `topLevel`: Номер уровня топа каталога (1-тема, 2-серия)
   *
   * - `id`: Идентификатор уровня каталога
   *
   * @return Success
   */
  publishInCatalogLevelTopResponse(params: CatalogService.PublishInCatalogLevelTopParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(params.id)}/publish/top/${encodeURIComponent(params.topLevel)}`,
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
   * Отметка текущего уровня каталога как публикуемого в топе уровня каталога
   * @param params The `CatalogService.PublishInCatalogLevelTopParams` containing the following parameters:
   *
   * - `topLevel`: Номер уровня топа каталога (1-тема, 2-серия)
   *
   * - `id`: Идентификатор уровня каталога
   *
   * @return Success
   */
  publishInCatalogLevelTop(params: CatalogService.PublishInCatalogLevelTopParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.publishInCatalogLevelTopResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Снятие отметки текущего уровня каталога как публикуемого в топе уровня каталога
   * @param params The `CatalogService.UnpublishInCatalogLevelTopParams` containing the following parameters:
   *
   * - `topLevel`: Номер уровня топа каталога (1-тема, 2-серия)
   *
   * - `id`: Идентификатор уровня каталога
   *
   * @return Success
   */
  unpublishInCatalogLevelTopResponse(params: CatalogService.UnpublishInCatalogLevelTopParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/catalog/${encodeURIComponent(params.id)}/unpublish/top/${encodeURIComponent(params.topLevel)}`,
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
   * Снятие отметки текущего уровня каталога как публикуемого в топе уровня каталога
   * @param params The `CatalogService.UnpublishInCatalogLevelTopParams` containing the following parameters:
   *
   * - `topLevel`: Номер уровня топа каталога (1-тема, 2-серия)
   *
   * - `id`: Идентификатор уровня каталога
   *
   * @return Success
   */
  unpublishInCatalogLevelTop(params: CatalogService.UnpublishInCatalogLevelTopParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.unpublishInCatalogLevelTopResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }
}

module CatalogService {

  /**
   * Parameters for AddCatalogLevel
   */
  export interface AddCatalogLevelParams {

    /**
     * Терминал. Изображение для списка тематик
     */
    TerminalThemeListImage?: Blob;

    /**
     * Терминал. Изображение для списка серий
     */
    TerminalSeriesListImage?: Blob;

    /**
     * Терминал. Изображение для списка коллекций
     */
    TerminalCollectionsListImage?: Blob;

    /**
     * Терминал. Изображение для списка карточек
     */
    TerminalCardsListImage?: Blob;

    /**
     * Терминал. Фон
     */
    TerminalBackgroundImage?: Blob;

    /**
     * Краткое описание
     */
    ShortDescription?: string;

    /**
     * Идентификатор родительского уровня
     */
    ParentId?: string;

    /**
     * Наименование
     */
    Name?: string;

    /**
     * Изображение
     */
    Image?: Blob;

    /**
     * Расширенное описание
     */
    ExtendedDescription?: string;
  }

  /**
   * Parameters for UpdateCatalogLevel
   */
  export interface UpdateCatalogLevelParams {

    /**
     * Идентификатор уровня каталога
     */
    id: string;

    /**
     * Терминал. Изображение для списка тематик
     */
    TerminalThemeListImage?: Blob;

    /**
     * Терминал. Изображение для списка серий
     */
    TerminalSeriesListImage?: Blob;

    /**
     * Терминал. Изображение для списка коллекций
     */
    TerminalCollectionsListImage?: Blob;

    /**
     * Терминал. Изображение для списка карточек
     */
    TerminalCardsListImage?: Blob;

    /**
     * Терминал. Фон
     */
    TerminalBackgroundImage?: Blob;

    /**
     * Краткое описание
     */
    ShortDescription?: string;

    /**
     * Идентификатор родительского уровня
     */
    ParentId?: string;

    /**
     * Наименование
     */
    Name?: string;

    /**
     * Изображение
     */
    Image?: Blob;

    /**
     * Расширенное описание
     */
    ExtendedDescription?: string;
  }

  /**
   * Parameters for MoveCatalogLevel
   */
  export interface MoveCatalogLevelParams {

    /**
     * Идентификатор уровня каталога
     */
    id: string;

    /**
     * Параметры запроса перемещения уровня каталога
     */
    model?: TradeCardsModelsCatalogMoveCatalogLevelRequest;
  }

  /**
   * Parameters for PublishInCatalogLevelTop
   */
  export interface PublishInCatalogLevelTopParams {

    /**
     * Номер уровня топа каталога (1-тема, 2-серия)
     */
    topLevel: number;

    /**
     * Идентификатор уровня каталога
     */
    id: string;
  }

  /**
   * Parameters for UnpublishInCatalogLevelTop
   */
  export interface UnpublishInCatalogLevelTopParams {

    /**
     * Номер уровня топа каталога (1-тема, 2-серия)
     */
    topLevel: number;

    /**
     * Идентификатор уровня каталога
     */
    id: string;
  }
}

export { CatalogService }
