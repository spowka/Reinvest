/* tslint:disable */

/**
 * Параметры запроса на сброс пароля пользователя
 */
export interface TradeCardsModelsAccountResetPasswordRequest {

  /**
   * Токен
   */
  code?: string;

  /**
   * Пароль
   */
  password: string;

  /**
   * Идентификатор пользователя
   */
  userId: string;
}
