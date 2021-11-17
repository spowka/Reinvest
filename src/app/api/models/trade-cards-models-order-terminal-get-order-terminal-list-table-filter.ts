/* tslint:disable */
import { TradeCardsModelsDateFilter } from './trade-cards-models-date-filter';

/**
 * Фильтр таблицы списка заказов в терминалах
 */
export interface TradeCardsModelsOrderTerminalGetOrderTerminalListTableFilter {

  /**
   * Дата создания заказа
   */
  createDate?: TradeCardsModelsDateFilter;

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
  status?: 'New' | 'Printed' | 'PartialPrinted' | 'ErrorOnStartPrinting';

  /**
   * Терминал
   */
  terminal?: string;
}
