/* tslint:disable */
import { TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailCard } from './trade-cards-models-home-get-catalog-level-detail-response-catalog-level-detail-card';
import { TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel } from './trade-cards-models-home-get-catalog-level-detail-response-catalog-level-detail-top-level';

/**
 * Ответ на запрос подробных данных уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogLevelDetailResponse {

  /**
   * Карточки
   */
  cards?: Array<TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailCard>;

  /**
   * Расширенное описание
   */
  extendedDescription?: string;

  /**
   * Изображение
   */
  image?: string;

  /**
   * Тип уровня каталога
   */
  levelType?: 'Theme' | 'Series' | 'Set';

  /**
   * Наименование
   */
  name?: string;

  /**
   * Топовые дочерние уровни
   */
  topLevels?: Array<TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel>;
}
