/* tslint:disable */
import { TradeCardsModelsCartDetailRow } from './trade-cards-models-cart-detail-row';

/**
 * Строка в корзине пользователя
 */
export interface TradeCardsModelsCartCartRow {
  detailRows?: Array<TradeCardsModelsCartDetailRow>;

  /**
   * Идентификатор (карточки)
   */
  id?: string;

  /**
   * Путь ( Тематика / Серия / Комплект )
   */
  path?: string;

  /**
   * Превью
   */
  previewImage?: string;

  /**
   * Общая цена
   */
  rowPrice?: number;

  /**
   * Общее количество
   */
  rowQuantity?: number;

  /**
   * Наименование
   */
  title?: string;
}
