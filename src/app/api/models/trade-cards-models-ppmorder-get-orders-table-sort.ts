/* tslint:disable */

/**
 * Параметры сортировки таблицы списка карточек
 */
export interface TradeCardsModelsPPMOrderGetOrdersTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'Id' | 'CustomerName' | 'CustomerEmail' | 'CustomerPhone' | 'ItemsCount' | 'TotalPrice' | 'Status';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
