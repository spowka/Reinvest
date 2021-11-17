/* tslint:disable */

/**
 * Модель пункта самовывоза (для админки)
 */
export interface TradeCardsModelsPickupPointPickupPointModel {

  /**
   * Адрес
   */
  address?: string;

  /**
   * Дополнительно
   */
  comment?: string;

  /**
   * Привязанный сотрудник. Email
   */
  employeeEmail?: string;

  /**
   * Привязанный сотрудник. Пароль
   */
  employeePassword?: string;
  id?: string;

  /**
   * Доступность для заказа
   */
  isAvailable?: boolean;

  /**
   * Является офисом
   */
  isOffice?: boolean;

  /**
   * Широта
   */
  latitude?: number;

  /**
   * Долгота
   */
  longitude?: number;

  /**
   * Если true, то координаты установлены вручную (не по адресу)
   */
  manualCoordinates?: boolean;

  /**
   * Наименование
   */
  name?: string;

  /**
   * Телефоны
   */
  phones?: string;

  /**
   * Время работы
   */
  schedule?: string;
}
