import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LegalEntitiesService {
  private prefix = '/legal-entities';

  constructor(private http: HttpClient) { }

  public getAll(type: string, filters?: any, sort?: any) {
    
    return this.http.post(environment.API + this.prefix + '/query', {
      'isActive': type === 'active',
      'pageSize': 50,
      'pageIndex': 0,
      'filter': filters ? filters : '',
      'sortOrder': sort ? sort : ''
    }, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public delete(id: string) {
    return this.http.delete(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public archive(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public restore(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
