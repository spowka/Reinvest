/* tslint:disable */

/**
 * Данные пользователя для запроса на получение списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersCustomerModel {

  /**
   * Дата архивирования
   */
  archiveDate?: string;

  /**
   * Почта пользователя
   */
  email?: string;

  /**
   * Имя
   */
  firstName?: string;

  /**
   * Идентификатор
   */
  id?: string;

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
  registrationDate?: string;
}
