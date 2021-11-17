/* tslint:disable */
import { TradeCardsModelsTerminalGetTerminalsTableFilter } from './trade-cards-models-terminal-get-terminals-table-filter';
import { TradeCardsModelsTerminalGetTerminalsTableSort } from './trade-cards-models-terminal-get-terminals-table-sort';

/**
 * Параметры запроса на получение списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsTerminalGetTerminalsTableFilter;

  /**
   * Признак запроса активных терминалов
   */
  isActive?: boolean;

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
  sortOrder?: TradeCardsModelsTerminalGetTerminalsTableSort;
}
