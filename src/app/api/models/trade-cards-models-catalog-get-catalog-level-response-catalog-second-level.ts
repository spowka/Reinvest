/* tslint:disable */
import { TradeCardsModelsCatalogGetCatalogLevelResponseCatalogThirdLevel } from './trade-cards-models-catalog-get-catalog-level-response-catalog-third-level';

/**
 * Данные первого родительского уровня (Серия или Тематика)
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponseCatalogSecondLevel {

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Наименование
   */
  name?: string;

  /**
   * Родительский уровень (пустой для уровня Серия)
   */
  parent?: TradeCardsModelsCatalogGetCatalogLevelResponseCatalogThirdLevel;
}
