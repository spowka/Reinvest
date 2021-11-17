/* tslint:disable */
import { TradeCardsModelsOrderTerminalPrintingOrderTerminalItem } from './trade-cards-models-order-terminal-printing-order-terminal-item';

/**
 * Запрос с результатом печати заказа в терминале
 */
export interface TradeCardsModelsOrderTerminalPrintingOrderTerminalResultRequest {

  /**
   * Результаты печати строк заказа
   */
  items?: Array<TradeCardsModelsOrderTerminalPrintingOrderTerminalItem>;

  /**
   * Id заказа в терминале
   */
  orderTerminalId?: number;
}
