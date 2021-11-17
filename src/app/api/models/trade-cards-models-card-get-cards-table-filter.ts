/* tslint:disable */

/**
 * Фильтр таблицы списка карточек
 */
export interface TradeCardsModelsCardGetCardsTableFilter {

  /**
   * Идентификатор уровня каталога
   */
  catalogLevelId?: string;

  /**
   * Тираж
   */
  printCount?: number;

  /**
   * Статус
   */
  status?: 'New' | 'Check' | 'Modification' | 'Active' | 'NotActive' | 'SoldOut';

  /**
   * Название карточки
   */
  title?: string;
}
