import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/internal/operators';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { GetOrderDetailsResponse, GetOrdersResponse } from './ppm-order.model';

@Injectable({
  providedIn: 'root'
})
export class PPMOrderService {
  private prefix = '/ppm-order';

  constructor(
    private http: HttpClient,
    private auth: SiteAuthService,
    private backend: BackendService
  ) {
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

  setAwaitingDelivery(orderIds: number[], comment: string) {
    return this.http.post(`${environment.API}${this.prefix}/set-awaiting-delivery`, { orderIds, comment })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getOrderDetails(id: string) {
    return this.http.get<GetOrderDetailsResponse>(`${environment.API}${this.prefix}/${id}/details`)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
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
}
