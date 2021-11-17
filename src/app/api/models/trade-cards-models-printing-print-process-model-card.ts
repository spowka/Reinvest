/* tslint:disable */
export interface TradeCardsModelsPrintingPrintProcessModelCard {
  id?: string;
  name?: string;
  number?: string;
  path?: string;
  printerName?: string;
  status?: 'Waiting' | 'Printing' | 'Completed' | 'Error' | 'Canceled' | 'Rejected' | 'Preparing';
  statusDescription?: string;
  statusText?: string;
}
