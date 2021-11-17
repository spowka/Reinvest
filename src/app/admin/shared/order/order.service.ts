import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/internal/operators';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { CurrentOrder, PickupPointOrderModel, ProfileOrderStatusHistoryRow, EmployeeOrderStatusHistoryRow, GetOrderDetailsForEmployeeResponse, GetOrdersResponse, PlaceOrderResponse, GetPaymentStatusRequest, GetPaymentStatusResponse } from './order.model';
import { CartRow } from '../cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private prefix = '/order';

  cartSummaryState = new BehaviorSubject(null);
  currentOrder: CurrentOrder;

  constructor(
    private http: HttpClient,
    private auth: SiteAuthService,
    private backend: BackendService
  ) {
  }

  setOrderItems(rows: CartRow[], totalPrice: number) {
    this.currentOrder = {
      items: rows,
      totalPrice
    };
  }

  placeOrder(form: any) {
    return this.http.post<PlaceOrderResponse>(`${environment.API}${this.prefix}/place`, form)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getOrders(filters: any, sort?: any) {
    return this.http.post<GetOrdersResponse>(`${environment.API}${this.prefix}/query`, {
      'pageSize': 50,
      'pageIndex': 0,
      'filter': filters ? filters : '',
      'sortOrder': sort ? sort : ''
    })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getOrderData(id: number) {
    return this.http.get(`${environment.API}${this.prefix}/${id}/data`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getOrderDetails(id: string) {
    return this.http.get<GetOrderDetailsForEmployeeResponse>(
      `${environment.API}${this.prefix}/${id}/details`)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  startPrinting(orderIds: number[]) {
    return this.http.post(`${environment.API}${this.prefix}/start-printing`, { orderIds })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getPrintingState() {
    return this.http.get(`${environment.API}${this.prefix}/printing-state`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getPickpoints() {
    return this.http.get<PickupPointOrderModel[]>(`${environment.API}${this.prefix}/pickpoints`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  private _getOrderHistory<T>(id: string) {
    return this.http.get<T>(`${environment.API}${this.prefix}/${id}/history`)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  getProfileOrderHistory(id: string) {
    return this._getOrderHistory<ProfileOrderStatusHistoryRow[]>(id);
  }

  getEmployeeOrderHistory(id: string) {
    return this._getOrderHistory<EmployeeOrderStatusHistoryRow[]>(id);
  }

  updateOrder(id: string, formData: FormData) {
    return this.http.put(`${environment.API}${this.prefix}/${id}`, formData, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  getPaymentStatus(request: any) {
    return this.http.post<GetPaymentStatusResponse>(`${environment.API}${this.prefix}/payment-status`, request)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
