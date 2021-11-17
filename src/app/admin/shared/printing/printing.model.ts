export interface PrintPreparationModel {
    printers: PreparationPrinter[];
    orders: PreparationOrder[];
}

export interface PrintProcessModel {
    printers: PrintingPrinter[];
    orders: PrintingOrder[];
    canStopAll: boolean;
    canFinish: boolean;
    forceShutdownRequested: boolean;
}

export interface PreparationPrinter {
    id: string;
    status: string;
    isReady: boolean;
    name: string;
    lifeTime: number;
    remainingRibbon: number;
    sublimate: number;
    hologram: number;
}
export interface PreparationPrinterVM extends PreparationPrinter {
    isSelected: boolean;
}
export interface PrintingPrinter extends PreparationPrinter {
    totalCards: number;
    readyCards: number;
    canStop: boolean;
    isSelected: boolean;
}

export type OrderPrintingStatus = 'Preparing';
export type PrintSessionCardStatus = 'Waiting' | 'Printing' | 'Completed' | 'Error' | 'Canceled' | 'Rejected' | 'Preparing';

interface BaseOrder {
    id: number;
}

export interface PreparationOrder extends BaseOrder {
    printer: string;
    cards: PreparationCard[];
}

export interface PrintingOrder extends BaseOrder {
    printerName: string;
    status: OrderPrintingStatus;
    cards: PrintingCard[];
}

interface BaseCard {
    id: string;
    number: string;
    name: string;
    path: string;
    status: PrintSessionCardStatus;
    statusText: string;
    statusDescription: string;
}

export interface PreparationCard extends BaseCard {
    printer: string;
}

export interface PrintingCard extends BaseCard {
    printerName: string;
    printerId: string;
}

export interface ForceShutdownResponse {
    isImmediate: boolean;
}