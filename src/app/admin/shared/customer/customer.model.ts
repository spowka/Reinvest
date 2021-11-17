import { DeliveryType } from '../order/order.model';

export class CustomerModel {
  id: string;
  registrationDate: string;
  archiveDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  amountPurchase?: number;
  isActive?: boolean;
  password?: string;
  isEmailConfirmed?: boolean;

  deliveryRegion: string;
  deliveryCity: string;
  deliveryPostIndex: string;
  deliveryStreet: string;
  deliveryHouse: string;
  deliveryBuilding: string;
  deliveryApartment: string;

  constructor() {
    this.isActive = true;
  }
}

export interface GetCustomerActiveOrdersResponse {
  orders: CustomerOrder[];
}

export interface GetCustomerFinishedOrdersResponse {
  years: string[];
  themes: CardTheme[];
  orders: CustomerOrder[];
}

export interface CustomerOrder {
  id: string;
  createDate: string;
  rows: CustomerOrderRow[];
  totalPrice: string;
  status: string;
  statusDate: string;
}

export interface CustomerOrderRow {
  title: string;
  price: string;
  quantity: string;
  sum: string;
}

export interface CardTheme {
  id: string;
  name: string;
}