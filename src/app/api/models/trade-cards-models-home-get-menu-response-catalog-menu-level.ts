/* tslint:disable */
import { TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel } from './trade-cards-models-home-get-menu-response-catalog-menu-level';

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel {

  /**
   * Дочерние уровни
   */
  children?: Array<TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel>;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Наименование
   */
  name?: string;
}
