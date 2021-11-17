/* tslint:disable */
import { TradeCardsModelsCartTimerInfoResponse } from './trade-cards-models-cart-timer-info-response';

/**
 * Ответ на изменение карточек в корзине
 */
export interface TradeCardsModelsCartUpdateRowResponse {

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Цена следующей карточки
   */
  nextCardPrice?: number;

  /**
   * Доступный остаток карточек (null = неограничено)
   */
  remaining?: number;

  /**
   * Информация об окончании времени таймера (если он есть)
   */
  timerEndingInfo?: TradeCardsModelsCartTimerInfoResponse;
}
