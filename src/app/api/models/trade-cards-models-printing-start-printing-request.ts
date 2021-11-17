/* tslint:disable */
import { TradeCardsModelsPrintingStartPrintingRequestOrder } from './trade-cards-models-printing-start-printing-request-order';

/**
 * Запрос на запуск печати
 */
export interface TradeCardsModelsPrintingStartPrintingRequest {

  /**
   * Список заказов для печати
   */
  orders?: Array<TradeCardsModelsPrintingStartPrintingRequestOrder>;

  /**
   * Выбранные принтеры для печати
   */
  printers?: Array<string>;
}
