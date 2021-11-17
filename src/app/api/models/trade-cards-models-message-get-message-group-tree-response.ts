/* tslint:disable */
import { TradeCardsModelsMessageGetMessageGroupTreeResponseMessageGroup } from './trade-cards-models-message-get-message-group-tree-response-message-group';

/**
 * Ответ на запрос получения дерева групп текстов
 */
export interface TradeCardsModelsMessageGetMessageGroupTreeResponse {

  /**
   * Группы редактируемых текстов
   */
  groups?: Array<TradeCardsModelsMessageGetMessageGroupTreeResponseMessageGroup>;
}
