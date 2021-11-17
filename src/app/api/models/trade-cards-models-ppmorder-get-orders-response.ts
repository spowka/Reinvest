/* tslint:disable */
import { TradeCardsModelsPPMOrderOrderBriefModel } from './trade-cards-models-ppmorder-order-brief-model';

/**
 * Список заказов
 */
export interface TradeCardsModelsPPMOrderGetOrdersResponse {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsPPMOrderOrderBriefModel>;

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
