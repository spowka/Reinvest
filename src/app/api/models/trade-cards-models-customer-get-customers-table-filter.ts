/* tslint:disable */
import { TradeCardsModelsDateFilter } from './trade-cards-models-date-filter';

/**
 * Фильтр таблицы списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersTableFilter {

  /**
   * Дата архивирования
   */
  archiveDate?: TradeCardsModelsDateFilter;

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
   * Количество заказов, оформленных пользователем
   */
  orders?: number;

  /**
   * Номер телефона
   */
  phoneNumber?: string;

  /**
   * Дата регистрации
   */
  registrationDate?: TradeCardsModelsDateFilter;
}
