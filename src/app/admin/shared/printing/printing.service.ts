import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/internal/operators';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { ForceShutdownResponse, PrintPreparationModel, PrintProcessModel } from './printing.model';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {
  cartSummaryState = new BehaviorSubject(null);

  private _prefix = '/printing';

  constructor(
    private http: HttpClient,
    private auth: SiteAuthService,
    private backend: BackendService
  ) {
  }

  getPrintPreparation() {
    return this.http.get<PrintPreparationModel>(`${environment.API}${this._prefix}/preparation`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  editPrintProcessSelectedPrinters(printerIds: string[]) {
    return this.http.post(`${environment.API}${this._prefix}/process/printers`, { printers: printerIds })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getPrintProcess() {
    return this.http.get<PrintProcessModel>(`${environment.API}${this._prefix}/process`)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  cancelSession() {
    return this.http.post(`${environment.API}${this._prefix}/cancel-session`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  print(data: any) {
    return this.http.post(`${environment.API}${this._prefix}/print`, data)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  stopPrinter(id: string) {
    return this.http.post(`${environment.API}${this._prefix}/printer/${id}/stop`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  stopAllPrinters() {
    return this.http.post(`${environment.API}${this._prefix}/printer/stop-all`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  rejectCard(id: string, comment: string) {
    return this.http.post(`${environment.API}${this._prefix}/card/${id}/reject`, { comment })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  cancelCard(id: string, comment: string) {
    return this.http.post(`${environment.API}${this._prefix}/card/${id}/cancel`, { comment })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  reprintCard(id: string, printerId: string) {
    return this.http.post(`${environment.API}${this._prefix}/card/${id}/reprint`, { printerId })
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  finishSession() {
    return this.http.post(`${environment.API}${this._prefix}/finish`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  forceShutdownSession() {
    return this.http.post<ForceShutdownResponse>(`${environment.API}${this._prefix}/force-shutdown`, {})
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
