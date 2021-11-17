import { Injectable } from '@angular/core';
import { CardFullModel, GetCardsResponse, ItemIdResponse } from './card.model';
import { HttpClient } from '@angular/common/http';
import { AdminAuthService } from '../auth/auth.service';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/internal/operators';
import { BackendService } from 'src/app/shared/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private prefix = '/cards';
  constructor(
    private http: HttpClient,
    private auth: AdminAuthService,
    private backend: BackendService
  ) {
  }

  public create(card: FormData) {
    return this.http.post(environment.API + this.prefix, card, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getList(type: string, filters?: any) {
    return this.http.post(environment.API + this.prefix + '/query', {
      isActive: type === 'active',
      pageSize: 50,
      pageIndex: 0,
      filter: filters ? filters : ''
    }, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        }),
        map((data: GetCardsResponse) => data)
      );
  }

  public get(id: string) {
    return this.http.get(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        }),
        map((data: CardFullModel) => data)
      );
  }

  public archive(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public set_level(id: string, catalogLevelId: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/set_level/${catalogLevelId}`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public reorder(id: string, id2: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/move_after/${id2}`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public restore(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public delete(id: string) {
    return this.http.delete(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public update(id: string, info: FormData) {
    return this.http.put<ItemIdResponse>(environment.API + this.prefix + `/${id}`, info, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getCardDetails(id: string) {
    return this.backend.get(`/home/card/${id}`);
  }

  public getCardDetailsPreview(id: string) {
    return this.backend.get(`/cards/preview/${id}`);
  }

  public setIsPublished(id: string, value: boolean) {
    var method = value ? 'publish' : 'unpublish';
    return this.http.post(`${environment.API}${this.prefix}/${id}/${method}`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public getStatusHistory(id: string) {
    return this.http.get(`${environment.API}${this.prefix}/${id}/status-history`);
  }
}
