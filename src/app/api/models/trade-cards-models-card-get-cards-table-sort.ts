/* tslint:disable */

/**
 * Параметры сортировки таблицы списка карточек
 */
export interface TradeCardsModelsCardGetCardsTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'Index' | 'Title' | 'PrintCount' | 'Status';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
