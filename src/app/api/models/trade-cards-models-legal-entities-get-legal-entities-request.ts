/* tslint:disable */
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter } from './trade-cards-models-legal-entities-get-legal-entities-table-filter';
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesTableSort } from './trade-cards-models-legal-entities-get-legal-entities-table-sort';
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter;

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
  sortOrder?: TradeCardsModelsLegalEntitiesGetLegalEntitiesTableSort;
}
