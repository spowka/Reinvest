/* tslint:disable */
import { TradeCardsModelsOrderTerminalOrderTerminalListItemModel } from './trade-cards-models-order-terminal-order-terminal-list-item-model';

/**
 * Заказы в терминалах для списка
 */
export interface TradeCardsModelsOrderTerminalGetOrderTerminalListResponse {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsOrderTerminalOrderTerminalListItemModel>;

  /**
   * Количество старниц
   */
  pageCount?: number;

  /**
   * Индекс старницы
   */
  pageIndex?: number;

  /**
   * Полное количество записей
   */
  total?: number;
}
