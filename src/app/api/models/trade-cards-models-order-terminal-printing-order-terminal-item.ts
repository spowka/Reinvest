/* tslint:disable */

/**
 * Результат печати строки заказа (конкретной карточки) на терминале
 */
export interface TradeCardsModelsOrderTerminalPrintingOrderTerminalItem {

  /**
   * Код ошибки печати
   */
  errorPrintingCode?: string;

  /**
   * Id строки заказа
   */
  id?: string;

  /**
   * Статус результата печати
   */
  printingStatus?: 'Printed' | 'ErrorPrinting' | 'NotPrinted';
}
