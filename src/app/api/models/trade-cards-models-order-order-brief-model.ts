/* tslint:disable */

/**
 * Краткие сведения о заказе для списка заказов
 */
export interface TradeCardsModelsOrderOrderBriefModel {
  createDate?: string;
  customerEmail?: string;
  customerId?: string;
  customerName?: string;
  deliveryType?: string;
  id?: number;
  isGuest?: boolean;

  /**
   * Печатается ли заказ в настоящий момент
   */
  isPrinting?: boolean;
  itemsCount?: number;
  pickpointAddress?: string;
  pickpointId?: string;
  pickpointName?: string;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  statusDate?: string;
  totalPrice?: number;
}
