/* tslint:disable */
import { TradeCardsModelsLegalEntitiesLegalEntityBriefModel } from './trade-cards-models-legal-entities-legal-entity-brief-model';

/**
 * Список юр.лиц
 */
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesResponse {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsLegalEntitiesLegalEntityBriefModel>;

  /**
   * Количество старниц
   */
  pageCount?: number;

  /**
   * Индекс старницы
   */
  pageIndex?: number;

  /**
   * Полное количество записей
   */
  total?: number;
}
