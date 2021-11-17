/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsTerminalGetTerminalsResponse } from '../models/trade-cards-models-terminal-get-terminals-response';
import { TradeCardsModelsTerminalGetTerminalsRequest } from '../models/trade-cards-models-terminal-get-terminals-request';
import { TradeCardsModelsTerminalGetLegalEntityTerminalsResponse } from '../models/trade-cards-models-terminal-get-legal-entity-terminals-response';
import { TradeCardsModelsTerminalGetLegalEntityTerminalsRequest } from '../models/trade-cards-models-terminal-get-legal-entity-terminals-request';
import { TradeCardsModelsTerminalGetTerminalsForAttachRow } from '../models/trade-cards-models-terminal-get-terminals-for-attach-row';
import { TradeCardsModelsTerminalGetTerminalsForAttachRequest } from '../models/trade-cards-models-terminal-get-terminals-for-attach-request';
import { TradeCardsModelsTerminalAttachTerminalRequest } from '../models/trade-cards-models-terminal-attach-terminal-request';
import { TradeCardsModelsTerminalGetTerminalResponse } from '../models/trade-cards-models-terminal-get-terminal-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsTerminalGetCardVariableParamsRequest } from '../models/trade-cards-models-terminal-get-card-variable-params-request';
import { TradeCardsModelsTerminalGetCardsRequest } from '../models/trade-cards-models-terminal-get-cards-request';
import { TradeCardsModelsTerminalTerminalFull } from '../models/trade-cards-models-terminal-terminal-full';
import { TradeCardsModelsTerminalRenewTerminalStatusRequest } from '../models/trade-cards-models-terminal-renew-terminal-status-request';
@Injectable({
  providedIn: 'root',
})
class TerminalService extends __BaseService {
  static readonly getTerminalsPath = '/api/terminal/query';
  static readonly getLegalEntityTerminalsPath = '/api/terminal/query/{legalEntityId}';
  static readonly getTerminalsForAttachPath = '/api/terminal/forAttach/{legalEntityId}';
  static readonly attachTerminalPath = '/api/terminal/attach/{id}';
  static readonly detachTerminalPath = '/api/terminal/detach/{id}';
  static readonly getTerminalPath = '/api/terminal/{id}';
  static readonly updateTerminalPath = '/api/terminal/{id}';
  static readonly deleteTerminalPath = '/api/terminal/{id}';
  static readonly createTerminalPath = '/api/terminal';
  static readonly archiveTerminalPath = '/api/terminal/{id}/archive';
  static readonly restoreTerminalPath = '/api/terminal/{id}/restore';
  static readonly getCardsPath = '/api/terminal/cards';
  static readonly getTerminalFullPath = '/api/terminal/full/{connectId}';
  static readonly getPrintTaskImagesPath = '/api/terminal/card/{id}/images';
  static readonly getPrintTaskImages2Path = '/api/terminal/card/{id}/images2';
  static readonly renewTerminalStatusPath = '/api/terminal/renew-status/{connectId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение страницы списка терминалов
   * @param model Данные
   * @return Success
   */
  getTerminalsResponse(model?: TradeCardsModelsTerminalGetTerminalsRequest): __Observable<__StrictHttpResponse<TradeCardsModelsTerminalGetTerminalsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTerminalGetTerminalsResponse>;
      })
    );
  }
  /**
   * Получение страницы списка терминалов
   * @param model Данные
   * @return Success
   */
  getTerminals(model?: TradeCardsModelsTerminalGetTerminalsRequest): __Observable<TradeCardsModelsTerminalGetTerminalsResponse> {
    return this.getTerminalsResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsTerminalGetTerminalsResponse)
    );
  }

  /**
   * Получение страницы списка терминалов для юр. лица
   * @param params The `TerminalService.GetLegalEntityTerminalsParams` containing the following parameters:
   *
   * - `legalEntityId`: Id юр. лица
   *
   * - `model`: Данные
   *
   * @return Success
   */
  getLegalEntityTerminalsResponse(params: TerminalService.GetLegalEntityTerminalsParams): __Observable<__StrictHttpResponse<TradeCardsModelsTerminalGetLegalEntityTerminalsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/query/${encodeURIComponent(params.legalEntityId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTerminalGetLegalEntityTerminalsResponse>;
      })
    );
  }
  /**
   * Получение страницы списка терминалов для юр. лица
   * @param params The `TerminalService.GetLegalEntityTerminalsParams` containing the following parameters:
   *
   * - `legalEntityId`: Id юр. лица
   *
   * - `model`: Данные
   *
   * @return Success
   */
  getLegalEntityTerminals(params: TerminalService.GetLegalEntityTerminalsParams): __Observable<TradeCardsModelsTerminalGetLegalEntityTerminalsResponse> {
    return this.getLegalEntityTerminalsResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsTerminalGetLegalEntityTerminalsResponse)
    );
  }

  /**
   * Получение страницы списка терминалов для окна присоединения к юр. лицу
   * @param params The `TerminalService.GetTerminalsForAttachParams` containing the following parameters:
   *
   * - `legalEntityId`: Id юр. лица
   *
   * - `model`: Данные
   *
   * @return Success
   */
  getTerminalsForAttachResponse(params: TerminalService.GetTerminalsForAttachParams): __Observable<__StrictHttpResponse<Array<TradeCardsModelsTerminalGetTerminalsForAttachRow>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/forAttach/${encodeURIComponent(params.legalEntityId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsTerminalGetTerminalsForAttachRow>>;
      })
    );
  }
  /**
   * Получение страницы списка терминалов для окна присоединения к юр. лицу
   * @param params The `TerminalService.GetTerminalsForAttachParams` containing the following parameters:
   *
   * - `legalEntityId`: Id юр. лица
   *
   * - `model`: Данные
   *
   * @return Success
   */
  getTerminalsForAttach(params: TerminalService.GetTerminalsForAttachParams): __Observable<Array<TradeCardsModelsTerminalGetTerminalsForAttachRow>> {
    return this.getTerminalsForAttachResponse(params).pipe(
      __map(_r => _r.body as Array<TradeCardsModelsTerminalGetTerminalsForAttachRow>)
    );
  }

  /**
   * Прикрепление терминала к юр. лицу
   * @param params The `TerminalService.AttachTerminalParams` containing the following parameters:
   *
   * - `id`: Id терминала
   *
   * - `model`: Модель запроса
   */
  attachTerminalResponse(params: TerminalService.AttachTerminalParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/attach/${encodeURIComponent(params.id)}`,
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
   * Прикрепление терминала к юр. лицу
   * @param params The `TerminalService.AttachTerminalParams` containing the following parameters:
   *
   * - `id`: Id терминала
   *
   * - `model`: Модель запроса
   */
  attachTerminal(params: TerminalService.AttachTerminalParams): __Observable<null> {
    return this.attachTerminalResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Открепление терминала от юр. лица
   * @param id Id терминала
   */
  detachTerminalResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/detach/${encodeURIComponent(id)}`,
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
   * Открепление терминала от юр. лица
   * @param id Id терминала
   */
  detachTerminal(id: string): __Observable<null> {
    return this.detachTerminalResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Получение данных терминала
   * @param id Идентификатор терминала
   * @return Success
   */
  getTerminalResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsTerminalGetTerminalResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/terminal/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTerminalGetTerminalResponse>;
      })
    );
  }
  /**
   * Получение данных терминала
   * @param id Идентификатор терминала
   * @return Success
   */
  getTerminal(id: string): __Observable<TradeCardsModelsTerminalGetTerminalResponse> {
    return this.getTerminalResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsTerminalGetTerminalResponse)
    );
  }

  /**
   * Обновление данных терминала
   * @param params The `TerminalService.UpdateTerminalParams` containing the following parameters:
   *
   * - `id`: Идентификатор терминала
   *
   * - `TerminalOwnerId`: Id юр. лица - собственника терминала
   *
   * - `PublishCatalogLevels`: Список идентификаторов уровней каталога, опубликованных для данного терминала
   *
   * - `PromoVideo`: Промо-ролик
   *
   * - `Location`:
   *
   * - `InventoryNumber`:
   *
   * - `CustomCatalogLevelImages`: Список идентификаторов уровней каталога, для которых переопределены фоновые изображения в данном терминале
   *
   * - `ConnectId`:
   *
   * - `CartCleanupWarningDelay`:
   *
   * - `CartCleanupCountdown`:
   *
   * - `CanPayBankCard`: Способы оплаты - банковской картой
   *
   * @return Success
   */
  updateTerminalResponse(params: TerminalService.UpdateTerminalParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.TerminalOwnerId != null) { __formData.append('TerminalOwnerId', params.TerminalOwnerId as string | Blob);}
    (params.PublishCatalogLevels || []).forEach(val => {if (val != null) __formData.append('PublishCatalogLevels', val as string | Blob)});
    if (params.PromoVideo != null) { __formData.append('PromoVideo', params.PromoVideo as string | Blob);}
    if (params.Location != null) { __formData.append('Location', params.Location as string | Blob);}
    if (params.InventoryNumber != null) { __formData.append('InventoryNumber', params.InventoryNumber as string | Blob);}
    (params.CustomCatalogLevelImages || []).forEach(val => {if (val != null) __formData.append('CustomCatalogLevelImages', val as string | Blob)});
    if (params.ConnectId != null) { __formData.append('ConnectId', params.ConnectId as string | Blob);}
    if (params.CartCleanupWarningDelay != null) { __formData.append('CartCleanupWarningDelay', JSON.stringify(params.CartCleanupWarningDelay));}
    if (params.CartCleanupCountdown != null) { __formData.append('CartCleanupCountdown', JSON.stringify(params.CartCleanupCountdown));}
    if (params.CanPayBankCard != null) { __formData.append('CanPayBankCard', JSON.stringify(params.CanPayBankCard));}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/terminal/${encodeURIComponent(params.id)}`,
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
   * Обновление данных терминала
   * @param params The `TerminalService.UpdateTerminalParams` containing the following parameters:
   *
   * - `id`: Идентификатор терминала
   *
   * - `TerminalOwnerId`: Id юр. лица - собственника терминала
   *
   * - `PublishCatalogLevels`: Список идентификаторов уровней каталога, опубликованных для данного терминала
   *
   * - `PromoVideo`: Промо-ролик
   *
   * - `Location`:
   *
   * - `InventoryNumber`:
   *
   * - `CustomCatalogLevelImages`: Список идентификаторов уровней каталога, для которых переопределены фоновые изображения в данном терминале
   *
   * - `ConnectId`:
   *
   * - `CartCleanupWarningDelay`:
   *
   * - `CartCleanupCountdown`:
   *
   * - `CanPayBankCard`: Способы оплаты - банковской картой
   *
   * @return Success
   */
  updateTerminal(params: TerminalService.UpdateTerminalParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateTerminalResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Удаление терминала
   * @param id Идентификатор терминала
   * @return Success
   */
  deleteTerminalResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/terminal/${encodeURIComponent(id)}`,
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
   * Удаление терминала
   * @param id Идентификатор терминала
   * @return Success
   */
  deleteTerminal(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.deleteTerminalResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Создание терминала
   * @param params The `TerminalService.CreateTerminalParams` containing the following parameters:
   *
   * - `TerminalOwnerId`: Id юр. лица - собственника терминала
   *
   * - `PublishCatalogLevels`: Список идентификаторов уровней каталога, опубликованных для данного терминала
   *
   * - `PromoVideo`: Промо-ролик
   *
   * - `Location`:
   *
   * - `InventoryNumber`:
   *
   * - `CustomCatalogLevelImages`: Список идентификаторов уровней каталога, для которых переопределены фоновые изображения в данном терминале
   *
   * - `ConnectId`:
   *
   * - `CartCleanupWarningDelay`:
   *
   * - `CartCleanupCountdown`:
   *
   * - `CanPayBankCard`: Способы оплаты - банковской картой
   *
   * @return Success
   */
  createTerminalResponse(params: TerminalService.CreateTerminalParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.TerminalOwnerId != null) { __formData.append('TerminalOwnerId', params.TerminalOwnerId as string | Blob);}
    (params.PublishCatalogLevels || []).forEach(val => {if (val != null) __formData.append('PublishCatalogLevels', val as string | Blob)});
    if (params.PromoVideo != null) { __formData.append('PromoVideo', params.PromoVideo as string | Blob);}
    if (params.Location != null) { __formData.append('Location', params.Location as string | Blob);}
    if (params.InventoryNumber != null) { __formData.append('InventoryNumber', params.InventoryNumber as string | Blob);}
    (params.CustomCatalogLevelImages || []).forEach(val => {if (val != null) __formData.append('CustomCatalogLevelImages', val as string | Blob)});
    if (params.ConnectId != null) { __formData.append('ConnectId', params.ConnectId as string | Blob);}
    if (params.CartCleanupWarningDelay != null) { __formData.append('CartCleanupWarningDelay', JSON.stringify(params.CartCleanupWarningDelay));}
    if (params.CartCleanupCountdown != null) { __formData.append('CartCleanupCountdown', JSON.stringify(params.CartCleanupCountdown));}
    if (params.CanPayBankCard != null) { __formData.append('CanPayBankCard', JSON.stringify(params.CanPayBankCard));}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal`,
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
   * Создание терминала
   * @param params The `TerminalService.CreateTerminalParams` containing the following parameters:
   *
   * - `TerminalOwnerId`: Id юр. лица - собственника терминала
   *
   * - `PublishCatalogLevels`: Список идентификаторов уровней каталога, опубликованных для данного терминала
   *
   * - `PromoVideo`: Промо-ролик
   *
   * - `Location`:
   *
   * - `InventoryNumber`:
   *
   * - `CustomCatalogLevelImages`: Список идентификаторов уровней каталога, для которых переопределены фоновые изображения в данном терминале
   *
   * - `ConnectId`:
   *
   * - `CartCleanupWarningDelay`:
   *
   * - `CartCleanupCountdown`:
   *
   * - `CanPayBankCard`: Способы оплаты - банковской картой
   *
   * @return Success
   */
  createTerminal(params: TerminalService.CreateTerminalParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.createTerminalResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправка терминала в архив
   * @param id Идентификатор терминала
   * @return Success
   */
  archiveTerminalResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/${encodeURIComponent(id)}/archive`,
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
   * Отправка терминала в архив
   * @param id Идентификатор терминала
   * @return Success
   */
  archiveTerminal(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.archiveTerminalResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Восстановление терминала из архива
   * @param id Идентификатор терминала
   * @return Success
   */
  restoreTerminalResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/${encodeURIComponent(id)}/restore`,
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
   * Восстановление терминала из архива
   * @param id Идентификатор терминала
   * @return Success
   */
  restoreTerminal(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.restoreTerminalResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Получение списка карточек
   * @param model undefined
   * @return Success
   */
  getCardsResponse(model?: TradeCardsModelsTerminalGetCardsRequest): __Observable<__StrictHttpResponse<TradeCardsModelsTerminalGetCardVariableParamsRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/cards`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTerminalGetCardVariableParamsRequest>;
      })
    );
  }
  /**
   * Получение списка карточек
   * @param model undefined
   * @return Success
   */
  getCards(model?: TradeCardsModelsTerminalGetCardsRequest): __Observable<TradeCardsModelsTerminalGetCardVariableParamsRequest> {
    return this.getCardsResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsTerminalGetCardVariableParamsRequest)
    );
  }

  /**
   * Получение полного набора данных терминала
   * @param connectId СonnectId терминала
   * @return Success
   */
  getTerminalFullResponse(connectId: string): __Observable<__StrictHttpResponse<TradeCardsModelsTerminalTerminalFull>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/terminal/full/${encodeURIComponent(connectId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsTerminalTerminalFull>;
      })
    );
  }
  /**
   * Получение полного набора данных терминала
   * @param connectId СonnectId терминала
   * @return Success
   */
  getTerminalFull(connectId: string): __Observable<TradeCardsModelsTerminalTerminalFull> {
    return this.getTerminalFullResponse(connectId).pipe(
      __map(_r => _r.body as TradeCardsModelsTerminalTerminalFull)
    );
  }

  /**
   * Получение архива изображений, необходимых для печати карточки
   * @param id undefined
   * @return Success
   */
  getPrintTaskImagesResponse(id: string): __Observable<__StrictHttpResponse<ArrayBuffer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/terminal/card/${encodeURIComponent(id)}/images`,
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
   * Получение архива изображений, необходимых для печати карточки
   * @param id undefined
   * @return Success
   */
  getPrintTaskImages(id: string): __Observable<ArrayBuffer> {
    return this.getPrintTaskImagesResponse(id).pipe(
      __map(_r => _r.body as ArrayBuffer)
    );
  }

  /**
   * Получение архива изображений, необходимых для печати карточки
   * @param id undefined
   */
  getPrintTaskImages2Response(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/terminal/card/${encodeURIComponent(id)}/images2`,
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
   * Получение архива изображений, необходимых для печати карточки
   * @param id undefined
   */
  getPrintTaskImages2(id: string): __Observable<null> {
    return this.getPrintTaskImages2Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Обновляет статус состояния терминала
   * @param params The `TerminalService.RenewTerminalStatusParams` containing the following parameters:
   *
   * - `connectId`:
   *
   * - `model`:
   */
  renewTerminalStatusResponse(params: TerminalService.RenewTerminalStatusParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/terminal/renew-status/${encodeURIComponent(params.connectId)}`,
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
   * Обновляет статус состояния терминала
   * @param params The `TerminalService.RenewTerminalStatusParams` containing the following parameters:
   *
   * - `connectId`:
   *
   * - `model`:
   */
  renewTerminalStatus(params: TerminalService.RenewTerminalStatusParams): __Observable<null> {
    return this.renewTerminalStatusResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TerminalService {

  /**
   * Parameters for GetLegalEntityTerminals
   */
  export interface GetLegalEntityTerminalsParams {

    /**
     * Id юр. лица
     */
    legalEntityId: string;

    /**
     * Данные
     */
    model?: TradeCardsModelsTerminalGetLegalEntityTerminalsRequest;
  }

  /**
   * Parameters for GetTerminalsForAttach
   */
  export interface GetTerminalsForAttachParams {

    /**
     * Id юр. лица
     */
    legalEntityId: string;

    /**
     * Данные
     */
    model?: TradeCardsModelsTerminalGetTerminalsForAttachRequest;
  }

  /**
   * Parameters for AttachTerminal
   */
  export interface AttachTerminalParams {

    /**
     * Id терминала
     */
    id: string;

    /**
     * Модель запроса
     */
    model?: TradeCardsModelsTerminalAttachTerminalRequest;
  }

  /**
   * Parameters for UpdateTerminal
   */
  export interface UpdateTerminalParams {

    /**
     * Идентификатор терминала
     */
    id: string;

    /**
     * Id юр. лица - собственника терминала
     */
    TerminalOwnerId?: string;

    /**
     * Список идентификаторов уровней каталога, опубликованных для данного терминала
     */
    PublishCatalogLevels?: Array<string>;

    /**
     * Промо-ролик
     */
    PromoVideo?: Blob;
    Location?: string;
    InventoryNumber?: string;

    /**
     * Список идентификаторов уровней каталога, для которых переопределены фоновые изображения в данном терминале
     */
    CustomCatalogLevelImages?: Array<string>;
    ConnectId?: string;
    CartCleanupWarningDelay?: number;
    CartCleanupCountdown?: number;

    /**
     * Способы оплаты - банковской картой
     */
    CanPayBankCard?: boolean;
  }

  /**
   * Parameters for CreateTerminal
   */
  export interface CreateTerminalParams {

    /**
     * Id юр. лица - собственника терминала
     */
    TerminalOwnerId?: string;

    /**
     * Список идентификаторов уровней каталога, опубликованных для данного терминала
     */
    PublishCatalogLevels?: Array<string>;

    /**
     * Промо-ролик
     */
    PromoVideo?: Blob;
    Location?: string;
    InventoryNumber?: string;

    /**
     * Список идентификаторов уровней каталога, для которых переопределены фоновые изображения в данном терминале
     */
    CustomCatalogLevelImages?: Array<string>;
    ConnectId?: string;
    CartCleanupWarningDelay?: number;
    CartCleanupCountdown?: number;

    /**
     * Способы оплаты - банковской картой
     */
    CanPayBankCard?: boolean;
  }

  /**
   * Parameters for RenewTerminalStatus
   */
  export interface RenewTerminalStatusParams {
    connectId: string;
    model?: TradeCardsModelsTerminalRenewTerminalStatusRequest;
  }
}

export { TerminalService }
