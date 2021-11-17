/* tslint:disable */
import { TradeCardsModelsEmployeeEmployeeRoleModel } from './trade-cards-models-employee-employee-role-model';

/**
 * Параметры запроса обновление данных сотрудника
 */
export interface TradeCardsModelsEmployeeUpdateEmployeeRequest {

  /**
   * Почта пользователя
   */
  email?: string;

  /**
   * Имя
   */
  firstName: string;

  /**
   * Фамилия
   */
  lastName?: string;

  /**
   * Пароль пользователя
   */
  password?: string;

  /**
   * Номер телефона
   */
  phoneNumber?: string;

  /**
   * Должность
   */
  position?: string;

  /**
   * Список включенных ролей для пользователя
   */
  roles?: Array<TradeCardsModelsEmployeeEmployeeRoleModel>;
}
