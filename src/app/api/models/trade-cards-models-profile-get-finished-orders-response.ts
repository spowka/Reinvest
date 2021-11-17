/* tslint:disable */
import { TradeCardsModelsProfileProfileOrderModel } from './trade-cards-models-profile-profile-order-model';
import { TradeCardsModelsProfileGetFinishedOrdersResponseTheme } from './trade-cards-models-profile-get-finished-orders-response-theme';
export interface TradeCardsModelsProfileGetFinishedOrdersResponse {
  orders?: Array<TradeCardsModelsProfileProfileOrderModel>;
  themes?: Array<TradeCardsModelsProfileGetFinishedOrdersResponseTheme>;
  years?: Array<number>;
}
