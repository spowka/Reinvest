/* tslint:disable */
import { TradeCardsModelsSiteSearchCard } from './trade-cards-models-site-search-card';
import { TradeCardsModelsSiteSearchOtherResult } from './trade-cards-models-site-search-other-result';
import { TradeCardsModelsSiteSearchSeriesGroup } from './trade-cards-models-site-search-series-group';
import { TradeCardsModelsSiteSearchSetGroup } from './trade-cards-models-site-search-set-group';
import { TradeCardsModelsSiteSearchCatalogLevel } from './trade-cards-models-site-search-catalog-level';
export interface TradeCardsModelsSiteSearchSearchResult {
  cards?: Array<TradeCardsModelsSiteSearchCard>;
  otherResults?: Array<TradeCardsModelsSiteSearchOtherResult>;
  series?: Array<TradeCardsModelsSiteSearchSeriesGroup>;
  sets?: Array<TradeCardsModelsSiteSearchSetGroup>;
  themes?: Array<TradeCardsModelsSiteSearchCatalogLevel>;
}
