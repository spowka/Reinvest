/* tslint:disable */

/**
 * Ответ с информацией о таймере на бездействие терминала
 */
export interface TradeCardsModelsCartTimerInfoResponse {

  /**
   * Время для показа предупреждения, что корзина будет очищена (если предупреждение не предусмотрено - null)
   */
  timeForAlert?: string;

  /**
   * Время, когда корзина будет очищена
   */
  timeForCartClearing?: string;
}
