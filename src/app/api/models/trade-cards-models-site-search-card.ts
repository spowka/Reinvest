/* tslint:disable */

/**
 * Данные карточки для страницы результатов поиска
 */
export interface TradeCardsModelsSiteSearchCard {

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Путь к карточке
   */
  path?: string;

  /**
   * Изображение
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
