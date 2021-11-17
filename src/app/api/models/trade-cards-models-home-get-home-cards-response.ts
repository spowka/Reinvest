/* tslint:disable */
import { TradeCardsModelsCardSiteThemeCardModel } from './trade-cards-models-card-site-theme-card-model';

/**
 * Список карточек для главной сайта
 */
export interface TradeCardsModelsHomeGetHomeCardsResponse {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsCardSiteThemeCardModel>;

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
