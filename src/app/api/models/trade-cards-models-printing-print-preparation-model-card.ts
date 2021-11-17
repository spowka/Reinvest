/* tslint:disable */
export interface TradeCardsModelsPrintingPrintPreparationModelCard {
  id?: string;
  name?: string;
  number?: string;
  path?: string;
  printer?: string;
  status?: 'Waiting' | 'Printing' | 'Completed' | 'Error' | 'Canceled' | 'Rejected' | 'Preparing';
  statusDescription?: string;
  statusText?: string;
}
