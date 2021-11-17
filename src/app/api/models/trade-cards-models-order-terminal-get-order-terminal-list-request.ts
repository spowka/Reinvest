/* tslint:disable */
import { TradeCardsModelsOrderTerminalGetOrderTerminalListTableFilter } from './trade-cards-models-order-terminal-get-order-terminal-list-table-filter';
import { TradeCardsModelsOrderTerminalGetOrderTerminalListTableSort } from './trade-cards-models-order-terminal-get-order-terminal-list-table-sort';

/**
 * Модель запроса списка заказов в терминалах
 */
export interface TradeCardsModelsOrderTerminalGetOrderTerminalListRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsOrderTerminalGetOrderTerminalListTableFilter;

  /**
   * Признак запроса активных
   */
  isActive?: boolean;

  /**
   * Индекс старницы (0 - первая страница)
   */
  pageIndex?: number;

  /**
   * Размер старницы
   */
  pageSize?: number;

  /**
   * Сортировка
   */
  sortOrder?: TradeCardsModelsOrderTerminalGetOrderTerminalListTableSort;
}
