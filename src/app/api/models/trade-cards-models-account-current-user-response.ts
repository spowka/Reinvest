/* tslint:disable */
import { TradeCardsModelsAccountCurrentUserResponseUserAccessRow } from './trade-cards-models-account-current-user-response-user-access-row';

/**
 * Ответ на запрос данных текущего пользователя
 */
export interface TradeCardsModelsAccountCurrentUserResponse {

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
   * Является ли сотрудником или простым покупателем
   */
  userType?: 'Employee' | 'Customer' | 'PrintAgent' | 'PickPointManager' | 'Guest';
}
