/* tslint:disable */
import { TradeCardsModelsCatalogGetCatalogPublishTreeResponseCatalogPublishLevel } from './trade-cards-models-catalog-get-catalog-publish-tree-response-catalog-publish-level';

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogPublishTreeResponseCatalogPublishLevel {

  /**
   * Количество действующих карточек
   */
  activeCards?: number;

  /**
   * Признак возможности изменения флага публикации на сайте
   */
  allowChangeIsPublished?: boolean;

  /**
   * Количество архивных карточек
   */
  archiveCards?: number;

  /**
   * Дочерние уровни
   */
  children?: Array<TradeCardsModelsCatalogGetCatalogPublishTreeResponseCatalogPublishLevel>;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Признак публикации на сайте
   */
  isPublished?: boolean;

  /**
   * Признак публикации в топе каталога
   */
  isPublishedInCatalogTop?: boolean;

  /**
   * Признак публикации в топе первого уровня (тематики)
   */
  isPublishedInFirstLevelTop?: boolean;

  /**
   * Признак публикации в топе второго уровня (серии)
   */
  isPublishedInSecondLevelTop?: boolean;

  /**
   * Наименование
   */
  name?: string;
}
