/* tslint:disable */

/**
 * Данные карточки
 */
export interface TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailCard {

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Изображение
   */
  image?: string;

  /**
   * Индекс карточки в списке карточек уровня каталога
   */
  index?: number;

  /**
   * Цена
   */
  price?: number;

  /**
   * Тираж
   */
  printCount?: number;

  /**
   * Наименование
   */
  title?: string;

  /**
   * Неограниченный тираж
   */
  unlimited?: boolean;
}
