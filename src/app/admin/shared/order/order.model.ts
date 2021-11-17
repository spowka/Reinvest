import { CartRow } from '../cart/cart.model';
import { ListItem } from '../list-item';
import { GetItemsResponse } from '../get-items-response';

export class CurrentOrder {
    public items: CartRow[];
    public totalPrice: number;
}

export interface GetOrdersResponse extends GetItemsResponse<OrderBriefModel> {
}

class OrderBriefModel {
    public id: number;
    public createDate: Date;
    public customerId: string;
    public customerName: string;
    public customerEmail: string;
    public itemsCount: number;
    public totalPrice: number;
    public status: OrderStatus;
    public statusDate: OrderStatus;
    public isPrinting: boolean;
    public isGuest: boolean;
    public deliveryType: DeliveryType;

    public pickpointId: string;
    public pickpointName: string;
    public pickpointAddress: string;
}

export class OrderBriefVM extends OrderBriefModel {
    public selected: boolean;
    public expandedData: any;
}

// Статус заказа
export enum OrderStatus {
    New = 'New',
    Printing = 'Printing',
    PartialPrinted = 'PartialPrinted',
    Printed = 'Printed',
    Packaging = 'Packaging',
    ReadyToSendToTransportCompany = 'ReadyToSendToTransportCompany',
    ReadyToSendToPickPoint = 'ReadyToSendToPickPoint',
    SentToTransportCompany = 'SentToTransportCompany',
    SentToPickPoint = 'SentToPickPoint',
    ReadyToTake = 'ReadyToTake',
    DeliveredByTransportCompany = 'DeliveredByTransportCompany',
    ReturningToOffice = 'ReturningToOffice',
    ReturnedToOffice = 'ReturnedToOffice',
    DeliveredByPickPoint = 'DeliveredByPickPoint',
}

export enum PrintingSessionState {
    None = '',
    Preparing = 'Preparing',
    Printing = 'Printing'
}

export type DeliveryType = 'Pickpoint' | 'Address' | 'Terminal';

export class PickupPointOrderModel {
    public id: string;
    public name: string;
    public address: string;
    public phones: string;
    public schedule: string;
    public comment: string;

    public latitude: number;
    public longitude: number;
    public inactiveIcon: string;
    public activeIcon: string;
}

export interface ProfileOrderStatusHistoryRow {
    status: string;
    date: string;
}

export interface EmployeeOrderStatusHistoryRow {
    status: string;
    userName: string;
    date: string;
    comment: string;
}

export class GetOrderDetailsForEmployeeResponse {
    id: string;
    createDate: string;
    rows: OrderDetailsForEmployeeRow[];
    totalPrice: string;

    deliveryType: DeliveryType;

    pickPointName: string;
    pickPointAddress: string;
    pickPointPhones: string;
    pickPointSchedule: string;
    pickPointComment: string;

    deliveryRegion: string;
    deliveryCity: string;
    deliveryPostIndex: string;
    deliveryStreet: string;
    deliveryHouse: string;
    deliveryBuilding: string;
    deliveryApartment: string;

    comment: string;
    status: string;
    statusDate: string;

    customerName: string;
    customerLastName: string;
    customerEmail: string;
    customerPhone: string;

    showProcessingBlock: boolean;
    availableStatuses: ListItem<string>[];
    isFinished: boolean;
}

export interface OrderDetailsForEmployeeRow {
    previewImage: string;
    title: string;
    path: string;
    price: string;
    quantity: string;
    sum: string;
    status: string;
}

export interface PlaceOrderResponse {
    invoiceId: string;
    invoiceAccessToken: string;
}

export interface GetPaymentStatusRequest {
    invoiceId: string;
}

export interface GetPaymentStatusResponse {
    status: string;
}