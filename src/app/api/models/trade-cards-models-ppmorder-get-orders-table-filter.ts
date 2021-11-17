/* tslint:disable */

/**
 * Фильтр таблицы списка заказов
 */
export interface TradeCardsModelsPPMOrderGetOrdersTableFilter {
  customerEmail?: string;
  customerName?: string;
  customerPhone?: string;
  feed?: 'Receiving' | 'Delivering' | 'Completed';
  id?: number;
  itemsCount?: number;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  totalPrice?: number;
}
