/* tslint:disable */
import { TradeCardsModelsCartTimerInfoResponse } from './trade-cards-models-cart-timer-info-response';

/**
 * Ответ на удаление карточек в корзине
 */
export interface TradeCardsModelsCartDeleteRowResponse {

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
