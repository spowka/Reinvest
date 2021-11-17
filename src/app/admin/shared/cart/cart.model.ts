export interface GetCartResponse {
    rows: CartRow[];
    totalPrice: number;
    totalCount: number;
    cleanupTime: string;
    cleanupType: undefined | CleanupType;
}

export type CleanupType = 'Cart' | 'Order';

export interface CartRow {
    id: string;
    previewImage: string;
    title: string;
    path: string;
    rowPrice: number;
    detailRows: DetailRow[];
}

export interface DetailRow {
    price: number;
    quantity: number;
    detailPrice: number;
}

export const CaptchaCancelledError = 'CaptchaCancelledError';