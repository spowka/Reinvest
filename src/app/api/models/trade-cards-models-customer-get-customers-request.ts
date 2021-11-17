/* tslint:disable */
import { TradeCardsModelsCustomerGetCustomersTableFilter } from './trade-cards-models-customer-get-customers-table-filter';
import { TradeCardsModelsCustomerGetCustomersTableSort } from './trade-cards-models-customer-get-customers-table-sort';

/**
 * Параметры запроса на получение списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsCustomerGetCustomersTableFilter;

  /**
   * Признак запроса активных пользователей
   */
  isActive?: boolean;

  /**
   * Индекс старницы
   */
  pageIndex?: number;

  /**
   * Размер старницы
   */
  pageSize?: number;

  /**
   * Сортировка
   */
  sortOrder?: TradeCardsModelsCustomerGetCustomersTableSort;
}
