/* tslint:disable */
import { TradeCardsModelsPPMOrderGetOrdersTableFilter } from './trade-cards-models-ppmorder-get-orders-table-filter';
import { TradeCardsModelsPPMOrderGetOrdersTableSort } from './trade-cards-models-ppmorder-get-orders-table-sort';

/**
 * Запрос-обертка на получение списка заказов
 */
export interface TradeCardsModelsPPMOrderGetOrdersRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsPPMOrderGetOrdersTableFilter;

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
  sortOrder?: TradeCardsModelsPPMOrderGetOrdersTableSort;
}
