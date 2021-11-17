/* tslint:disable */

/**
 * Заказ в терминале для списка
 */
export interface TradeCardsModelsOrderTerminalOrderTerminalListItemModel {
  id?: number;
  
  /**
   * Дата создания заказа
   */
  createDate?: string;

  /**
   * Стоимость фактически напечатанного заказа
   */
  factSum?: number;

  /**
   * Кол-во позиций
   */
  itemsCount?: number;

  /**
   * Юр. лицо
   */
  legalEntity?: string;

  /**
   * Номер заказа
   */
  orderNumber?: string;

  /**
   * Первоначальная стоимость заказа
   */
  plannedSum?: number;

  /**
   * Статус заказа
   */
  status?: string;

  /**
   * Терминал
   */
  terminal?: string;
}
