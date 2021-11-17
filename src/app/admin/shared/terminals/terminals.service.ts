import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { TerminalEditModel } from './terminals.model';

@Injectable({
  providedIn: 'root'
})
export class TerminalsService {
  private prefix = '/terminal';

  constructor(
    private http: HttpClient,
    private auth: AdminAuthService
  ) {
  }

  public getTerminals(type: string, filters?: any, sort?: any) {
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

  public getTerminalsForAttach(ownerId: string, connectId: string) {
    return this.http.post(environment.API + this.prefix + `/forAttach/${ownerId}`, {connectId})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getTerminal(id: string) {
    return this.http.get(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public deleteTerminal(id: string) {
    return this.http.delete(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public archiveTerminal(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public restoreTerminal(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public registerTerminal(model: FormData) {
    return this.http.post(environment.API + this.prefix, model, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        map((data: any) => data.id)
      );
  }

  public updateTerminal(id: string, model: FormData) {
    return this.http.put(environment.API + this.prefix + `/${id}`, model, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
