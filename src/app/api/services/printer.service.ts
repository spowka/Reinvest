/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPrintersPrinter } from '../models/trade-cards-models-printers-printer';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsPrintersTestPrintStateModel } from '../models/trade-cards-models-printers-test-print-state-model';
@Injectable({
  providedIn: 'root',
})
class PrinterService extends __BaseService {
  static readonly getPrintersPath = '/api/printer';
  static readonly updatePrinterPath = '/api/printer/{id}';
  static readonly doTestPrintPath = '/api/printer/{printerId}/print';
  static readonly getTestPrintStatusPath = '/api/printer/{printerId}/test-print';
  static readonly getTestPrintStatus_1Path = '/api/printer/{printerId}/test-print/{taskId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка принтеров
   * @return Success
   */
  getPrintersResponse(): __Observable<__StrictHttpResponse<Array<TradeCardsModelsPrintersPrinter>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/printer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsPrintersPrinter>>;
      })
    );
  }
  /**
   * Получение списка принтеров
   * @return Success
   */
  getPrinters(): __Observable<Array<TradeCardsModelsPrintersPrinter>> {
    return this.getPrintersResponse().pipe(
      __map(_r => _r.body as Array<TradeCardsModelsPrintersPrinter>)
    );
  }

  /**
   * Обновление данных принтера
   * @param params The `PrinterService.UpdatePrinterParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `OutProfile`: Выходной профиль
   *
   * - `Name`: Имя принтера
   *
   * - `InProfile`: Входной профиль
   *
   * @return Success
   */
  updatePrinterResponse(params: PrinterService.UpdatePrinterParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.OutProfile != null) { __formData.append('OutProfile', params.OutProfile as string | Blob);}
    if (params.Name != null) { __formData.append('Name', params.Name as string | Blob);}
    if (params.InProfile != null) { __formData.append('InProfile', params.InProfile as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/printer/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Обновление данных принтера
   * @param params The `PrinterService.UpdatePrinterParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `OutProfile`: Выходной профиль
   *
   * - `Name`: Имя принтера
   *
   * - `InProfile`: Входной профиль
   *
   * @return Success
   */
  updatePrinter(params: PrinterService.UpdatePrinterParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updatePrinterResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Запуск тестовой печати
   * @param printerId undefined
   * @return Success
   */
  doTestPrintResponse(printerId: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/printer/${encodeURIComponent(printerId)}/print`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Запуск тестовой печати
   * @param printerId undefined
   * @return Success
   */
  doTestPrint(printerId: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.doTestPrintResponse(printerId).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Получение статуса тестовой печати для принтера
   * @param printerId undefined
   * @return Success
   */
  getTestPrintStatusResponse(printerId: string): __Observable<__StrictHttpResponse<TradeCardsModelsPrintersTestPrintStateModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/printer/${encodeURIComponent(printerId)}/test-print`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPrintersTestPrintStateModel>;
      })
    );
  }
  /**
   * Получение статуса тестовой печати для принтера
   * @param printerId undefined
   * @return Success
   */
  getTestPrintStatus(printerId: string): __Observable<TradeCardsModelsPrintersTestPrintStateModel> {
    return this.getTestPrintStatusResponse(printerId).pipe(
      __map(_r => _r.body as TradeCardsModelsPrintersTestPrintStateModel)
    );
  }

  /**
   * Получение статуса тестовой печати для принтера
   * @param params The `PrinterService.GetTestPrintStatus_1Params` containing the following parameters:
   *
   * - `taskId`:
   *
   * - `printerId`:
   *
   * @return Success
   */
  getTestPrintStatus_1Response(params: PrinterService.GetTestPrintStatus_1Params): __Observable<__StrictHttpResponse<TradeCardsModelsPrintersTestPrintStateModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/printer/${encodeURIComponent(params.printerId)}/test-print/${encodeURIComponent(params.taskId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsPrintersTestPrintStateModel>;
      })
    );
  }
  /**
   * Получение статуса тестовой печати для принтера
   * @param params The `PrinterService.GetTestPrintStatus_1Params` containing the following parameters:
   *
   * - `taskId`:
   *
   * - `printerId`:
   *
   * @return Success
   */
  getTestPrintStatus_1(params: PrinterService.GetTestPrintStatus_1Params): __Observable<TradeCardsModelsPrintersTestPrintStateModel> {
    return this.getTestPrintStatus_1Response(params).pipe(
      __map(_r => _r.body as TradeCardsModelsPrintersTestPrintStateModel)
    );
  }
}

module PrinterService {

  /**
   * Parameters for UpdatePrinter
   */
  export interface UpdatePrinterParams {
    id: string;

    /**
     * Выходной профиль
     */
    OutProfile?: Blob;

    /**
     * Имя принтера
     */
    Name?: string;

    /**
     * Входной профиль
     */
    InProfile?: Blob;
  }

  /**
   * Parameters for GetTestPrintStatus_1
   */
  export interface GetTestPrintStatus_1Params {
    taskId: string;
    printerId: string;
  }
}

export { PrinterService }
