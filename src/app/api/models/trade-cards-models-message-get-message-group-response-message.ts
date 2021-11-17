/* tslint:disable */

/**
 * Редактируемое сообщение
 */
export interface TradeCardsModelsMessageGetMessageGroupResponseMessage {

  /**
   * Идентификатор/Тип сообщения
   */
  id?: 'EmployeeArchiving' | 'EmployeeRestoring' | 'EmployeeDeleting' | 'EmployeeSendingRegData' | 'CustomerArchiving' | 'CustomerRestoring' | 'CustomerDeleting' | 'CustomerSendingRegData' | 'CatalogStructureThemeDeleting' | 'CatalogStructureSeriesDeleting' | 'CatalogStructureSetDeleting' | 'CatalogStructureDeleteImpossibleWhenHaveCards' | 'CardCatalogArchiving' | 'CardCatalogMoving' | 'CardCatalogRestoring' | 'CardCatalogDeleting' | 'TerminalArchiving' | 'TerminalRestoring' | 'TerminalDeleting' | 'TerminalHasOwner' | 'TerminalEmbeddedCountdown' | 'CardCatalogCannotArchiveNoAccess' | 'CardCatalogCannotArchiveActiveOrders' | 'CardCatalogActivateCard' | 'CardCatalogDeactivateCard' | 'PrintingStart' | 'PrintingAlreadyStarted' | 'PrintingStopPrinter' | 'PrintingStopAllPrinters' | 'PrintingReject' | 'PrintingCancel' | 'PrintingComplete' | 'PickupPointArchiving' | 'PickupPointRestoring' | 'PickupPointSendingRegData' | 'CartGuestContactsNotice' | 'CartCustomerContactsNotice' | 'CartOrderPickupNotice' | 'CartOrderDeliveryNotice' | 'OrderReturnFromPickPoint' | 'PickPointArmAwaitingDelivery' | 'CartAddCard' | 'CartCountdown' | 'CartCountdownEnd' | 'OrderCountdown' | 'OrderCountdownEnd' | 'OrderPayment' | 'OrderGuestCreateAccount' | 'OrderGuestCreateAccountErrorDuplicateEmail' | 'CatalogAddCardSoldoutError' | 'PrintingForceShutdownMessage' | 'PrintingForceShutdownDelayedMessage' | 'LegalEntitiesArchiving' | 'LegalEntitiesRestoring' | 'LegalEntitiesSendingRegData' | 'LegalEntitiesTerminalDetach' | 'TerminalMessageСonsumablesLack' | 'TerminalMessageBankCard' | 'TerminalMessageMobilePayment' | 'TerminalMessageСheckQrCode' | 'TerminalMessagePrintingError' | 'TerminalMessagePrintingErrorStart' | 'TerminalMessageFullRefund';

  /**
   * Текст сообщения
   */
  text?: string;

  /**
   * Заголовок сообщения
   */
  title?: string;
}
