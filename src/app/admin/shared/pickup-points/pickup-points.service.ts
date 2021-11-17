import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PickupPointsService {
  private prefixOwner = '/pickup-point-owner';
  private prefixPoint = '/pickup-point';

  constructor(private http: HttpClient, private auth: AdminAuthService) { }

  public getOwners(type: string) {
    return this.http.post(environment.API + this.prefixOwner + '/query', {
      'isActive': type === 'active'
    }, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getPoints(type: string, ownerId: string) {
    return this.http.post(environment.API + this.prefixPoint + '/query', {
      'isActive': type === 'active', ownerId
    }, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getOwner(id: string) {
    return this.http.get(environment.API + this.prefixOwner + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getPoint(id: string) {
    return this.http.get(environment.API + this.prefixPoint + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public save(id: string, data: FormData) {
    var request = id ? this.http.put(environment.API + this.prefixOwner + `/${id}`, data, {}) :
      this.http.post(environment.API + this.prefixOwner, data, {});
    return request.pipe(
      catchError(err => {
        console.log(err)
        return throwError(err);
      })
    );
  }

  public savePoint(id: string, data: FormData) {
    var request = id ? this.http.put(environment.API + this.prefixPoint + `/${id}`, data, {}) :
      this.http.post(environment.API + this.prefixPoint, data, {});
    return request.pipe(
      catchError(err => {
        console.log(err)
        return throwError(err);
      })
    );
  }

  public archive(id: string) {
    return this.http.post(environment.API + this.prefixOwner + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public archivePoint(id: string) {
    return this.http.post(environment.API + this.prefixPoint + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public delete(id: string) {
    return this.http.delete(environment.API + this.prefixOwner + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public restore(id: string) {
    return this.http.post(environment.API + this.prefixOwner + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public restorePoint(id: string) {
    return this.http.post(environment.API + this.prefixPoint + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public reorder(ids: string[]) {
    return this.http.post(environment.API + this.prefixOwner + `/reorder`, ids, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public sendRegData(id: string) {
    return this.http.post(environment.API + this.prefixPoint + `/${id}/sendregdata`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
