/* tslint:disable */
import { TradeCardsModelsHomeTextPageMenuModel } from './trade-cards-models-home-text-page-menu-model';
import { TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel } from './trade-cards-models-home-get-menu-response-catalog-menu-level';

/**
 * Ответ на запрос главного меню для сайта
 */
export interface TradeCardsModelsHomeGetMenuResponse {
  pages?: Array<TradeCardsModelsHomeTextPageMenuModel>;

  /**
   * Список тематик
   */
  themes?: Array<TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel>;
}
