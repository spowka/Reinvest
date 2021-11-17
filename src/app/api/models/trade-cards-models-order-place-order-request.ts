/* tslint:disable */

/**
 * Модель создания заказа клиентом
 */
export interface TradeCardsModelsOrderPlaceOrderRequest {
  comment?: string;
  createAccount?: boolean;
  deliveryApartment?: string;
  deliveryBuilding?: string;
  deliveryCity?: string;
  deliveryHouse?: string;
  deliveryPickupPointId?: string;
  deliveryPostIndex?: string;
  deliveryRegion?: string;
  deliveryStreet?: string;
  deliveryType?: 'Pickpoint' | 'Address' | 'Terminal';
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  totalPrice?: number;
}
