/* tslint:disable */

/**
 * Параметры сортировки таблицы списка заказов в терминалах
 */
export interface TradeCardsModelsOrderTerminalGetOrderTerminalListTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'Id' | 'CreateDate' | 'LegalEntity' | 'Terminal' | 'ItemsCount' | 'PlannedSum' | 'FactSum' | 'Status';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
