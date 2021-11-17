/* tslint:disable */
import { TradeCardsModelsAccountCurrentUserResponseUserAccessRow } from './trade-cards-models-account-current-user-response-user-access-row';

/**
 * Ответ на запрос входа в систему
 */
export interface TradeCardsModelsAccountLoginResponse {

  /**
   * Роли пользователя
   */
  access?: Array<TradeCardsModelsAccountCurrentUserResponseUserAccessRow>;

  /**
   * ФИО
   */
  fullName?: string;
  id?: string;

  /**
   * Токен авторизации
   */
  token?: string;

  /**
   * Является ли сотрудником или простым покупателем
   */
  userType?: 'Employee' | 'Customer' | 'PrintAgent' | 'PickPointManager' | 'Guest';
}
