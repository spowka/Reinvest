/* tslint:disable */
import { TradeCardsModelsCatalogGetCatalogLevelResponseCatalogSecondLevel } from './trade-cards-models-catalog-get-catalog-level-response-catalog-second-level';

/**
 * Ответ на запрос данных уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponse {

  /**
   * Расширенное описание
   */
  extendedDescription?: string;

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
   * Родительский уровень (пустой для уровня Тематика)
   */
  parent?: TradeCardsModelsCatalogGetCatalogLevelResponseCatalogSecondLevel;

  /**
   * Краткое описание
   */
  shortDescription?: string;

  /**
   * Терминал. Фон
   */
  terminalBackgroundImage?: string;

  /**
   * Терминал. Изображение для списка карточек
   */
  terminalCardsListImage?: string;

  /**
   * Терминал. Изображение для списка коллекций
   */
  terminalCollectionsListImage?: string;

  /**
   * Терминал. Изображение для списка серий
   */
  terminalSeriesListImage?: string;

  /**
   * Терминал. Изображение для списка тематик
   */
  terminalThemeListImage?: string;
}
