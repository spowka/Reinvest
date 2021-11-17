/* tslint:disable */

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogChildrenResponseCatalogLevel {

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Изображение
   */
  image?: string;

  /**
   * Тип уровня каталога
   */
  levelType?: 'Theme' | 'Series' | 'Set';

  /**
   * Наименование
   */
  name?: string;

  /**
   * Краткое описание
   */
  shortDescription?: string;
}
