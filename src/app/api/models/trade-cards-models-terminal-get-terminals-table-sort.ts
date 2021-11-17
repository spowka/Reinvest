/* tslint:disable */

/**
 * Параметры сортировки таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'CreateDate' | 'ArchiveDate' | 'InventoryNumber' | 'ConnectId' | 'TerminalOwner' | 'IsOnline' | 'ReadyStatusString';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
