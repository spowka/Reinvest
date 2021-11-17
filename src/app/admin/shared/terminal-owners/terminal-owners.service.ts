import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { TerminalOwnerEditModel } from './terminal-owners.model';

@Injectable({
  providedIn: 'root'
})
export class TerminalOwnersService {
  private prefix = '/terminal-owner';

  constructor(
    private http: HttpClient,
    private auth: AdminAuthService
  ) {
  }

  public getTerminalOwners(type: string, filters?: any, sort?: any) {
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

  public getTerminalOwner(id: string) {
    return this.http.get(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public deleteTerminalOwner(id: string) {
    return this.http.delete(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public archiveTerminalOwner(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public restoreTerminalOwner(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public sendTerminalOwnerRegData(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/sendregdata`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public registerTerminalOwner(model: TerminalOwnerEditModel) {
    return this.http.post(environment.API + this.prefix, model, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        map((data: any) => data.id)
      );
  }

  public updateTerminalOwner(id: string, model: TerminalOwnerEditModel) {
    return this.http.put(environment.API + this.prefix + `/${id}`, model, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
