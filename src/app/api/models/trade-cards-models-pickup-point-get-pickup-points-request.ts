/* tslint:disable */

/**
 * Параметры запроса на получение списка ПС
 */
export interface TradeCardsModelsPickupPointGetPickupPointsRequest {

  /**
   * Признак запроса активных ПС
   */
  isActive?: boolean;

  /**
   * Id юр. лица - собственника ПС
   */
  ownerId?: string;
}
