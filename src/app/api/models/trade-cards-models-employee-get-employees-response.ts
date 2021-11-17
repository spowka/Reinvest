/* tslint:disable */
import { TradeCardsModelsEmployeeGetEmployeesEmployeeModel } from './trade-cards-models-employee-get-employees-employee-model';

/**
 * Ответ на запрос получения списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesResponse {

  /**
   * Сотрудники
   */
  employees?: Array<TradeCardsModelsEmployeeGetEmployeesEmployeeModel>;

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
