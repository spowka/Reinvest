/* tslint:disable */
import { TradeCardsModelsCustomerEmployeeOrderModel } from './trade-cards-models-customer-employee-order-model';
import { TradeCardsModelsCustomerGetCustomerFinishedOrdersResponseTheme } from './trade-cards-models-customer-get-customer-finished-orders-response-theme';
export interface TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse {
  orders?: Array<TradeCardsModelsCustomerEmployeeOrderModel>;
  themes?: Array<TradeCardsModelsCustomerGetCustomerFinishedOrdersResponseTheme>;
  years?: Array<number>;
}
