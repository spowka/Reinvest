/* tslint:disable */
import { TradeCardsModelsTerminalGetTerminalsRow } from './trade-cards-models-terminal-get-terminals-row';

/**
 * Ответ на запрос списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsResponse {

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
  terminals?: Array<TradeCardsModelsTerminalGetTerminalsRow>;

  /**
   * Полное количество записей
   */
  total?: number;
}
