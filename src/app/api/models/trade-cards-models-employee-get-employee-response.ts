/* tslint:disable */
import { TradeCardsModelsEmployeeEmployeeRoleModel } from './trade-cards-models-employee-employee-role-model';

/**
 * Ответ на запрос данных пользователя
 */
export interface TradeCardsModelsEmployeeGetEmployeeResponse {

  /**
   * Дата архивирования
   */
  archiveDate?: string;

  /**
   * Дата создания
   */
  createDate?: string;

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
   * Признак системного пользователя (нельзя отправить в архив)
   */
  isSystem?: boolean;

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
   * Должность
   */
  position?: string;

  /**
   * Список включенных ролей для пользователя
   */
  roles?: Array<TradeCardsModelsEmployeeEmployeeRoleModel>;
}
