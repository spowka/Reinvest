/* tslint:disable */

/**
 * Служебные настройки для терминала
 */
export interface TradeCardsModelsSettingsServiceSettingsForTerminalResponse {

  /**
   * Переход в режим "бездействия" после печати заказа, с
   */
  timeAfterPrintingToInactionMode?: number;

  /**
   * Время для печати одной карточки с голограммой, с
   */
  timeForPrintingCardWithHologram?: number;

  /**
   * Время для печати одной карточки без голограммы, с
   */
  timeForPrintingCardWithoutHologram?: number;
}
