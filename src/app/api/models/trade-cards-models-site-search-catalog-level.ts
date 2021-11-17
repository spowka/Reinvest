/* tslint:disable */
import { TradeCardsModelsSiteSearchCatalogLevel } from './trade-cards-models-site-search-catalog-level';

/**
 * Данные уровня каталога для страницы результатов поиска
 */
export interface TradeCardsModelsSiteSearchCatalogLevel {
  children?: Array<TradeCardsModelsSiteSearchCatalogLevel>;

  /**
   * Идентификатор
   */
  id?: string;
  image?: string;
  name?: string;
  shortDescription?: string;
}
