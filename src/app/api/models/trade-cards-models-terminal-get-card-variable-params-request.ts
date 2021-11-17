/* tslint:disable */
import { TradeCardsModelsTerminalGetCardVariableParamsModel } from './trade-cards-models-terminal-get-card-variable-params-model';
export interface TradeCardsModelsTerminalGetCardVariableParamsRequest {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsTerminalGetCardVariableParamsModel>;

  /**
   * Количество старниц
   */
  pageCount?: number;

  /**
   * Индекс старницы
   */
  pageIndex?: number;

  /**
   * Полное количество записей
   */
  total?: number;
}
