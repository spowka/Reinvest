/* tslint:disable */
import { TradeCardsModelsOrderOrderBriefModel } from './trade-cards-models-order-order-brief-model';
export interface TradeCardsModelsOrderOrdersBriefModelResponse {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsOrderOrderBriefModel>;

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
