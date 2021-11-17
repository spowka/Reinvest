/* tslint:disable */
import { TradeCardsModelsCartCartRow } from './trade-cards-models-cart-cart-row';

/**
 * Корзина пользователя
 */
export interface TradeCardsModelsCartCart {

  /**
   * Время, по наступлении которого нужно вывести предупреждение, что корзина будет очищена
   */
  alertTime?: string;

  /**
   * Время, по наступлении которого корзина будет очищена
   */
  cleanupTime?: string;
  cleanupType?: 'Cart' | 'Order' | 'Inaction' | 'Stop';

  /**
   * Элементы корзины
   */
  rows?: Array<TradeCardsModelsCartCartRow>;

  /**
   * Общее количество товаров
   */
  totalCount?: number;

  /**
   * Общая стоимость
   */
  totalPrice?: number;
}
