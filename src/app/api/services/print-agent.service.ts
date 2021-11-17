/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsPrintAgentPrintTask } from '../models/trade-cards-models-print-agent-print-task';
import { TradeCardsModelsPrintAgentPrinterInfo } from '../models/trade-cards-models-print-agent-printer-info';
@Injectable({
  providedIn: 'root',
})
class PrintAgentService extends __BaseService {
  static readonly getPrintTasksPath = '/api/print-agent/tasks';
  static readonly pingPath = '/api/print-agent/ping';
  static readonly updatePrintersPath = '/api/print-agent/printers';
  static readonly setTaskErrorPath = '/api/print-agent/tasks/{id}/error';
  static readonly setTaskPrintingPath = '/api/print-agent/tasks/{id}/printing';
  static readonly setTaskSuccessPath = '/api/print-agent/tasks/{id}/success';
  static readonly getPrintTaskImagesPath = '/api/print-agent/tasks/{id}/images';
  static readonly getPrintTaskImages2Path = '/api/print-agent/tasks/{id}/images2';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка заданий на печать
   * @return Success
   */
  getPrintTasksResponse(): __Observable<__StrictHttpResponse<Array<TradeCardsModelsPrintAgentPrintTask>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/print-agent/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsPrintAgentPrintTask>>;
      })
    );
  }
  /**
   * Получение списка заданий на печать
   * @return Success
   */
  getPrintTasks(): __Observable<Array<TradeCardsModelsPrintAgentPrintTask>> {
    return this.getPrintTasksResponse().pipe(
      __map(_r => _r.body as Array<TradeCardsModelsPrintAgentPrintTask>)
    );
  }

  /**
   * Получение от принт-агента сигнала о том, что он работает
   */
  pingResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/print-agent/ping`,
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
   * Получение от принт-агента сигнала о том, что он работает
   */
  ping(): __Observable<null> {
    return this.pingResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение списка принтеров от принт-агента
   * @param printers undefined
   */
  updatePrintersResponse(printers?: Array<TradeCardsModelsPrintAgentPrinterInfo>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = printers;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/print-agent/printers`,
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
   * Получение списка принтеров от принт-агента
   * @param printers undefined
   */
  updatePrinters(printers?: Array<TradeCardsModelsPrintAgentPrinterInfo>): __Observable<null> {
    return this.updatePrintersResponse(printers).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Поставить статус "Ошибка"
   * @param params The `PrintAgentService.SetTaskErrorParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `description`:
   */
  setTaskErrorResponse(params: PrintAgentService.SetTaskErrorParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.description;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/print-agent/tasks/${encodeURIComponent(params.id)}/error`,
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
   * Поставить статус "Ошибка"
   * @param params The `PrintAgentService.SetTaskErrorParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `description`:
   */
  setTaskError(params: PrintAgentService.SetTaskErrorParams): __Observable<null> {
    return this.setTaskErrorResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Поставить статус "В печати"
   * @param id undefined
   */
  setTaskPrintingResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/print-agent/tasks/${encodeURIComponent(id)}/printing`,
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
   * Поставить статус "В печати"
   * @param id undefined
   */
  setTaskPrinting(id: string): __Observable<null> {
    return this.setTaskPrintingResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Поставить статус "Успех"
   * @param id undefined
   */
  setTaskSuccessResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/print-agent/tasks/${encodeURIComponent(id)}/success`,
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
   * Поставить статус "Успех"
   * @param id undefined
   */
  setTaskSuccess(id: string): __Observable<null> {
    return this.setTaskSuccessResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение архива изображений, необходимых для печати одного задания
   * @param id undefined
   * @return Success
   */
  getPrintTaskImagesResponse(id: string): __Observable<__StrictHttpResponse<ArrayBuffer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/print-agent/tasks/${encodeURIComponent(id)}/images`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'arraybuffer'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArrayBuffer>;
      })
    );
  }
  /**
   * Получение архива изображений, необходимых для печати одного задания
   * @param id undefined
   * @return Success
   */
  getPrintTaskImages(id: string): __Observable<ArrayBuffer> {
    return this.getPrintTaskImagesResponse(id).pipe(
      __map(_r => _r.body as ArrayBuffer)
    );
  }

  /**
   * Получение архива изображений, необходимых для печати одного задания
   * @param id undefined
   */
  getPrintTaskImages2Response(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/print-agent/tasks/${encodeURIComponent(id)}/images2`,
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
   * Получение архива изображений, необходимых для печати одного задания
   * @param id undefined
   */
  getPrintTaskImages2(id: string): __Observable<null> {
    return this.getPrintTaskImages2Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PrintAgentService {

  /**
   * Parameters for SetTaskError
   */
  export interface SetTaskErrorParams {
    id: string;
    description?: string;
  }
}

export { PrintAgentService }
