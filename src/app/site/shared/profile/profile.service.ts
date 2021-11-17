import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { environment } from '../../../../environments/environment';
import { ProfileDataResponse, GetActiveOrdersResponse, GetOrderDetailsResponse, GetFinishedOrdersResponse } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getProfile() {
    return this.http.get<ProfileDataResponse>(environment.API + '/profile/info', {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public updateProfile(data: any) {
    return this.http.post(environment.API + '/profile/info', data, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getActiveOrders() {
    return this.http.get<GetActiveOrdersResponse>(environment.API + '/profile/active-orders', {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getFinishedOrders(year: string, themes: string[]) {
    const request = { year, themes };
    return this.http.post<GetFinishedOrdersResponse>(environment.API + '/profile/finished-orders', request, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getOrderDetails(id: string) {
    return this.http.get<GetOrderDetailsResponse>(environment.API + `/profile/order/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
