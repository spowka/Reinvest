import { Injectable } from '@angular/core';
import { CustomerModel, GetCustomerActiveOrdersResponse, GetCustomerFinishedOrdersResponse } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { AdminAuthService } from '../auth/auth.service';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private prefix = '/customer';
  constructor(
    private http: HttpClient) {
  }

  public getCustomers(type: string, filters?: any, sort?: any) {
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
  public getCustomer(id: string) {
    return this.http.get<CustomerModel>(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
  public deleteCustomer(id: string) {
    return this.http.delete(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public archiveCustomer(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
  public restoreCustomer(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
  public sendCustomerRegData(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/sendregdata`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
  public updateInfoCustomer(id: string, info: any) {
    return this.http.put(environment.API + this.prefix + `/${id}`, info, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public confirmEmail(id: string, code: string) {
    return this.http.post(environment.API + `/account/confirmEmail`, { id, code })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getActiveOrders(customerId: string) {
    return this.http.get<GetCustomerActiveOrdersResponse>(
      `${environment.API}${this.prefix}/${customerId}/active-orders`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public getFinishedOrders(customerId: string, year: string, themes: string[]) {
    const request = { year, themes };
    return this.http.post<GetCustomerFinishedOrdersResponse>(
      `${environment.API}${this.prefix}/${customerId}/finished-orders`, request, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
