/* tslint:disable */
import { TradeCardsModelsEmployeeGetEmployeesTableFilter } from './trade-cards-models-employee-get-employees-table-filter';
import { TradeCardsModelsEmployeeGetEmployeesTableSort } from './trade-cards-models-employee-get-employees-table-sort';

/**
 * Параметры запроса на получение списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsEmployeeGetEmployeesTableFilter;

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
  sortOrder?: TradeCardsModelsEmployeeGetEmployeesTableSort;
}
