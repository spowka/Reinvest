/* tslint:disable */

/**
 * Параметры запроса на вход в систему
 */
export interface TradeCardsModelsAccountLoginRequest {

  /**
   * Email
   */
  email: string;

  /**
   * Если true, то пользователь пытается залогиниться в админку, в противном случае - как покупатель
   */
  isAdmin?: boolean;

  /**
   * Пароль
   */
  password: string;
}
