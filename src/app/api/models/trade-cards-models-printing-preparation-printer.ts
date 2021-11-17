/* tslint:disable */

/**
 * Информация о принтере (для админки, раздел "Заказы - подготовка к печати")
 */
export interface TradeCardsModelsPrintingPreparationPrinter {
  hologram?: number;
  id?: string;
  isReady?: boolean;
  lifeTime?: number;
  name?: string;
  remainingRibbon?: number;
  status?: string;
  sublimate?: number;
}
