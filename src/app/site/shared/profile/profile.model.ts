import { DeliveryType } from 'src/app/admin/shared/order/order.model';

export class ProfileDataResponse {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  deliveryRegion: string;
  deliveryCity: string;
  deliveryPostIndex: string;
  deliveryStreet: string;
  deliveryHouse: string;
  deliveryBuilding: string;
  deliveryApartment: string;
}

export interface GetActiveOrdersResponse {
  orders: ProfileOrder[];
}

export interface GetFinishedOrdersResponse {
  years: string[];
  themes: CardTheme[];
  orders: ProfileOrder[];
}

export interface ProfileOrder {
  id: string;
  createDate: string;
  rows: ProfileOrderRow[];
  totalPrice: string;
  status: string;
  statusDate: string;
}

export interface ProfileOrderRow {
  title: string;
  price: string;
  quantity: string;
  sum: string;
}

export interface GetOrderDetailsResponse {
  id: string;
  rows: OrderDetailsRow[];
  totalPrice: string;
  deliveryType: DeliveryType;
  address: string[];
  schedule: string;
  comment: string;
  status: string;
  statusDate: string;
}

export interface OrderDetailsRow {
  id: string;
  previewImage: string;
  title: string;
  path: string;
  price: string;
  quantity: string;
  sum: string;
}

export interface CardTheme {
  id: string;
  name: string;
}

export enum ProfileTabs {
  profile,
  orders,
  ordersHistory,
}
