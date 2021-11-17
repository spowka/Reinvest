/* tslint:disable */
import { TradeCardsModelsMessageGetMessageGroupResponseMessage } from './trade-cards-models-message-get-message-group-response-message';

/**
 * Ответ на запрос группы редактируемых сообщений
 */
export interface TradeCardsModelsMessageGetMessageGroupResponse {

  /**
   * Сортированный список редактируемых сообщений
   */
  messages?: Array<TradeCardsModelsMessageGetMessageGroupResponseMessage>;
}
