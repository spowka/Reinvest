/* tslint:disable */
import { TradeCardsModelsCustomerEmployeeOrderModelRow } from './trade-cards-models-customer-employee-order-model-row';

/**
 * Информация о заказе для списка заказов в профиле (одна структура для активных и неактивных)
 */
export interface TradeCardsModelsCustomerEmployeeOrderModel {
  createDate?: string;
  id?: number;
  rows?: Array<TradeCardsModelsCustomerEmployeeOrderModelRow>;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  statusDate?: string;
  totalPrice?: number;
}
