import { OrderStatus } from '../order/order.model';
import { GetItemsResponse } from '../get-items-response';

export interface GetOrdersResponse extends GetItemsResponse<{
    id: string,
    customerId: string,
    customerName: string,
    customerEmail: string,
    customerPhone: string,
    itemsCount: number,
    totalPrice: number,
    status: OrderStatus,
    statusDate: string
}> {
}

export interface GetOrderDetailsResponse {
    id: string;
    createDate: string
    rows: OrderDetailsRow[];
    totalPrice: string;
    status: string;
    statusDate: string;

    customerName: string;
    customerLastName: string;
    customerEmail: string;
    customerPhone: string;
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