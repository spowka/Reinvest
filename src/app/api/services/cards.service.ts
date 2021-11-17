/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsCardGetCardsResponse } from '../models/trade-cards-models-card-get-cards-response';
import { TradeCardsModelsCardGetCardsRequest } from '../models/trade-cards-models-card-get-cards-request';
import { TradeCardsModelsCardGetCardFullModel } from '../models/trade-cards-models-card-get-card-full-model';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsHomeGetCardDetailResponse } from '../models/trade-cards-models-home-get-card-detail-response';
import { TradeCardsModelsCardCardStatusHistoryRecord } from '../models/trade-cards-models-card-card-status-history-record';
@Injectable({
  providedIn: 'root',
})
class CardsService extends __BaseService {
  static readonly getCardsPath = '/api/cards/query';
  static readonly getCardPath = '/api/cards/{id}';
  static readonly updateCardPath = '/api/cards/{id}';
  static readonly deleteCardPath = '/api/cards/{id}';
  static readonly addCardPath = '/api/cards';
  static readonly archiveCardPath = '/api/cards/{id}/archive';
  static readonly restoreCardPath = '/api/cards/{id}/restore';
  static readonly setCardLevelPath = '/api/cards/{id}/set_level/{catalogLevelId}';
  static readonly moveCardPath = '/api/cards/{id}/move_after/{id2}';
  static readonly getCardDetailPath = '/api/cards/preview/{id}';
  static readonly getStatusHistoryPath = '/api/cards/{id}/status-history';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение списка карточек для админки
   * @param model undefined
   * @return Success
   */
  getCardsResponse(model?: TradeCardsModelsCardGetCardsRequest): __Observable<__StrictHttpResponse<TradeCardsModelsCardGetCardsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cards/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCardGetCardsResponse>;
      })
    );
  }
  /**
   * Получение списка карточек для админки
   * @param model undefined
   * @return Success
   */
  getCards(model?: TradeCardsModelsCardGetCardsRequest): __Observable<TradeCardsModelsCardGetCardsResponse> {
    return this.getCardsResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsCardGetCardsResponse)
    );
  }

  /**
   * Получение карточки для редактирования в админке
   * @param id undefined
   * @return Success
   */
  getCardResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsCardGetCardFullModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/cards/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsCardGetCardFullModel>;
      })
    );
  }
  /**
   * Получение карточки для редактирования в админке
   * @param id undefined
   * @return Success
   */
  getCard(id: string): __Observable<TradeCardsModelsCardGetCardFullModel> {
    return this.getCardResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsCardGetCardFullModel)
    );
  }

  /**
   * Обновление карточки
   * @param params The `CardsService.UpdateCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `Updated`: Время последнего изменения
   *
   * - `Unlimited`: Неограниченный тираж
   *
   * - `Title`: Наименование
   *
   * - `TerminalPrintFrontLamination`: Исходник для печати на терминале. Лицевая сторона. Ламинация
   *
   * - `TerminalPrintFrontImage`: Исходник для печати на терминале. Лицевая сторона. Изображение
   *
   * - `TerminalPrintFrontHolo`: Исходник для печати на терминале. Лицевая сторона. Голограмма
   *
   * - `TerminalPrintBackLamination`: Исходник для печати на терминале. Обратная сторона. Ламинация
   *
   * - `TerminalPrintBackImage`: Исходник для печати на терминале. Обратная сторона. Изображение
   *
   * - `TerminalPrintBackHolo`: Исходник для печати на терминале. Обратная сторона. Голограмма
   *
   * - `TerminalPreviewImage`: Превью для терминала
   *
   * - `TerminalFrontImage`: Лицевая сторона для терминала
   *
   * - `TerminalDescription`: Описание для терминала
   *
   * - `TerminalBackImage`: Обратная сторона для терминала
   *
   * - `Status`: Статус карточки
   *
   * - `PrintFilesMode`: Режим печати карты на терминале
   *
   * - `PrintCount`: Тираж
   *
   * - `PriceModel`: Модель формирования цены
   *
   * - `Price`: Цена
   *
   * - `PreviewImage`: Превью для каталога
   *
   * - `FrontImage`: Лицевая сторона
   *
   * - `Description`: Описание для сайта
   *
   * - `Comment`: Комментарий к смене статуса
   *
   * - `CatalogLevelId`: Идентификатор уровня каталога, к которому привязана карточка
   *
   * - `BackImage`: Обратная сторона
   *
   * @return Success
   */
  updateCardResponse(params: CardsService.UpdateCardParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.Updated != null) { __formData.append('Updated', params.Updated as string | Blob);}
    if (params.Unlimited != null) { __formData.append('Unlimited', JSON.stringify(params.Unlimited));}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.TerminalPrintFrontLamination != null) { __formData.append('TerminalPrintFrontLamination', params.TerminalPrintFrontLamination as string | Blob);}
    if (params.TerminalPrintFrontImage != null) { __formData.append('TerminalPrintFrontImage', params.TerminalPrintFrontImage as string | Blob);}
    if (params.TerminalPrintFrontHolo != null) { __formData.append('TerminalPrintFrontHolo', params.TerminalPrintFrontHolo as string | Blob);}
    if (params.TerminalPrintBackLamination != null) { __formData.append('TerminalPrintBackLamination', params.TerminalPrintBackLamination as string | Blob);}
    if (params.TerminalPrintBackImage != null) { __formData.append('TerminalPrintBackImage', params.TerminalPrintBackImage as string | Blob);}
    if (params.TerminalPrintBackHolo != null) { __formData.append('TerminalPrintBackHolo', params.TerminalPrintBackHolo as string | Blob);}
    if (params.TerminalPreviewImage != null) { __formData.append('TerminalPreviewImage', params.TerminalPreviewImage as string | Blob);}
    if (params.TerminalFrontImage != null) { __formData.append('TerminalFrontImage', params.TerminalFrontImage as string | Blob);}
    if (params.TerminalDescription != null) { __formData.append('TerminalDescription', params.TerminalDescription as string | Blob);}
    if (params.TerminalBackImage != null) { __formData.append('TerminalBackImage', params.TerminalBackImage as string | Blob);}
    if (params.Status != null) { __formData.append('Status', params.Status as string | Blob);}
    if (params.PrintFilesMode != null) { __formData.append('PrintFilesMode', params.PrintFilesMode as string | Blob);}
    if (params.PrintCount != null) { __formData.append('PrintCount', JSON.stringify(params.PrintCount));}
    if (params.PriceModel != null) { __formData.append('PriceModel', params.PriceModel as string | Blob);}
    if (params.Price != null) { __formData.append('Price', JSON.stringify(params.Price));}
    if (params.PreviewImage != null) { __formData.append('PreviewImage', params.PreviewImage as string | Blob);}
    if (params.FrontImage != null) { __formData.append('FrontImage', params.FrontImage as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.Comment != null) { __formData.append('Comment', params.Comment as string | Blob);}
    if (params.CatalogLevelId != null) { __formData.append('CatalogLevelId', params.CatalogLevelId as string | Blob);}
    if (params.BackImage != null) { __formData.append('BackImage', params.BackImage as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/cards/${encodeURIComponent(params.id)}`,
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
   * Обновление карточки
   * @param params The `CardsService.UpdateCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `Updated`: Время последнего изменения
   *
   * - `Unlimited`: Неограниченный тираж
   *
   * - `Title`: Наименование
   *
   * - `TerminalPrintFrontLamination`: Исходник для печати на терминале. Лицевая сторона. Ламинация
   *
   * - `TerminalPrintFrontImage`: Исходник для печати на терминале. Лицевая сторона. Изображение
   *
   * - `TerminalPrintFrontHolo`: Исходник для печати на терминале. Лицевая сторона. Голограмма
   *
   * - `TerminalPrintBackLamination`: Исходник для печати на терминале. Обратная сторона. Ламинация
   *
   * - `TerminalPrintBackImage`: Исходник для печати на терминале. Обратная сторона. Изображение
   *
   * - `TerminalPrintBackHolo`: Исходник для печати на терминале. Обратная сторона. Голограмма
   *
   * - `TerminalPreviewImage`: Превью для терминала
   *
   * - `TerminalFrontImage`: Лицевая сторона для терминала
   *
   * - `TerminalDescription`: Описание для терминала
   *
   * - `TerminalBackImage`: Обратная сторона для терминала
   *
   * - `Status`: Статус карточки
   *
   * - `PrintFilesMode`: Режим печати карты на терминале
   *
   * - `PrintCount`: Тираж
   *
   * - `PriceModel`: Модель формирования цены
   *
   * - `Price`: Цена
   *
   * - `PreviewImage`: Превью для каталога
   *
   * - `FrontImage`: Лицевая сторона
   *
   * - `Description`: Описание для сайта
   *
   * - `Comment`: Комментарий к смене статуса
   *
   * - `CatalogLevelId`: Идентификатор уровня каталога, к которому привязана карточка
   *
   * - `BackImage`: Обратная сторона
   *
   * @return Success
   */
  updateCard(params: CardsService.UpdateCardParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateCardResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Удаление карточки
   * @param id undefined
   * @return Success
   */
  deleteCardResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/cards/${encodeURIComponent(id)}`,
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
   * Удаление карточки
   * @param id undefined
   * @return Success
   */
  deleteCard(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.deleteCardResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Создание карточки
   * @param params The `CardsService.AddCardParams` containing the following parameters:
   *
   * - `Unlimited`: Неограниченный тираж
   *
   * - `Title`: Наименование
   *
   * - `TerminalPrintFrontLamination`: Исходник для печати на терминале. Лицевая сторона. Ламинация
   *
   * - `TerminalPrintFrontImage`: Исходник для печати на терминале. Лицевая сторона. Изображение
   *
   * - `TerminalPrintFrontHolo`: Исходник для печати на терминале. Лицевая сторона. Голограмма
   *
   * - `TerminalPrintBackLamination`: Исходник для печати на терминале. Обратная сторона. Ламинация
   *
   * - `TerminalPrintBackImage`: Исходник для печати на терминале. Обратная сторона. Изображение
   *
   * - `TerminalPrintBackHolo`: Исходник для печати на терминале. Обратная сторона. Голограмма
   *
   * - `TerminalPreviewImage`: Превью для терминала
   *
   * - `TerminalFrontImage`: Лицевая сторона для терминала
   *
   * - `TerminalDescription`: Описание для терминала
   *
   * - `TerminalBackImage`: Обратная сторона для терминала
   *
   * - `PrintFilesMode`: Режим печати карты на терминале
   *
   * - `PrintCount`: Тираж
   *
   * - `PriceModel`: Модель формирования цены
   *
   * - `Price`: Цена
   *
   * - `PreviewImage`: Превью для каталога
   *
   * - `FrontImage`: Лицевая сторона
   *
   * - `Description`: Описание для сайта
   *
   * - `CatalogLevelId`: Идентификатор уровня каталога, к которому привязана карточка
   *
   * - `BackImage`: Обратная сторона
   *
   * @return Success
   */
  addCardResponse(params: CardsService.AddCardParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.Unlimited != null) { __formData.append('Unlimited', JSON.stringify(params.Unlimited));}
    if (params.Title != null) { __formData.append('Title', params.Title as string | Blob);}
    if (params.TerminalPrintFrontLamination != null) { __formData.append('TerminalPrintFrontLamination', params.TerminalPrintFrontLamination as string | Blob);}
    if (params.TerminalPrintFrontImage != null) { __formData.append('TerminalPrintFrontImage', params.TerminalPrintFrontImage as string | Blob);}
    if (params.TerminalPrintFrontHolo != null) { __formData.append('TerminalPrintFrontHolo', params.TerminalPrintFrontHolo as string | Blob);}
    if (params.TerminalPrintBackLamination != null) { __formData.append('TerminalPrintBackLamination', params.TerminalPrintBackLamination as string | Blob);}
    if (params.TerminalPrintBackImage != null) { __formData.append('TerminalPrintBackImage', params.TerminalPrintBackImage as string | Blob);}
    if (params.TerminalPrintBackHolo != null) { __formData.append('TerminalPrintBackHolo', params.TerminalPrintBackHolo as string | Blob);}
    if (params.TerminalPreviewImage != null) { __formData.append('TerminalPreviewImage', params.TerminalPreviewImage as string | Blob);}
    if (params.TerminalFrontImage != null) { __formData.append('TerminalFrontImage', params.TerminalFrontImage as string | Blob);}
    if (params.TerminalDescription != null) { __formData.append('TerminalDescription', params.TerminalDescription as string | Blob);}
    if (params.TerminalBackImage != null) { __formData.append('TerminalBackImage', params.TerminalBackImage as string | Blob);}
    if (params.PrintFilesMode != null) { __formData.append('PrintFilesMode', params.PrintFilesMode as string | Blob);}
    if (params.PrintCount != null) { __formData.append('PrintCount', JSON.stringify(params.PrintCount));}
    if (params.PriceModel != null) { __formData.append('PriceModel', params.PriceModel as string | Blob);}
    if (params.Price != null) { __formData.append('Price', JSON.stringify(params.Price));}
    if (params.PreviewImage != null) { __formData.append('PreviewImage', params.PreviewImage as string | Blob);}
    if (params.FrontImage != null) { __formData.append('FrontImage', params.FrontImage as string | Blob);}
    if (params.Description != null) { __formData.append('Description', params.Description as string | Blob);}
    if (params.CatalogLevelId != null) { __formData.append('CatalogLevelId', params.CatalogLevelId as string | Blob);}
    if (params.BackImage != null) { __formData.append('BackImage', params.BackImage as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cards`,
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
   * Создание карточки
   * @param params The `CardsService.AddCardParams` containing the following parameters:
   *
   * - `Unlimited`: Неограниченный тираж
   *
   * - `Title`: Наименование
   *
   * - `TerminalPrintFrontLamination`: Исходник для печати на терминале. Лицевая сторона. Ламинация
   *
   * - `TerminalPrintFrontImage`: Исходник для печати на терминале. Лицевая сторона. Изображение
   *
   * - `TerminalPrintFrontHolo`: Исходник для печати на терминале. Лицевая сторона. Голограмма
   *
   * - `TerminalPrintBackLamination`: Исходник для печати на терминале. Обратная сторона. Ламинация
   *
   * - `TerminalPrintBackImage`: Исходник для печати на терминале. Обратная сторона. Изображение
   *
   * - `TerminalPrintBackHolo`: Исходник для печати на терминале. Обратная сторона. Голограмма
   *
   * - `TerminalPreviewImage`: Превью для терминала
   *
   * - `TerminalFrontImage`: Лицевая сторона для терминала
   *
   * - `TerminalDescription`: Описание для терминала
   *
   * - `TerminalBackImage`: Обратная сторона для терминала
   *
   * - `PrintFilesMode`: Режим печати карты на терминале
   *
   * - `PrintCount`: Тираж
   *
   * - `PriceModel`: Модель формирования цены
   *
   * - `Price`: Цена
   *
   * - `PreviewImage`: Превью для каталога
   *
   * - `FrontImage`: Лицевая сторона
   *
   * - `Description`: Описание для сайта
   *
   * - `CatalogLevelId`: Идентификатор уровня каталога, к которому привязана карточка
   *
   * - `BackImage`: Обратная сторона
   *
   * @return Success
   */
  addCard(params: CardsService.AddCardParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.addCardResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправка карточки в архив
   * @param id undefined
   * @return Success
   */
  archiveCardResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cards/${encodeURIComponent(id)}/archive`,
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
   * Отправка карточки в архив
   * @param id undefined
   * @return Success
   */
  archiveCard(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.archiveCardResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Восстановление карточки из архива
   * @param id undefined
   * @return Success
   */
  restoreCardResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cards/${encodeURIComponent(id)}/restore`,
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
   * Восстановление карточки из архива
   * @param id undefined
   * @return Success
   */
  restoreCard(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.restoreCardResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Изменение привязки к уровню
   * @param params The `CardsService.SetCardLevelParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `catalogLevelId`:
   *
   * @return Success
   */
  setCardLevelResponse(params: CardsService.SetCardLevelParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cards/${encodeURIComponent(params.id)}/set_level/${encodeURIComponent(params.catalogLevelId)}`,
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
   * Изменение привязки к уровню
   * @param params The `CardsService.SetCardLevelParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `catalogLevelId`:
   *
   * @return Success
   */
  setCardLevel(params: CardsService.SetCardLevelParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.setCardLevelResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Изменение позиции карточки
   * @param params The `CardsService.MoveCardParams` containing the following parameters:
   *
   * - `id2`:
   *
   * - `id`:
   *
   * @return Success
   */
  moveCardResponse(params: CardsService.MoveCardParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/cards/${encodeURIComponent(params.id)}/move_after/${encodeURIComponent(params.id2)}`,
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
   * Изменение позиции карточки
   * @param params The `CardsService.MoveCardParams` containing the following parameters:
   *
   * - `id2`:
   *
   * - `id`:
   *
   * @return Success
   */
  moveCard(params: CardsService.MoveCardParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.moveCardResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Получение детальных данных карточки для превью в админке
   * Выводятся даже неопубликованные карточки
   * @param id undefined
   * @return Success
   */
  getCardDetailResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsHomeGetCardDetailResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/cards/preview/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsHomeGetCardDetailResponse>;
      })
    );
  }
  /**
   * Получение детальных данных карточки для превью в админке
   * Выводятся даже неопубликованные карточки
   * @param id undefined
   * @return Success
   */
  getCardDetail(id: string): __Observable<TradeCardsModelsHomeGetCardDetailResponse> {
    return this.getCardDetailResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsHomeGetCardDetailResponse)
    );
  }

  /**
   * Получение истории статусов
   * @param id undefined
   * @return Success
   */
  getStatusHistoryResponse(id: string): __Observable<__StrictHttpResponse<Array<TradeCardsModelsCardCardStatusHistoryRecord>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/cards/${encodeURIComponent(id)}/status-history`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TradeCardsModelsCardCardStatusHistoryRecord>>;
      })
    );
  }
  /**
   * Получение истории статусов
   * @param id undefined
   * @return Success
   */
  getStatusHistory(id: string): __Observable<Array<TradeCardsModelsCardCardStatusHistoryRecord>> {
    return this.getStatusHistoryResponse(id).pipe(
      __map(_r => _r.body as Array<TradeCardsModelsCardCardStatusHistoryRecord>)
    );
  }
}

module CardsService {

  /**
   * Parameters for UpdateCard
   */
  export interface UpdateCardParams {
    id: string;

    /**
     * Время последнего изменения
     */
    Updated?: string;

    /**
     * Неограниченный тираж
     */
    Unlimited?: boolean;

    /**
     * Наименование
     */
    Title?: string;

    /**
     * Исходник для печати на терминале. Лицевая сторона. Ламинация
     */
    TerminalPrintFrontLamination?: Blob;

    /**
     * Исходник для печати на терминале. Лицевая сторона. Изображение
     */
    TerminalPrintFrontImage?: Blob;

    /**
     * Исходник для печати на терминале. Лицевая сторона. Голограмма
     */
    TerminalPrintFrontHolo?: Blob;

    /**
     * Исходник для печати на терминале. Обратная сторона. Ламинация
     */
    TerminalPrintBackLamination?: Blob;

    /**
     * Исходник для печати на терминале. Обратная сторона. Изображение
     */
    TerminalPrintBackImage?: Blob;

    /**
     * Исходник для печати на терминале. Обратная сторона. Голограмма
     */
    TerminalPrintBackHolo?: Blob;

    /**
     * Превью для терминала
     */
    TerminalPreviewImage?: Blob;

    /**
     * Лицевая сторона для терминала
     */
    TerminalFrontImage?: Blob;

    /**
     * Описание для терминала
     */
    TerminalDescription?: string;

    /**
     * Обратная сторона для терминала
     */
    TerminalBackImage?: Blob;

    /**
     * Статус карточки
     */
    Status?: 'New' | 'Check' | 'Modification' | 'Active' | 'NotActive' | 'SoldOut';

    /**
     * Режим печати карты на терминале
     */
    PrintFilesMode?: 'None' | 'ImageLamination' | 'ImageHoloLamination';

    /**
     * Тираж
     */
    PrintCount?: number;

    /**
     * Модель формирования цены
     */
    PriceModel?: 'Fixed' | 'Proportional' | 'Exponential';

    /**
     * Цена
     */
    Price?: number;

    /**
     * Превью для каталога
     */
    PreviewImage?: Blob;

    /**
     * Лицевая сторона
     */
    FrontImage?: Blob;

    /**
     * Описание для сайта
     */
    Description?: string;

    /**
     * Комментарий к смене статуса
     */
    Comment?: string;

    /**
     * Идентификатор уровня каталога, к которому привязана карточка
     */
    CatalogLevelId?: string;

    /**
     * Обратная сторона
     */
    BackImage?: Blob;
  }

  /**
   * Parameters for AddCard
   */
  export interface AddCardParams {

    /**
     * Неограниченный тираж
     */
    Unlimited?: boolean;

    /**
     * Наименование
     */
    Title?: string;

    /**
     * Исходник для печати на терминале. Лицевая сторона. Ламинация
     */
    TerminalPrintFrontLamination?: Blob;

    /**
     * Исходник для печати на терминале. Лицевая сторона. Изображение
     */
    TerminalPrintFrontImage?: Blob;

    /**
     * Исходник для печати на терминале. Лицевая сторона. Голограмма
     */
    TerminalPrintFrontHolo?: Blob;

    /**
     * Исходник для печати на терминале. Обратная сторона. Ламинация
     */
    TerminalPrintBackLamination?: Blob;

    /**
     * Исходник для печати на терминале. Обратная сторона. Изображение
     */
    TerminalPrintBackImage?: Blob;

    /**
     * Исходник для печати на терминале. Обратная сторона. Голограмма
     */
    TerminalPrintBackHolo?: Blob;

    /**
     * Превью для терминала
     */
    TerminalPreviewImage?: Blob;

    /**
     * Лицевая сторона для терминала
     */
    TerminalFrontImage?: Blob;

    /**
     * Описание для терминала
     */
    TerminalDescription?: string;

    /**
     * Обратная сторона для терминала
     */
    TerminalBackImage?: Blob;

    /**
     * Режим печати карты на терминале
     */
    PrintFilesMode?: 'None' | 'ImageLamination' | 'ImageHoloLamination';

    /**
     * Тираж
     */
    PrintCount?: number;

    /**
     * Модель формирования цены
     */
    PriceModel?: 'Fixed' | 'Proportional' | 'Exponential';

    /**
     * Цена
     */
    Price?: number;

    /**
     * Превью для каталога
     */
    PreviewImage?: Blob;

    /**
     * Лицевая сторона
     */
    FrontImage?: Blob;

    /**
     * Описание для сайта
     */
    Description?: string;

    /**
     * Идентификатор уровня каталога, к которому привязана карточка
     */
    CatalogLevelId?: string;

    /**
     * Обратная сторона
     */
    BackImage?: Blob;
  }

  /**
   * Parameters for SetCardLevel
   */
  export interface SetCardLevelParams {
    id: string;
    catalogLevelId: string;
  }

  /**
   * Parameters for MoveCard
   */
  export interface MoveCardParams {
    id2: string;
    id: string;
  }
}

export { CardsService }
