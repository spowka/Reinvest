/* tslint:disable */
import { TradeCardsModelsCardGetCardsTableFilter } from './trade-cards-models-card-get-cards-table-filter';
import { TradeCardsModelsCardGetCardsTableSort } from './trade-cards-models-card-get-cards-table-sort';

/**
 * Запрос на получение списка карт
 */
export interface TradeCardsModelsCardGetCardsRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsCardGetCardsTableFilter;

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
  sortOrder?: TradeCardsModelsCardGetCardsTableSort;
}
