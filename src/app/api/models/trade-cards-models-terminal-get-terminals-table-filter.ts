/* tslint:disable */
import { TradeCardsModelsDateFilter } from './trade-cards-models-date-filter';

/**
 * Фильтр таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsTableFilter {

  /**
   * Дата архивирования
   */
  archiveDate?: TradeCardsModelsDateFilter;

  /**
   * ConnectId
   */
  connectId?: string;

  /**
   * Дата создания
   */
  createDate?: TradeCardsModelsDateFilter;

  /**
   * Инвентарный номер
   */
  inventoryNumber?: string;

  /**
   * Идентификатор собственника терминала
   */
  terminalOwner?: string;
}
