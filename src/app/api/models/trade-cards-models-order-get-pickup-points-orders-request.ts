/* tslint:disable */
import { TradeCardsModelsOrderPickupPointOrderModel } from './trade-cards-models-order-pickup-point-order-model';

/**
 * Запрос-обертка на получение списка точек
 */
export interface TradeCardsModelsOrderGetPickupPointsOrdersRequest {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsOrderPickupPointOrderModel>;

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
