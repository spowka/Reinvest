import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { TextPageBriefModel, TextPageModel, TextPageViewModel } from './text-pages.model';
import { environment } from 'src/environments/environment';
import { ItemIdResponse } from '../cards/card.model';

@Injectable({
  providedIn: 'root'
})
export class TextPagesService {
  private prefix = '/text-page';

  constructor(
    private backend: BackendService,
    private http: HttpClient,
  ) {
  }

  getAll() {
    return this.http.get<TextPageBriefModel[]>(`${environment.API}${this.prefix}`);
  }

  get(id: string) {
    return this.http.get<TextPageModel>(`${environment.API}${this.prefix}/${id}`);
  }

  save(formData: FormData) {
    return this.http.post(`${this.prefix}`, formData);
  }

  updateIsPublished(id: string, isPublished: boolean) {
    return isPublished ?
      this.http.post(`${environment.API}${this.prefix}/${id}/publish`, {}) :
      this.http.post(`${environment.API}${this.prefix}/${id}/unpublish`, {});
  }

  updateOrder(ids: string[]) {
    return this.http.post(`${environment.API}${this.prefix}/reorder`, ids, {});
  }

  savePage(id: string, data: FormData) {
    var request = id ? this.http.put<ItemIdResponse>(`${environment.API}${this.prefix}/${id}`, data, {}) :
      this.http.post<ItemIdResponse>(`${environment.API}${this.prefix}`, data, {});
    return request;
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}${this.prefix}/${id}`);
  }

  getContent(name: string) {
    return this.http.get<TextPageViewModel>(`${environment.API}${this.prefix}/${name}/content`);
  }
}