/* tslint:disable */

/**
 * Параметры сортировки таблицы списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'RegistrationDate' | 'ArchivedDate' | 'FirstName' | 'LastName' | 'Email' | 'PhoneNumber' | 'Orders';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
