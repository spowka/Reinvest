/* tslint:disable */

/**
 * Данные пользователя для запроса на получение списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesEmployeeModel {

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
   * Признак системного пользователя (нельзя отправить в архив)
   */
  isSystem?: boolean;

  /**
   * Фамилия
   */
  lastName?: string;

  /**
   * Номер телефона
   */
  phoneNumber?: string;
}
