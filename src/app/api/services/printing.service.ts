/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPrintingPrintPreparationModel } from '../models/trade-cards-models-printing-print-preparation-model';
import { TradeCardsModelsPrintingSelectPrintersRequest } from '../models/trade-cards-models-printing-select-printers-request';
import { TradeCardsModelsPrintingPrintProcessModel } from '../models/trade-cards-models-printing-print-process-model';
import { TradeCardsModelsPrintingStartPrintingRequest } from '../models/trade-cards-models-printing-start-printing-request';
import { TradeCardsModelsPrintingChangeCardStatusRequest } from '../models/trade-cards-models-printing-change-card-status-request';
import { TradeCardsModelsPrintingReprintCardRequest } from '../models/trade-cards-models-printing-reprint-card-request';
import { TradeCardsModelsPrintingForceShutdownResponse } from '../models/trade-cards-models-printing-force-shutdown-response';
@Injectable({
  providedIn: 'root',
})
class PrintingService extends __BaseService {
  static readonly getPrintPreparationPath = '/api/printing/preparation';
  static readonly editPrintProcessSelectedPrintersPath = '/api/printing/process/printers';
  static readonly getPrintProcessPath = '/api/printing/process';
  static readonly cancelSessionPath = '/api/printing/cancel-session';
  static readonly startPrintingPath = '/api/printing/print';
  static readonly stopPrinterPath = '/api/printing/printer/{printerId}/stop';
  static readonly stopAllPrintersPath = '/api/printing/printer/stop-all';
  static readonly rejectCardPath = '/api/printing/card/{cardId}/reject';
  static readonly cancelCardPath = '/api/printing/card/{cardId}/cancel';
  static readonly reprintCardPath = '/api/printing/card/{cardId}/reprint';
  static readonly finishSessionPath = '/api/printing/finish';
  static readonly forceShutdownSessionPath = '/api/printing/force-shutdown';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение страницы подготовки к печати
   * @return Success
   */
  getPrintPreparationResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsPrintingPrintPreparationModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/printing/preparation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPrintingPrintPreparationModel>;
      })
    );
  }
  /**
   * Получение страницы подготовки к печати
   * @return Success
   */
  getPrintPreparation(): __Observable<TradeCardsModelsPrintingPrintPreparationModel> {
    return this.getPrintPreparationResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsPrintingPrintPreparationModel)
    );
  }

  /**
   * Отредактировать список выбранных принтеров
   * (честно я не знаю зачем вообще эти галочки сделали, если их можно редактировать на любой стадии)
   * @param request undefined
   */
  editPrintProcessSelectedPrintersResponse(request?: TradeCardsModelsPrintingSelectPrintersRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/process/printers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Отредактировать список выбранных принтеров
   * (честно я не знаю зачем вообще эти галочки сделали, если их можно редактировать на любой стадии)
   * @param request undefined
   */
  editPrintProcessSelectedPrinters(request?: TradeCardsModelsPrintingSelectPrintersRequest): __Observable<null> {
    return this.editPrintProcessSelectedPrintersResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение страницы печати
   * @return Success
   */
  getPrintProcessResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsPrintingPrintProcessModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/printing/process`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPrintingPrintProcessModel>;
      })
    );
  }
  /**
   * Получение страницы печати
   * @return Success
   */
  getPrintProcess(): __Observable<TradeCardsModelsPrintingPrintProcessModel> {
    return this.getPrintProcessResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsPrintingPrintProcessModel)
    );
  }

  /**
   * Отмена сессии печати
   */
  cancelSessionResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/cancel-session`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Отмена сессии печати
   */
  cancelSession(): __Observable<null> {
    return this.cancelSessionResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Начать печать
   * @param request undefined
   */
  startPrintingResponse(request?: TradeCardsModelsPrintingStartPrintingRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/print`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Начать печать
   * @param request undefined
   */
  startPrinting(request?: TradeCardsModelsPrintingStartPrintingRequest): __Observable<null> {
    return this.startPrintingResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Остановить принтер
   * @param printerId undefined
   */
  stopPrinterResponse(printerId: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/printer/${encodeURIComponent(printerId)}/stop`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Остановить принтер
   * @param printerId undefined
   */
  stopPrinter(printerId: string): __Observable<null> {
    return this.stopPrinterResponse(printerId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Остановить все принтеры
   */
  stopAllPrintersResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/printer/stop-all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Остановить все принтеры
   */
  stopAllPrinters(): __Observable<null> {
    return this.stopAllPrintersResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Забраковать карточку
   * @param params The `PrintingService.RejectCardParams` containing the following parameters:
   *
   * - `cardId`:
   *
   * - `request`:
   */
  rejectCardResponse(params: PrintingService.RejectCardParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/card/${encodeURIComponent(params.cardId)}/reject`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Забраковать карточку
   * @param params The `PrintingService.RejectCardParams` containing the following parameters:
   *
   * - `cardId`:
   *
   * - `request`:
   */
  rejectCard(params: PrintingService.RejectCardParams): __Observable<null> {
    return this.rejectCardResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Отменить карточку
   * @param params The `PrintingService.CancelCardParams` containing the following parameters:
   *
   * - `cardId`:
   *
   * - `request`:
   */
  cancelCardResponse(params: PrintingService.CancelCardParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/card/${encodeURIComponent(params.cardId)}/cancel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Отменить карточку
   * @param params The `PrintingService.CancelCardParams` containing the following parameters:
   *
   * - `cardId`:
   *
   * - `request`:
   */
  cancelCard(params: PrintingService.CancelCardParams): __Observable<null> {
    return this.cancelCardResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Повторная печать карточки
   * @param params The `PrintingService.ReprintCardParams` containing the following parameters:
   *
   * - `cardId`:
   *
   * - `request`:
   */
  reprintCardResponse(params: PrintingService.ReprintCardParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/card/${encodeURIComponent(params.cardId)}/reprint`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Повторная печать карточки
   * @param params The `PrintingService.ReprintCardParams` containing the following parameters:
   *
   * - `cardId`:
   *
   * - `request`:
   */
  reprintCard(params: PrintingService.ReprintCardParams): __Observable<null> {
    return this.reprintCardResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Завершение сессии печати
   */
  finishSessionResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/finish`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Завершение сессии печати
   */
  finishSession(): __Observable<null> {
    return this.finishSessionResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Принудительное завершение сессии печати
   * @return Success
   */
  forceShutdownSessionResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsPrintingForceShutdownResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printing/force-shutdown`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPrintingForceShutdownResponse>;
      })
    );
  }
  /**
   * Принудительное завершение сессии печати
   * @return Success
   */
  forceShutdownSession(): __Observable<TradeCardsModelsPrintingForceShutdownResponse> {
    return this.forceShutdownSessionResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsPrintingForceShutdownResponse)
    );
  }
}

module PrintingService {

  /**
   * Parameters for RejectCard
   */
  export interface RejectCardParams {
    cardId: string;
    request?: TradeCardsModelsPrintingChangeCardStatusRequest;
  }

  /**
   * Parameters for CancelCard
   */
  export interface CancelCardParams {
    cardId: string;
    request?: TradeCardsModelsPrintingChangeCardStatusRequest;
  }

  /**
   * Parameters for ReprintCard
   */
  export interface ReprintCardParams {
    cardId: string;
    request?: TradeCardsModelsPrintingReprintCardRequest;
  }
}

export { PrintingService }
