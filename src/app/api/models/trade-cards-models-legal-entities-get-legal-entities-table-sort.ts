/* tslint:disable */

/**
 * Параметры сортировки таблицы юр. лиц
 */
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesTableSort {

  /**
   * Колонка для сортировки
   */
  column?: 'CreateDate' | 'ArchiveDate' | 'Name' | 'ContactPersonName' | 'ContactPhone' | 'ContactEmail';

  /**
   * Признак сортировки в обратном порядке
   */
  descending?: boolean;
}
