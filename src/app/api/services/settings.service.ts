/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsSettingsParamResponse } from '../models/trade-cards-models-settings-param-response';
import { TradeCardsModelsSettingsServiceSettingsResponse } from '../models/trade-cards-models-settings-service-settings-response';
import { TradeCardsModelsSettingsServiceSettingsForTerminalResponse } from '../models/trade-cards-models-settings-service-settings-for-terminal-response';
import { TradeCardsModelsSettingsTestPrintSettingsResponse } from '../models/trade-cards-models-settings-test-print-settings-response';
import { TradeCardsModelsSettingsSocialSettingsResponse } from '../models/trade-cards-models-settings-social-settings-response';
@Injectable({
  providedIn: 'root',
})
class SettingsService extends __BaseService {
  static readonly getParamPath = '/api/settings/{name}';
  static readonly getServiceSettingsPath = '/api/settings/service';
  static readonly setServiceSettingsPath = '/api/settings/service';
  static readonly getServiceSettingsForTerminalPath = '/api/settings/service-terminal';
  static readonly getTestPrintSettingsPath = '/api/settings/test-print';
  static readonly setTestPrintSettingsPath = '/api/settings/test-print';
  static readonly getSocialSettingsPath = '/api/settings/social';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param name undefined
   * @return Success
   */
  getParamResponse(name: string): __Observable<__StrictHttpResponse<TradeCardsModelsSettingsParamResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/settings/${encodeURIComponent(name)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSettingsParamResponse>;
      })
    );
  }
  /**
   * @param name undefined
   * @return Success
   */
  getParam(name: string): __Observable<TradeCardsModelsSettingsParamResponse> {
    return this.getParamResponse(name).pipe(
      __map(_r => _r.body as TradeCardsModelsSettingsParamResponse)
    );
  }

  /**
   * ?????????????????? ?????????????????? ????????????????
   * @return Success
   */
  getServiceSettingsResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsSettingsServiceSettingsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/settings/service`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSettingsServiceSettingsResponse>;
      })
    );
  }
  /**
   * ?????????????????? ?????????????????? ????????????????
   * @return Success
   */
  getServiceSettings(): __Observable<TradeCardsModelsSettingsServiceSettingsResponse> {
    return this.getServiceSettingsResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsSettingsServiceSettingsResponse)
    );
  }

  /**
   * ???????????????????? ?????????????????? ????????????????
   * @param model undefined
   */
  setServiceSettingsResponse(model?: TradeCardsModelsSettingsServiceSettingsResponse): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/settings/service`,
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
   * ???????????????????? ?????????????????? ????????????????
   * @param model undefined
   */
  setServiceSettings(model?: TradeCardsModelsSettingsServiceSettingsResponse): __Observable<null> {
    return this.setServiceSettingsResponse(model).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * ?????????????????? ?????????????????? ???????????????? ?????? ??????????????????
   * @return Success
   */
  getServiceSettingsForTerminalResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsSettingsServiceSettingsForTerminalResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/settings/service-terminal`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSettingsServiceSettingsForTerminalResponse>;
      })
    );
  }
  /**
   * ?????????????????? ?????????????????? ???????????????? ?????? ??????????????????
   * @return Success
   */
  getServiceSettingsForTerminal(): __Observable<TradeCardsModelsSettingsServiceSettingsForTerminalResponse> {
    return this.getServiceSettingsForTerminalResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsSettingsServiceSettingsForTerminalResponse)
    );
  }

  /**
   * ?????????????????? ???????????????? ???????????????? ????????????
   * @return Success
   */
  getTestPrintSettingsResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsSettingsTestPrintSettingsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/settings/test-print`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSettingsTestPrintSettingsResponse>;
      })
    );
  }
  /**
   * ?????????????????? ???????????????? ???????????????? ????????????
   * @return Success
   */
  getTestPrintSettings(): __Observable<TradeCardsModelsSettingsTestPrintSettingsResponse> {
    return this.getTestPrintSettingsResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsSettingsTestPrintSettingsResponse)
    );
  }

  /**
   * ???????????????????? ?????????????????? ????????????????
   * @param params The `SettingsService.SetTestPrintSettingsParams` containing the following parameters:
   *
   * - `PrintFrontLamination`: ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ??????????????????
   *
   * - `PrintFrontImage`: ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ??????????????????????
   *
   * - `PrintFrontHolo`: ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ????????????????????
   *
   * - `PrintFilesMode`: ?????????? ???????????? ?????????? ???? ??????????????????
   *
   * - `PrintBackLamination`: ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ??????????????????
   *
   * - `PrintBackImage`: ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ??????????????????????
   *
   * - `PrintBackHolo`: ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ????????????????????
   */
  setTestPrintSettingsResponse(params: SettingsService.SetTestPrintSettingsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.PrintFrontLamination != null) { __formData.append('PrintFrontLamination', params.PrintFrontLamination as string | Blob);}
    if (params.PrintFrontImage != null) { __formData.append('PrintFrontImage', params.PrintFrontImage as string | Blob);}
    if (params.PrintFrontHolo != null) { __formData.append('PrintFrontHolo', params.PrintFrontHolo as string | Blob);}
    if (params.PrintFilesMode != null) { __formData.append('PrintFilesMode', params.PrintFilesMode as string | Blob);}
    if (params.PrintBackLamination != null) { __formData.append('PrintBackLamination', params.PrintBackLamination as string | Blob);}
    if (params.PrintBackImage != null) { __formData.append('PrintBackImage', params.PrintBackImage as string | Blob);}
    if (params.PrintBackHolo != null) { __formData.append('PrintBackHolo', params.PrintBackHolo as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/settings/test-print`,
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
   * ???????????????????? ?????????????????? ????????????????
   * @param params The `SettingsService.SetTestPrintSettingsParams` containing the following parameters:
   *
   * - `PrintFrontLamination`: ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ??????????????????
   *
   * - `PrintFrontImage`: ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ??????????????????????
   *
   * - `PrintFrontHolo`: ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ????????????????????
   *
   * - `PrintFilesMode`: ?????????? ???????????? ?????????? ???? ??????????????????
   *
   * - `PrintBackLamination`: ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ??????????????????
   *
   * - `PrintBackImage`: ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ??????????????????????
   *
   * - `PrintBackHolo`: ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ????????????????????
   */
  setTestPrintSettings(params: SettingsService.SetTestPrintSettingsParams): __Observable<null> {
    return this.setTestPrintSettingsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * ???????????????????? ?????????????????? (???????????????? ??????????) ?????? ?????????????????????? ?????????? ??????. ????????
   * @return Success
   */
  getSocialSettingsResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsSettingsSocialSettingsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/settings/social`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsSettingsSocialSettingsResponse>;
      })
    );
  }
  /**
   * ???????????????????? ?????????????????? (???????????????? ??????????) ?????? ?????????????????????? ?????????? ??????. ????????
   * @return Success
   */
  getSocialSettings(): __Observable<TradeCardsModelsSettingsSocialSettingsResponse> {
    return this.getSocialSettingsResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsSettingsSocialSettingsResponse)
    );
  }
}

module SettingsService {

  /**
   * Parameters for SetTestPrintSettings
   */
  export interface SetTestPrintSettingsParams {

    /**
     * ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ??????????????????
     */
    PrintFrontLamination?: Blob;

    /**
     * ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ??????????????????????
     */
    PrintFrontImage?: Blob;

    /**
     * ???????????????? ?????? ???????????? ???? ??????????????????. ?????????????? ??????????????. ????????????????????
     */
    PrintFrontHolo?: Blob;

    /**
     * ?????????? ???????????? ?????????? ???? ??????????????????
     */
    PrintFilesMode?: 'None' | 'ImageLamination' | 'ImageHoloLamination';

    /**
     * ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ??????????????????
     */
    PrintBackLamination?: Blob;

    /**
     * ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ??????????????????????
     */
    PrintBackImage?: Blob;

    /**
     * ???????????????? ?????? ???????????? ???? ??????????????????. ???????????????? ??????????????. ????????????????????
     */
    PrintBackHolo?: Blob;
  }
}

export { SettingsService }
