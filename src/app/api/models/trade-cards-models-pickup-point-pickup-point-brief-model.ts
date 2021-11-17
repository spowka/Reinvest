/* tslint:disable */

/**
 * Модель пункта самовывоза (краткая, для списка пунктов в админке)
 */
export interface TradeCardsModelsPickupPointPickupPointBriefModel {

  /**
   * Адрес
   */
  address?: string;
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
   * Наименование
   */
  name?: string;
}
