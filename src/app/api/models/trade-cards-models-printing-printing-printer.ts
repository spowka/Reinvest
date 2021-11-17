/* tslint:disable */

/**
 * Информация о принтере (для админки, раздел "Заказы - процесс печати")
 */
export interface TradeCardsModelsPrintingPrintingPrinter {
  canStop?: boolean;
  hologram?: number;
  id?: string;
  isReady?: boolean;
  isSelected?: boolean;
  lifeTime?: number;
  name?: string;
  readyCards?: number;
  remainingRibbon?: number;
  status?: string;
  sublimate?: number;
  totalCards?: number;
}
