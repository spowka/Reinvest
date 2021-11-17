/* tslint:disable */
export interface TradeCardsModelsSettingsServiceSettingsResponse {
  cartClearInterval?: number;
  exponentialPriceFactor?: number;
  orderPaymentInterval?: number;
  ordersNotifyEmail?: string;
  pickpointOfficeAddress?: string;
  pickpointOfficeAddressComment?: string;
  proportionalPriceFactor?: number;

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
