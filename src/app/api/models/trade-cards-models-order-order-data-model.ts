/* tslint:disable */
import { TradeCardsModelsOrderOrderDataModelOrderRow } from './trade-cards-models-order-order-data-model-order-row';

/**
 * Список позиций заказа для быстрого просмотра из списка заказов
 */
export interface TradeCardsModelsOrderOrderDataModel {
  items?: Array<TradeCardsModelsOrderOrderDataModelOrderRow>;
  totalPrice?: number;
}
