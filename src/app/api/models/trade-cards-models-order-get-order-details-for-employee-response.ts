/* tslint:disable */
import { TradeCardsModelsOrderGetOrderDetailsForEmployeeResponseRow } from './trade-cards-models-order-get-order-details-for-employee-response-row';
export interface TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse {
  availableStatuses?: Array<{}>;
  comment?: string;
  createDate?: string;
  customerEmail?: string;
  customerLastName?: string;
  customerName?: string;
  customerPhone?: string;
  deliveryApartment?: string;
  deliveryBuilding?: string;
  deliveryCity?: string;
  deliveryHouse?: string;
  deliveryPostIndex?: string;
  deliveryRegion?: string;
  deliveryStreet?: string;

  /**
   * тип доставки
   */
  deliveryType?: 'Pickpoint' | 'Address' | 'Terminal';
  id?: string;
  isFinished?: boolean;
  pickPointAddress?: string;
  pickPointComment?: string;
  pickPointName?: string;
  pickPointPhones?: string;
  pickPointSchedule?: string;
  rows?: Array<TradeCardsModelsOrderGetOrderDetailsForEmployeeResponseRow>;
  showProcessingBlock?: boolean;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  statusComment?: string;
  statusDate?: string;
  totalPrice?: number;
}
