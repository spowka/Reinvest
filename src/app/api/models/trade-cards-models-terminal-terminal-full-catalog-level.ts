/* tslint:disable */
import { TradeCardsModelsTerminalTerminalFullCard } from './trade-cards-models-terminal-terminal-full-card';
import { TradeCardsModelsTerminalTerminalFullFileInfo } from './trade-cards-models-terminal-terminal-full-file-info';
import { TradeCardsModelsTerminalTerminalFullCatalogLevel } from './trade-cards-models-terminal-terminal-full-catalog-level';
export interface TradeCardsModelsTerminalTerminalFullCatalogLevel {

  /**
   * Список всех карточек, предназначенных к публикации на данном терминале
   */
  cards?: Array<TradeCardsModelsTerminalTerminalFullCard>;

  /**
   * Заголовок для коллекции карточек
   */
  cardsHeaderImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Фон для пункта меню
   */
  catalogItemBackgroundImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Превьюшка для пункта меню
   */
  catalogItemPreviewImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Дочерние уровни
   */
  children?: Array<TradeCardsModelsTerminalTerminalFullCatalogLevel>;

  /**
   * Расширенное описание
   */
  extendedDescription?: string;

  /**
   * Идентификатор уровня каталога
   */
  id?: string;

  /**
   * Индекс уровня в списке уровней родителя
   */
  index?: number;

  /**
   * Признак публикации в топе каталога
   */
  isPublishedInCatalogTop?: boolean;

  /**
   * Признак публикации в топе первого уровня
   */
  isPublishedInFirstLevelTop?: boolean;

  /**
   * Признак публикации в топе второго уровня
   */
  isPublishedInSecondLevelTop?: boolean;

  /**
   * Наименование
   */
  name?: string;

  /**
   * Краткое описание
   */
  shortDescription?: string;
}
