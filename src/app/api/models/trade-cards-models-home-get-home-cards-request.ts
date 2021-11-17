/* tslint:disable */
import { TradeCardsModelsCardGetThemeCardsFilter } from './trade-cards-models-card-get-theme-cards-filter';
import { TradeCardsModelsCardGetThemeCardsSort } from './trade-cards-models-card-get-theme-cards-sort';
export interface TradeCardsModelsHomeGetHomeCardsRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsCardGetThemeCardsFilter;

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
  sortOrder?: TradeCardsModelsCardGetThemeCardsSort;
}
