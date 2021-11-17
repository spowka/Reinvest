/* tslint:disable */
import { TradeCardsModelsProfileProfileOrderModelRow } from './trade-cards-models-profile-profile-order-model-row';

/**
 * Информация о заказе для списка заказов в профиле (одна структура для активных и неактивных)
 */
export interface TradeCardsModelsProfileProfileOrderModel {
  createDate?: string;
  id?: number;
  rows?: Array<TradeCardsModelsProfileProfileOrderModelRow>;
  status?: string;
  statusDate?: string;
  totalPrice?: number;
}
