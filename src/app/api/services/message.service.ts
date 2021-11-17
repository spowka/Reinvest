/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsMessageGetMessageGroupTreeResponse } from '../models/trade-cards-models-message-get-message-group-tree-response';
import { TradeCardsModelsMessageGetMessageGroupResponse } from '../models/trade-cards-models-message-get-message-group-response';
import { TradeCardsModelsMessageUpdateMessageGroupRequest } from '../models/trade-cards-models-message-update-message-group-request';
@Injectable({
  providedIn: 'root',
})
class MessageService extends __BaseService {
  static readonly getMessageGroupTreePath = '/api/message';
  static readonly getMessageGroupPath = '/api/message/{id}/group';
  static readonly getMessagePath = '/api/message/{id}';
  static readonly updateMessageGroupPath = '/api/message/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение дерева групп сообщений
   * @return Success
   */
  getMessageGroupTreeResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsMessageGetMessageGroupTreeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/message`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsMessageGetMessageGroupTreeResponse>;
      })
    );
  }
  /**
   * Получение дерева групп сообщений
   * @return Success
   */
  getMessageGroupTree(): __Observable<TradeCardsModelsMessageGetMessageGroupTreeResponse> {
    return this.getMessageGroupTreeResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsMessageGetMessageGroupTreeResponse)
    );
  }

  /**
   * Получение группы сообщений
   * @param id undefined
   * @return Success
   */
  getMessageGroupResponse(id: 'Catalog' | 'CatalogStructure' | 'CardCatalog' | 'Directories' | 'Employees' | 'Customers' | 'Terminals' | 'TerminalEmbedded' | 'Printing' | 'Cart' | 'Orders' | 'PickupOwnerARM' | 'CartAndOrders' | 'LegalEntities'): __Observable<__StrictHttpResponse<TradeCardsModelsMessageGetMessageGroupResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/message/${encodeURIComponent(id)}/group`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsMessageGetMessageGroupResponse>;
      })
    );
  }
  /**
   * Получение группы сообщений
   * @param id undefined
   * @return Success
   */
  getMessageGroup(id: 'Catalog' | 'CatalogStructure' | 'CardCatalog' | 'Directories' | 'Employees' | 'Customers' | 'Terminals' | 'TerminalEmbedded' | 'Printing' | 'Cart' | 'Orders' | 'PickupOwnerARM' | 'CartAndOrders' | 'LegalEntities'): __Observable<TradeCardsModelsMessageGetMessageGroupResponse> {
    return this.getMessageGroupResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsMessageGetMessageGroupResponse)
    );
  }

  /**
   * Получение текста сообщения
   * @param id undefined
   * @return Success
   */
  getMessageResponse(id: 'EmployeeArchiving' | 'EmployeeRestoring' | 'EmployeeDeleting' | 'EmployeeSendingRegData' | 'CustomerArchiving' | 'CustomerRestoring' | 'CustomerDeleting' | 'CustomerSendingRegData' | 'CatalogStructureThemeDeleting' | 'CatalogStructureSeriesDeleting' | 'CatalogStructureSetDeleting' | 'CatalogStructureDeleteImpossibleWhenHaveCards' | 'CardCatalogArchiving' | 'CardCatalogMoving' | 'CardCatalogRestoring' | 'CardCatalogDeleting' | 'TerminalArchiving' | 'TerminalRestoring' | 'TerminalDeleting' | 'TerminalHasOwner' | 'TerminalEmbeddedCountdown' | 'CardCatalogCannotArchiveNoAccess' | 'CardCatalogCannotArchiveActiveOrders' | 'CardCatalogActivateCard' | 'CardCatalogDeactivateCard' | 'PrintingStart' | 'PrintingAlreadyStarted' | 'PrintingStopPrinter' | 'PrintingStopAllPrinters' | 'PrintingReject' | 'PrintingCancel' | 'PrintingComplete' | 'PickupPointArchiving' | 'PickupPointRestoring' | 'PickupPointSendingRegData' | 'CartGuestContactsNotice' | 'CartCustomerContactsNotice' | 'CartOrderPickupNotice' | 'CartOrderDeliveryNotice' | 'OrderReturnFromPickPoint' | 'PickPointArmAwaitingDelivery' | 'CartAddCard' | 'CartCountdown' | 'CartCountdownEnd' | 'OrderCountdown' | 'OrderCountdownEnd' | 'OrderPayment' | 'OrderGuestCreateAccount' | 'OrderGuestCreateAccountErrorDuplicateEmail' | 'CatalogAddCardSoldoutError' | 'PrintingForceShutdownMessage' | 'PrintingForceShutdownDelayedMessage' | 'LegalEntitiesArchiving' | 'LegalEntitiesRestoring' | 'LegalEntitiesSendingRegData' | 'LegalEntitiesTerminalDetach' | 'TerminalMessageСonsumablesLack' | 'TerminalMessageBankCard' | 'TerminalMessageMobilePayment' | 'TerminalMessageСheckQrCode' | 'TerminalMessagePrintingError' | 'TerminalMessagePrintingErrorStart' | 'TerminalMessageFullRefund'): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/message/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Получение текста сообщения
   * @param id undefined
   * @return Success
   */
  getMessage(id: 'EmployeeArchiving' | 'EmployeeRestoring' | 'EmployeeDeleting' | 'EmployeeSendingRegData' | 'CustomerArchiving' | 'CustomerRestoring' | 'CustomerDeleting' | 'CustomerSendingRegData' | 'CatalogStructureThemeDeleting' | 'CatalogStructureSeriesDeleting' | 'CatalogStructureSetDeleting' | 'CatalogStructureDeleteImpossibleWhenHaveCards' | 'CardCatalogArchiving' | 'CardCatalogMoving' | 'CardCatalogRestoring' | 'CardCatalogDeleting' | 'TerminalArchiving' | 'TerminalRestoring' | 'TerminalDeleting' | 'TerminalHasOwner' | 'TerminalEmbeddedCountdown' | 'CardCatalogCannotArchiveNoAccess' | 'CardCatalogCannotArchiveActiveOrders' | 'CardCatalogActivateCard' | 'CardCatalogDeactivateCard' | 'PrintingStart' | 'PrintingAlreadyStarted' | 'PrintingStopPrinter' | 'PrintingStopAllPrinters' | 'PrintingReject' | 'PrintingCancel' | 'PrintingComplete' | 'PickupPointArchiving' | 'PickupPointRestoring' | 'PickupPointSendingRegData' | 'CartGuestContactsNotice' | 'CartCustomerContactsNotice' | 'CartOrderPickupNotice' | 'CartOrderDeliveryNotice' | 'OrderReturnFromPickPoint' | 'PickPointArmAwaitingDelivery' | 'CartAddCard' | 'CartCountdown' | 'CartCountdownEnd' | 'OrderCountdown' | 'OrderCountdownEnd' | 'OrderPayment' | 'OrderGuestCreateAccount' | 'OrderGuestCreateAccountErrorDuplicateEmail' | 'CatalogAddCardSoldoutError' | 'PrintingForceShutdownMessage' | 'PrintingForceShutdownDelayedMessage' | 'LegalEntitiesArchiving' | 'LegalEntitiesRestoring' | 'LegalEntitiesSendingRegData' | 'LegalEntitiesTerminalDetach' | 'TerminalMessageСonsumablesLack' | 'TerminalMessageBankCard' | 'TerminalMessageMobilePayment' | 'TerminalMessageСheckQrCode' | 'TerminalMessagePrintingError' | 'TerminalMessagePrintingErrorStart' | 'TerminalMessageFullRefund'): __Observable<string> {
    return this.getMessageResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Обновление группы сообщений
   * @param params The `MessageService.UpdateMessageGroupParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `model`:
   *
   * @return Success
   */
  updateMessageGroupResponse(params: MessageService.UpdateMessageGroupParams): __Observable<__StrictHttpResponse<TradeCardsModelsMessageGetMessageGroupResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/message/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsMessageGetMessageGroupResponse>;
      })
    );
  }
  /**
   * Обновление группы сообщений
   * @param params The `MessageService.UpdateMessageGroupParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `model`:
   *
   * @return Success
   */
  updateMessageGroup(params: MessageService.UpdateMessageGroupParams): __Observable<TradeCardsModelsMessageGetMessageGroupResponse> {
    return this.updateMessageGroupResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsMessageGetMessageGroupResponse)
    );
  }
}

module MessageService {

  /**
   * Parameters for UpdateMessageGroup
   */
  export interface UpdateMessageGroupParams {
    id: 'Catalog' | 'CatalogStructure' | 'CardCatalog' | 'Directories' | 'Employees' | 'Customers' | 'Terminals' | 'TerminalEmbedded' | 'Printing' | 'Cart' | 'Orders' | 'PickupOwnerARM' | 'CartAndOrders' | 'LegalEntities';
    model?: TradeCardsModelsMessageUpdateMessageGroupRequest;
  }
}

export { MessageService }
