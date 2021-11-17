import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { CatalogCardsSortColumn, GetMenuResponse } from './catalog.model';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private prefix = '/catalog';

  constructor(
    private backend: BackendService,
    protected http: HttpClient,
    private auth: SiteAuthService
  ) {
  }

  public get(id) {
    return this.backend.get(`/catalog/${id}`);
  }

  public getTree() {
    return this.backend.get(`/catalog`);
  }

  public getPublishTree() {
    return this.backend.get(`/catalog/publish`);
  }

  public getMenuTree() {
    return this.http.get<GetMenuResponse>(`${environment.API}/home/menu`);
  }

  public getTop() {
    return this.backend.get(`/home/top`);
  }

  public getCatalog(id: string) {
    return this.backend.get(`/catalog/${id}`);
  }

  public move(id, index, parentId = null) {
    return this.backend.post(`/catalog/${id}/move`, { parentId, index });
  }

  public delete(id) {
    return this.backend.delete(`/catalog/${id}`);
  }

  public add(subject: FormData) {
    return this.backend.post(`/catalog`, subject);
  }

  public update(id: string, subject: FormData) {
    return this.backend.put(`/catalog/${id}`, subject);
  }

  public publish(id, value: boolean) {
    var action = value ? 'publish' : 'unpublish';
    return this.backend.post(`/catalog/${id}/${action}`, {});
  }

  public publishInCatalogTop(id, value: boolean) {
    var action = value ? 'publish' : 'unpublish';
    return this.backend.post(`/catalog/${id}/${action}/top`, {});
  }

  public publishInSeriesTop(id, value: boolean) {
    var action = value ? 'publish' : 'unpublish';
    return this.backend.post(`/catalog/${id}/${action}/top/1`, {});
  }

  public publishInSetTop(id, value: boolean) {
    var action = value ? 'publish' : 'unpublish';
    return this.backend.post(`/catalog/${id}/${action}/top/2`, {});
  }

  public getCatalogDetails(id: string) {
    return this.backend.get(`/home/${id}`);
  }

  public getCatalogChildren(id: string, level: number) {
    return this.backend.get(`/home/${id}/children/${level}`);
  }

  public getCatalogCards(id: string, showSoldOut: boolean, orderColumn: CatalogCardsSortColumn) {
    return this.http.post<any>(`${environment.API}/home/${id}/cards`, {
      pageSize: 500,
      pageIndex: 0,
      filter: { showSoldOut },
      sortOrder: { column: orderColumn }
    }, {});
  }
}
