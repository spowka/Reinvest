import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { HttpClient } from '@angular/common/http';
import { BlogPostBriefModel, BlogPostModel, BlogPostViewModel, BlogPostSiteBriefModel, BlogPostFeedChunk } from './blog-posts.model';
import { environment } from 'src/environments/environment';
import { ItemIdResponse } from '../cards/card.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private prefix = '/blog-post';

  constructor(
    private backend: BackendService,
    private http: HttpClient,
  ) {
  }

  getAll(filters?: any, sort?: any) {
    return this.http.post<BlogPostBriefModel[]>(`${environment.API}${this.prefix}/query`, {
      'pageSize': 50,
      'pageIndex': 0,
      'filter': filters ? filters : '',
      'sortOrder': sort ? sort : ''
    });
  }

  get(id: string) {
    return this.http.get<BlogPostModel>(`${environment.API}${this.prefix}/${id}`);
  }

  save(formData: FormData) {
    return this.http.post(`${this.prefix}`, formData);
  }

  updateIsPublished(id: string, isPublished: boolean) {
    return isPublished ?
      this.http.post(`${environment.API}${this.prefix}/${id}/publish`, {}) :
      this.http.post(`${environment.API}${this.prefix}/${id}/unpublish`, {});
  }

  saveBlogPost(id: string, data: FormData) {
    var request = id ? this.http.put<ItemIdResponse>(`${environment.API}${this.prefix}/${id}`, data, {}) :
      this.http.post<ItemIdResponse>(`${environment.API}${this.prefix}`, data, {});
    return request;
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}${this.prefix}/${id}`);
  }

  getFeed(year: number, skip: number | undefined = undefined) {
    return this.http.post<BlogPostFeedChunk>(`${environment.API}${this.prefix}/blog-feed`,
      { year, skip });
  }

  getContent(name: string) {
    return this.http.get<BlogPostViewModel>(`${environment.API}${this.prefix}/${name}/content`);
  }
}