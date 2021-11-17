/* tslint:disable */
import { TradeCardsModelsCardAdminCardBriefModel } from './trade-cards-models-card-admin-card-brief-model';

/**
 * Список карт
 */
export interface TradeCardsModelsCardGetCardsResponse {

  /**
   * Карточки
   */
  items?: Array<TradeCardsModelsCardAdminCardBriefModel>;

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
