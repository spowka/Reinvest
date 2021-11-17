/* tslint:disable */
import { TradeCardsModelsOrderTerminalOrderTerminalItemBrief } from './trade-cards-models-order-terminal-order-terminal-item-brief';

/**
 * Информация о заказе в терминале кратко
 */
export interface TradeCardsModelsOrderTerminalOrderTerminalBriefResponse {

  /**
   * Строки заказа
   */
  items?: Array<TradeCardsModelsOrderTerminalOrderTerminalItemBrief>;

  /**
   * Id заказа в терминале
   */
  orderTerminalId?: number;
}
