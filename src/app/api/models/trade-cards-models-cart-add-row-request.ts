/* tslint:disable */

/**
 * Запрос на добавление карточек в корзину
 */
export interface TradeCardsModelsCartAddRowRequest {

  /**
   * Ответ капчи
   */
  captchaResponse?: string;

  /**
   * Id карточки
   */
  cardId?: string;

  /**
   * Ожидаемая цена карточки, если добавляется одна карточка и необходимо проверить цену
   */
  expectedPrice?: number;

  /**
   * Количество добавляемых карточек (если null, добавляем одну)
   */
  quantity?: number;
}
