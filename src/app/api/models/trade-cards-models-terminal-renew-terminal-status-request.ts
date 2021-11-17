/* tslint:disable */

/**
 * Запрос обновления статуса терминала
 */
export interface TradeCardsModelsTerminalRenewTerminalStatusRequest {

  /**
   * Код ошибки в случае неготовности терминала к печати
   */
  errorCode?: string;

  /**
   * Готовность терминала к печати
   */
  isReady?: boolean;
}
