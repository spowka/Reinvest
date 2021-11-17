/* tslint:disable */

/**
 * Ответ на запрос детальных данных карточки
 */
export interface TradeCardsModelsHomeGetCardDetailResponse {

  /**
   * Обратная сторона
   */
  backImage?: string;

  /**
   * Дата создания
   */
  created?: string;

  /**
   * Описание для сайта
   */
  description?: string;

  /**
   * Лицевая сторона
   */
  frontImage?: string;

  /**
   * Идентификатор
   */
  id?: string;

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
