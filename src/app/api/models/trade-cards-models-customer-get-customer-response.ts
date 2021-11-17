/* tslint:disable */

/**
 * Ответ на запрос получения данных пользователя
 */
export interface TradeCardsModelsCustomerGetCustomerResponse {

  /**
   * Дата архивирования
   */
  archiveDate?: string;
  deliveryApartment?: string;
  deliveryBuilding?: string;
  deliveryCity?: string;
  deliveryHouse?: string;
  deliveryPostIndex?: string;
  deliveryRegion?: string;
  deliveryStreet?: string;

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
   * Признак активности пользователя
   */
  isActive?: boolean;

  /**
   * Почта подтверждена
   */
  isEmailConfirmed?: boolean;

  /**
   * Фамилия
   */
  lastName?: string;

  /**
   * Пароль
   */
  password?: string;

  /**
   * Номер телефона
   */
  phoneNumber?: string;

  /**
   * Дата регистрации
   */
  registrationDate?: string;
}
