/* tslint:disable */
import { TradeCardsModelsDateFilter } from './trade-cards-models-date-filter';

/**
 * Фильтр таблицы списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesTableFilter {

  /**
   * Дата архивирования
   */
  archiveDate?: TradeCardsModelsDateFilter;

  /**
   * Дата создания
   */
  createDate?: TradeCardsModelsDateFilter;

  /**
   * Почта пользователя
   */
  email?: string;

  /**
   * Имя
   */
  firstName?: string;

  /**
   * Фамилия
   */
  lastName?: string;

  /**
   * Номер телефона
   */
  phoneNumber?: string;
}
