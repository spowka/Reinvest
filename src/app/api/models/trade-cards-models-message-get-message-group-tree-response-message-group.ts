/* tslint:disable */
import { TradeCardsModelsMessageGetMessageGroupTreeResponseMessageSubgroup } from './trade-cards-models-message-get-message-group-tree-response-message-subgroup';

/**
 * Группа редактируемых текстов
 */
export interface TradeCardsModelsMessageGetMessageGroupTreeResponseMessageGroup {

  /**
   * Наименование группы
   */
  name?: string;

  /**
   * Сортированный список подгрупп
   */
  subgroups?: Array<TradeCardsModelsMessageGetMessageGroupTreeResponseMessageSubgroup>;
}
