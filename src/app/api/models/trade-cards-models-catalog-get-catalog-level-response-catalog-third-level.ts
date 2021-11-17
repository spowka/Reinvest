/* tslint:disable */
import { TradeCardsModelsCatalogGetCatalogLevelResponseCatalogLevelBase } from './trade-cards-models-catalog-get-catalog-level-response-catalog-level-base';

/**
 * Данные второго родительского уровня (Тематика)
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponseCatalogThirdLevel {

  /**
   * Дочерние уровни
   */
  children?: Array<TradeCardsModelsCatalogGetCatalogLevelResponseCatalogLevelBase>;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Наименование
   */
  name?: string;
}
