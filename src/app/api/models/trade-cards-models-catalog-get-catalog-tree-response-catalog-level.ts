/* tslint:disable */
import { TradeCardsModelsCatalogGetCatalogTreeResponseCatalogLevel } from './trade-cards-models-catalog-get-catalog-tree-response-catalog-level';

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogTreeResponseCatalogLevel {

  /**
   * Количество действующих карточек
   */
  activeCards?: number;

  /**
   * Количество архивных карточек
   */
  archiveCards?: number;

  /**
   * Дочерние уровни
   */
  children?: Array<TradeCardsModelsCatalogGetCatalogTreeResponseCatalogLevel>;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Наименование
   */
  name?: string;
}
