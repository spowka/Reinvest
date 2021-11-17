/* tslint:disable */

/**
 * Параметры запроса на регистрацию покупателя
 */
export interface TradeCardsModelsAccountRegisterCustomerRequest {

  /**
   * Email
   */
  email: string;

  /**
   * Имя
   */
  firstName: string;

  /**
   * Фамилия
   */
  lastName?: string;

  /**
   * Пароль
   */
  password: string;

  /**
   * Номер телефона
   */
  phoneNumber?: string;
}
