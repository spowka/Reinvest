/* tslint:disable */
import { TradeCardsModelsOrderGetOrdersTableFilter } from './trade-cards-models-order-get-orders-table-filter';
import { TradeCardsModelsOrderGetOrdersTableSort } from './trade-cards-models-order-get-orders-table-sort';
export interface TradeCardsModelsOrderOrdersBriefModelRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsOrderGetOrdersTableFilter;

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
  sortOrder?: TradeCardsModelsOrderGetOrdersTableSort;
}
