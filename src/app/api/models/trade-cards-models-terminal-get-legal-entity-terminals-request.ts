/* tslint:disable */
import { TradeCardsModelsTerminalGetLegalEntityTerminalsTableFilter } from './trade-cards-models-terminal-get-legal-entity-terminals-table-filter';
import { TradeCardsModelsTerminalGetLegalEntityTerminalsTableSort } from './trade-cards-models-terminal-get-legal-entity-terminals-table-sort';
export interface TradeCardsModelsTerminalGetLegalEntityTerminalsRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsTerminalGetLegalEntityTerminalsTableFilter;

  /**
   * Индекс старницы
   */
  pageIndex?: number;

  /**
   * Размер старницы
   */
  pageSize?: number;

  /**
   * Сортировка
   */
  sortOrder?: TradeCardsModelsTerminalGetLegalEntityTerminalsTableSort;
}
