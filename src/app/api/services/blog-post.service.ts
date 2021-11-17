/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsBlogPostBlogPostBriefModel } from '../models/trade-cards-models-blog-post-blog-post-brief-model';
import { TradeCardsModelsEmployeeGetBlogPostsRequest } from '../models/trade-cards-models-employee-get-blog-posts-request';
import { TradeCardsModelsBlogPostBlogPostModel } from '../models/trade-cards-models-blog-post-blog-post-model';
import { TradeCardsModelsHomeBlogPostFeedChunk } from '../models/trade-cards-models-home-blog-post-feed-chunk';
import { TradeCardsModelsHomeGetBlogFeedRequest } from '../models/trade-cards-models-home-get-blog-feed-request';
import { TradeCardsModelsBlogPostBlogPostSiteViewModel } from '../models/trade-cards-models-blog-post-blog-post-site-view-model';
@Injectable({
  providedIn: 'root',
})
class BlogPostService extends __BaseService {
  static readonly getBlogPostsPath = '/api/blog-post/query';
  static readonly getBlogPostPath = '/api/blog-post/{id}';
  static readonly updateBlogPostPath = '/api/blog-post/{id}';
  static readonly deleteBlogPostPath = '/api/blog-post/{id}';
  static readonly publishBlogPostPath = '/api/blog-post/{id}/publish';
  static readonly unpublishBlogPostPath = '/api/blog-post/{id}/unpublish';
  static readonly createBlogPostPath = '/api/blog-post';
  static readonly getBlogFeedPath = '/api/blog-post/blog-feed';
  static readonly getBlogPostContentPath = '/api/blog-post/{name}/content';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка записей блога для админки
   * @param request undefined
   * @return Success
   */
  getBlogPostsResponse(request?: TradeCardsModelsEmployeeGetBlogPostsRequest): __Observable<__StrictHttpResponse<Array<TradeCardsModelsBlogPostBlogPostBriefModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/blog-post/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsBlogPostBlogPostBriefModel>>;
      })
    );
  }
  /**
   * Получение списка записей блога для админки
   * @param request undefined
   * @return Success
   */
  getBlogPosts(request?: TradeCardsModelsEmployeeGetBlogPostsRequest): __Observable<Array<TradeCardsModelsBlogPostBlogPostBriefModel>> {
    return this.getBlogPostsResponse(request).pipe(
      __map(_r => _r.body as Array<TradeCardsModelsBlogPostBlogPostBriefModel>)
    );
  }

  /**
   * Получение данных записи блога для админки
   * @param id undefined
   * @return Success
   */
  getBlogPostResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsBlogPostBlogPostModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/blog-post/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsBlogPostBlogPostModel>;
      })
    );
  }
  /**
   * Получение данных записи блога для админки
   * @param id undefined
   * @return Success
   */
  getBlogPost(id: string): __Observable<TradeCardsModelsBlogPostBlogPostModel> {
    return this.getBlogPostResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsBlogPostBlogPostModel)
    );
  }

  /**
   * Обновление данных записи блога
   * @param params The `BlogPostService.UpdateBlogPostParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `Tags`:
   *
   * - `ShortContent`:
   *
   * - `PostImage`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `CreateDate`:
   *
   * - `Content`:
   */
  updateBlogPostResponse(params: BlogPostService.UpdateBlogPostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.TitleTag != null) { __formData.append('TitleTag', params.TitleTag as string | Blob);}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.Tags != null) { __formData.append('Tags', params.Tags as string | Blob);}
    if (params.ShortContent != null) { __formData.append('ShortContent', params.ShortContent as string | Blob);}
    if (params.PostImage != null) { __formData.append('PostImage', params.PostImage as string | Blob);}
    if (params.LogicalName != null) { __formData.append('LogicalName', params.LogicalName as string | Blob);}
    if (params.KeywordsTag != null) { __formData.append('KeywordsTag', params.KeywordsTag as string | Blob);}
    if (params.IsPublished != null) { __formData.append('IsPublished', JSON.stringify(params.IsPublished));}
    if (params.DescriptionTag != null) { __formData.append('DescriptionTag', params.DescriptionTag as string | Blob);}
    if (params.CreateDate != null) { __formData.append('CreateDate', params.CreateDate as string | Blob);}
    if (params.Content != null) { __formData.append('Content', params.Content as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/blog-post/${encodeURIComponent(params.id)}`,
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
   * Обновление данных записи блога
   * @param params The `BlogPostService.UpdateBlogPostParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `Tags`:
   *
   * - `ShortContent`:
   *
   * - `PostImage`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `CreateDate`:
   *
   * - `Content`:
   */
  updateBlogPost(params: BlogPostService.UpdateBlogPostParams): __Observable<null> {
    return this.updateBlogPostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Удаление записи блога
   * @param id undefined
   */
  deleteBlogPostResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/blog-post/${encodeURIComponent(id)}`,
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
   * Удаление записи блога
   * @param id undefined
   */
  deleteBlogPost(id: string): __Observable<null> {
    return this.deleteBlogPostResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Отметка записи блога как публикуемой на сайте
   * @param id undefined
   */
  publishBlogPostResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/blog-post/${encodeURIComponent(id)}/publish`,
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
   * Отметка записи блога как публикуемой на сайте
   * @param id undefined
   */
  publishBlogPost(id: string): __Observable<null> {
    return this.publishBlogPostResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Снятие отметки записи блога как публикуемой на сайте
   * @param id undefined
   */
  unpublishBlogPostResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/blog-post/${encodeURIComponent(id)}/unpublish`,
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
   * Снятие отметки записи блога как публикуемой на сайте
   * @param id undefined
   */
  unpublishBlogPost(id: string): __Observable<null> {
    return this.unpublishBlogPostResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Создание записи блога
   * @param params The `BlogPostService.CreateBlogPostParams` containing the following parameters:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `Tags`:
   *
   * - `ShortContent`:
   *
   * - `PostImage`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `CreateDate`:
   *
   * - `Content`:
   */
  createBlogPostResponse(params: BlogPostService.CreateBlogPostParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.TitleTag != null) { __formData.append('TitleTag', params.TitleTag as string | Blob);}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.Tags != null) { __formData.append('Tags', params.Tags as string | Blob);}
    if (params.ShortContent != null) { __formData.append('ShortContent', params.ShortContent as string | Blob);}
    if (params.PostImage != null) { __formData.append('PostImage', params.PostImage as string | Blob);}
    if (params.LogicalName != null) { __formData.append('LogicalName', params.LogicalName as string | Blob);}
    if (params.KeywordsTag != null) { __formData.append('KeywordsTag', params.KeywordsTag as string | Blob);}
    if (params.IsPublished != null) { __formData.append('IsPublished', JSON.stringify(params.IsPublished));}
    if (params.DescriptionTag != null) { __formData.append('DescriptionTag', params.DescriptionTag as string | Blob);}
    if (params.CreateDate != null) { __formData.append('CreateDate', params.CreateDate as string | Blob);}
    if (params.Content != null) { __formData.append('Content', params.Content as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/blog-post`,
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
   * Создание записи блога
   * @param params The `BlogPostService.CreateBlogPostParams` containing the following parameters:
   *
   * - `TitleTag`:
   *
   * - `Title`:
   *
   * - `Tags`:
   *
   * - `ShortContent`:
   *
   * - `PostImage`:
   *
   * - `LogicalName`:
   *
   * - `KeywordsTag`:
   *
   * - `IsPublished`:
   *
   * - `DescriptionTag`:
   *
   * - `CreateDate`:
   *
   * - `Content`:
   */
  createBlogPost(params: BlogPostService.CreateBlogPostParams): __Observable<null> {
    return this.createBlogPostResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение ленты блога (для сайта)
   * @param request undefined
   * @return Success
   */
  getBlogFeedResponse(request?: TradeCardsModelsHomeGetBlogFeedRequest): __Observable<__StrictHttpResponse<TradeCardsModelsHomeBlogPostFeedChunk>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/blog-post/blog-feed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeBlogPostFeedChunk>;
      })
    );
  }
  /**
   * Получение ленты блога (для сайта)
   * @param request undefined
   * @return Success
   */
  getBlogFeed(request?: TradeCardsModelsHomeGetBlogFeedRequest): __Observable<TradeCardsModelsHomeBlogPostFeedChunk> {
    return this.getBlogFeedResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsHomeBlogPostFeedChunk)
    );
  }

  /**
   * Получение записи блога (для сайта)
   * @param name undefined
   * @return Success
   */
  getBlogPostContentResponse(name: string): __Observable<__StrictHttpResponse<TradeCardsModelsBlogPostBlogPostSiteViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/blog-post/${encodeURIComponent(name)}/content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsBlogPostBlogPostSiteViewModel>;
      })
    );
  }
  /**
   * Получение записи блога (для сайта)
   * @param name undefined
   * @return Success
   */
  getBlogPostContent(name: string): __Observable<TradeCardsModelsBlogPostBlogPostSiteViewModel> {
    return this.getBlogPostContentResponse(name).pipe(
      __map(_r => _r.body as TradeCardsModelsBlogPostBlogPostSiteViewModel)
    );
  }
}

module BlogPostService {

  /**
   * Parameters for UpdateBlogPost
   */
  export interface UpdateBlogPostParams {
    id: string;
    TitleTag?: string;
    Title?: string;
    Tags?: string;
    ShortContent?: string;
    PostImage?: Blob;
    LogicalName?: string;
    KeywordsTag?: string;
    IsPublished?: boolean;
    DescriptionTag?: string;
    CreateDate?: string;
    Content?: string;
  }

  /**
   * Parameters for CreateBlogPost
   */
  export interface CreateBlogPostParams {
    TitleTag?: string;
    Title?: string;
    Tags?: string;
    ShortContent?: string;
    PostImage?: Blob;
    LogicalName?: string;
    KeywordsTag?: string;
    IsPublished?: boolean;
    DescriptionTag?: string;
    CreateDate?: string;
    Content?: string;
  }
}

export { BlogPostService }
