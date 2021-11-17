/* tslint:disable */

/**
 * Параметры запроса на вход в систему через VK
 */
export interface TradeCardsModelsAccountLoginFBRequest {
  accessToken?: string;
  data_access_expiration_time?: number;
  expiresIn?: number;
  signedRequest?: string;
  userID?: string;
}
