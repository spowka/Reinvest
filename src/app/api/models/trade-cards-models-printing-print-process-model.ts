/* tslint:disable */
import { TradeCardsModelsPrintingPrintProcessModelOrder } from './trade-cards-models-printing-print-process-model-order';
import { TradeCardsModelsPrintingPrintingPrinter } from './trade-cards-models-printing-printing-printer';
export interface TradeCardsModelsPrintingPrintProcessModel {

  /**
   * Можно ли завершить сессию печати. Все карточки должны быть напечатаны
   */
  canFinish?: boolean;

  /**
   * Можно ли остановить все принтеры (т.е. есть ли хотя бы у одного принтера не начатые задания на печать)
   */
  canStopAll?: boolean;

  /**
   * Запрошено экстренное завершение сессии
   */
  forceShutdownRequested?: boolean;

  /**
   * Информация о печатающихся заказах
   */
  orders?: Array<TradeCardsModelsPrintingPrintProcessModelOrder>;

  /**
   * Информация о состоянии принтеров
   */
  printers?: Array<TradeCardsModelsPrintingPrintingPrinter>;
}
