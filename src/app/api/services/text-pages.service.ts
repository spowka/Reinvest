/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsTextPageTextPageBriefModel } from '../models/trade-cards-models-text-page-text-page-brief-model';
import { TradeCardsModelsTextPageTextPageModel } from '../models/trade-cards-models-text-page-text-page-model';
import { TradeCardsModelsTextPageTextPageViewModel } from '../models/trade-cards-models-text-page-text-page-view-model';
@Injectable({
  providedIn: 'root',
})
class TextPagesService extends __BaseService {
  static readonly getTextPagesPath = '/api/text-page';
  static readonly createPagePath = '/api/text-page';
  static readonly getTextPagePath = '/api/text-page/{id}';
  static readonly updatePagePath = '/api/text-page/{id}';
  static readonly deletePagePath = '/api/text-page/{id}';
  static readonly publishTextPagePath = '/api/text-page/{id}/publish';
  static readonly unpublishTextPagePath = '/api/text-page/{id}/unpublish';
  static readonly reorderTextPagesPath = '/api/text-page/reorder';
  static readonly getTextPageContentPath = '/api/text-page/{name}/content';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка текстовых страниц для админки
   * @return Success
   */
  getTextPagesResponse(): __Observable<__StrictHttpResponse<Array<TradeCardsModelsTextPageTextPageBriefModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/text-page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsTextPageTextPageBriefModel>>;
      })
    );
  }
  /**
   * Получение списка текстовых страниц для админки
   * @return Success
   */
  getTextPages(): __Observable<Array<TradeCardsModelsTextPageTextPageBriefModel>> {
    return this.getTextPagesResponse().pipe(
      __map(_r => _r.body as Array<TradeCardsModelsTextPageTextPageBriefModel>)
    );
  }

  /**
   * Создание текстовой страницы
   * @param params The `TextPagesService.CreatePageParams` containing the following parameters:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `Content`:
   */
  createPageResponse(params: TextPagesService.CreatePageParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.TitleTag != null) { __formData.append('TitleTag', params.TitleTag as string | Blob);}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.LogicalName != null) { __formData.append('LogicalName', params.LogicalName as string | Blob);}
    if (params.KeywordsTag != null) { __formData.append('KeywordsTag', params.KeywordsTag as string | Blob);}
    if (params.IsPublished != null) { __formData.append('IsPublished', JSON.stringify(params.IsPublished));}
    if (params.DescriptionTag != null) { __formData.append('DescriptionTag', params.DescriptionTag as string | Blob);}
    if (params.Content != null) { __formData.append('Content', params.Content as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/text-page`,
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
   * Создание текстовой страницы
   * @param params The `TextPagesService.CreatePageParams` containing the following parameters:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `Content`:
   */
  createPage(params: TextPagesService.CreatePageParams): __Observable<null> {
    return this.createPageResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение данных текстовой страницы для админки
   * @param id undefined
   * @return Success
   */
  getTextPageResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsTextPageTextPageModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/text-page/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTextPageTextPageModel>;
      })
    );
  }
  /**
   * Получение данных текстовой страницы для админки
   * @param id undefined
   * @return Success
   */
  getTextPage(id: string): __Observable<TradeCardsModelsTextPageTextPageModel> {
    return this.getTextPageResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsTextPageTextPageModel)
    );
  }

  /**
   * Обновление данных текстовой страницы
   * @param params The `TextPagesService.UpdatePageParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `Content`:
   */
  updatePageResponse(params: TextPagesService.UpdatePageParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.TitleTag != null) { __formData.append('TitleTag', params.TitleTag as string | Blob);}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.LogicalName != null) { __formData.append('LogicalName', params.LogicalName as string | Blob);}
    if (params.KeywordsTag != null) { __formData.append('KeywordsTag', params.KeywordsTag as string | Blob);}
    if (params.IsPublished != null) { __formData.append('IsPublished', JSON.stringify(params.IsPublished));}
    if (params.DescriptionTag != null) { __formData.append('DescriptionTag', params.DescriptionTag as string | Blob);}
    if (params.Content != null) { __formData.append('Content', params.Content as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/text-page/${encodeURIComponent(params.id)}`,
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
   * Обновление данных текстовой страницы
   * @param params The `TextPagesService.UpdatePageParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `Content`:
   */
  updatePage(params: TextPagesService.UpdatePageParams): __Observable<null> {
    return this.updatePageResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Удаление текстовой страницы
   * @param id undefined
   */
  deletePageResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/text-page/${encodeURIComponent(id)}`,
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
   * Удаление текстовой страницы
   * @param id undefined
   */
  deletePage(id: string): __Observable<null> {
    return this.deletePageResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Отметка текстовой страницы как публикуемой на сайте
   * @param id undefined
   */
  publishTextPageResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/text-page/${encodeURIComponent(id)}/publish`,
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
   * Отметка текстовой страницы как публикуемой на сайте
   * @param id undefined
   */
  publishTextPage(id: string): __Observable<null> {
    return this.publishTextPageResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Снятие отметки текстовой страницы как публикуемой на сайте
   * @param id undefined
   */
  unpublishTextPageResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/text-page/${encodeURIComponent(id)}/unpublish`,
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
   * Снятие отметки текстовой страницы как публикуемой на сайте
   * @param id undefined
   */
  unpublishTextPage(id: string): __Observable<null> {
    return this.unpublishTextPageResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Изменение порядка вывода текстовых страниц
   * @param ids Идентификаторы записей в необходимом порядке
   */
  reorderTextPagesResponse(ids?: Array<string>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ids;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/text-page/reorder`,
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
   * Изменение порядка вывода текстовых страниц
   * @param ids Идентификаторы записей в необходимом порядке
   */
  reorderTextPages(ids?: Array<string>): __Observable<null> {
    return this.reorderTextPagesResponse(ids).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение текстовой страницы (для сайта)
   * @param name undefined
   * @return Success
   */
  getTextPageContentResponse(name: string): __Observable<__StrictHttpResponse<TradeCardsModelsTextPageTextPageViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/text-page/${encodeURIComponent(name)}/content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTextPageTextPageViewModel>;
      })
    );
  }
  /**
   * Получение текстовой страницы (для сайта)
   * @param name undefined
   * @return Success
   */
  getTextPageContent(name: string): __Observable<TradeCardsModelsTextPageTextPageViewModel> {
    return this.getTextPageContentResponse(name).pipe(
      __map(_r => _r.body as TradeCardsModelsTextPageTextPageViewModel)
    );
  }
}

module TextPagesService {

  /**
   * Parameters for CreatePage
   */
  export interface CreatePageParams {
    TitleTag?: string;
    Title?: string;
    LogicalName?: string;
    KeywordsTag?: string;
    IsPublished?: boolean;
    DescriptionTag?: string;
    Content?: string;
  }

  /**
   * Parameters for UpdatePage
   */
  export interface UpdatePageParams {
    id: string;
    TitleTag?: string;
    Title?: string;
    LogicalName?: string;
    KeywordsTag?: string;
    IsPublished?: boolean;
    DescriptionTag?: string;
    Content?: string;
  }
}

export { TextPagesService }
