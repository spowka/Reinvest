/* tslint:disable */

/**
 * Параметры сортировки таблицы списка покупателей
 */
export interface TradeCardsModelsEmployeeGetEmployeesTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'CreationDate' | 'ArchivedDate' | 'FirstName' | 'LastName' | 'Email' | 'PhoneNumber';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
