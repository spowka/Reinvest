/* tslint:disable */

/**
 * Параметры сортировки таблицы списка заказов
 */
export interface TradeCardsModelsOrderGetOrdersTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'Id' | 'CreateDate' | 'CustomerName' | 'CustomerEmail' | 'ItemsCount' | 'TotalPrice' | 'Status' | 'DeliveryType' | 'PickPointId';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
