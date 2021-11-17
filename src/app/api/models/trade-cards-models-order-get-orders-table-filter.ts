/* tslint:disable */
import { TradeCardsModelsDateFilter } from './trade-cards-models-date-filter';

/**
 * Фильтр таблицы списка заказов
 */
export interface TradeCardsModelsOrderGetOrdersTableFilter {
  createDate?: TradeCardsModelsDateFilter;
  customerEmail?: string;
  customerName?: string;
  deliveryType?: 'Pickpoint' | 'Address' | 'Terminal';
  feed?: 'Processing' | 'Packaging' | 'Returning' | 'Completed';
  id?: number;
  itemsCount?: number;
  pickPointId?: string;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  totalPrice?: number;
}
