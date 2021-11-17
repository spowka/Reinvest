/* tslint:disable */
import { TradeCardsModelsPPMOrderGetOrderDetailsResponseRow } from './trade-cards-models-ppmorder-get-order-details-response-row';
export interface TradeCardsModelsPPMOrderGetOrderDetailsResponse {
  availableStatuses?: Array<{}>;
  createDate?: string;
  customerEmail?: string;
  customerLastName?: string;
  customerName?: string;
  customerPhone?: string;
  id?: string;
  rows?: Array<TradeCardsModelsPPMOrderGetOrderDetailsResponseRow>;
  showProcessingBlock?: boolean;
  status?: 'New' | 'Printing' | 'PartialPrinted' | 'Printed' | 'Packaging' | 'ReadyToSendToTransportCompany' | 'ReadyToSendToPickPoint' | 'SentToTransportCompany' | 'SentToPickPoint' | 'ReadyToTake' | 'DeliveredByTransportCompany' | 'ReturningToOffice' | 'ReturnedToOffice' | 'DeliveredByPickPoint';
  statusComment?: string;
  statusDate?: string;
  totalPrice?: number;
}
