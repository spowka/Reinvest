/* tslint:disable */
import { TradeCardsModelsTerminalGetLegalEntityTerminalsRow } from './trade-cards-models-terminal-get-legal-entity-terminals-row';

/**
 * Ответ на запрос списка терминалов юр. лица
 */
export interface TradeCardsModelsTerminalGetLegalEntityTerminalsResponse {

  /**
   * Количество страниц
   */
  pageCount?: number;

  /**
   * Индекс страницы
   */
  pageIndex?: number;

  /**
   * Терминалы
   */
  terminals?: Array<TradeCardsModelsTerminalGetLegalEntityTerminalsRow>;

  /**
   * Полное количество записей
   */
  total?: number;
}
