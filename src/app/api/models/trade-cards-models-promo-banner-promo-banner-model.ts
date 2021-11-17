/* tslint:disable */

/**
 * Админка. Модель для списка промо баннеров
 */
export interface TradeCardsModelsPromoBannerPromoBannerModel {
  id?: string;

  /**
   * Ссылка на изображение баннера
   */
  image?: string;

  /**
   * Ссылка
   */
  link?: string;

  /**
   * Показывать на сайте
   */
  show?: boolean;

  /**
   * Дата публикации. От
   */
  showFrom?: string;

  /**
   * Длительность показа (сек)
   */
  showSeconds?: number;

  /**
   * Дата публикации. До
   */
  showTo?: string;
}
