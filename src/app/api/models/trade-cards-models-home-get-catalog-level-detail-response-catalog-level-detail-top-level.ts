/* tslint:disable */
import { TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel } from './trade-cards-models-home-get-catalog-level-detail-response-catalog-level-detail-top-level';

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel {

  /**
   * Идентификатор
   */
  id?: string;

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
   * Краткое описание
   */
  shortDescription?: string;

  /**
   * Топовые дочерние уровни
   */
  topLevels?: Array<TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel>;
}
