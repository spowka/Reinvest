/* tslint:disable */

/**
 * Запрос на перевод одного или нескольких заказов в статус "Ожидает выдачи"
 */
export interface TradeCardsModelsPPMOrderSetAwaitingDeliveryRequest {
  comment?: string;
  orderIds?: Array<number>;
}
