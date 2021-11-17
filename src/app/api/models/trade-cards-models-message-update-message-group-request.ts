/* tslint:disable */
import { TradeCardsModelsMessageUpdateMessageGroupRequestMessageUpdate } from './trade-cards-models-message-update-message-group-request-message-update';

/**
 * Запрос на изменение сообщений группы
 */
export interface TradeCardsModelsMessageUpdateMessageGroupRequest {

  /**
   * Список отредактированных сообщений
   */
  messages?: Array<TradeCardsModelsMessageUpdateMessageGroupRequestMessageUpdate>;
}
