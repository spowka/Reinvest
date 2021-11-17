/* tslint:disable */

/**
 * Модель получения карточки для сайта
 */
export interface TradeCardsModelsCardSiteThemeCardModel {

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Превью
   */
  previewImage?: string;

  /**
   * Цена
   */
  price?: number;

  /**
   * Тираж
   */
  printCount?: number;

  /**
   * Остаток тиража
   */
  printCountLeft?: number;

  /**
   * Наименование
   */
  title?: string;

  /**
   * Неограниченный тираж
   */
  unlimited?: boolean;
}
