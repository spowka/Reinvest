/* tslint:disable */

/**
 * Краткие сведения о заказе для списка заказов
 */
export interface TradeCardsModelsPPMOrderOrderBriefModel {
  customerEmail?: string;
  customerId?: string;
  customerName?: string;
  customerPhone?: string;
  id?: number;
  itemsCount?: number;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  statusDate?: string;
  totalPrice?: number;
}
