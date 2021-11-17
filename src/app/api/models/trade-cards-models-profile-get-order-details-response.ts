/* tslint:disable */
import { TradeCardsModelsProfileGetOrderDetailsResponseRow } from './trade-cards-models-profile-get-order-details-response-row';
export interface TradeCardsModelsProfileGetOrderDetailsResponse {

  /**
   * адрес для доставки транспортной компанией, либо адрес пункта самовывоза, либо адрес терминала
   */
  address?: Array<string>;
  comment?: string;

  /**
   * тип доставки
   */
  deliveryType?: 'Pickpoint' | 'Address' | 'Terminal';
  id?: string;
  rows?: Array<TradeCardsModelsProfileGetOrderDetailsResponseRow>;

  /**
   * расписание (заполняется только для пункта самовывоза)
   */
  schedule?: string;
  status?: string;
  statusDate?: string;
  totalPrice?: number;
}
