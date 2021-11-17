/* tslint:disable */
import { TradeCardsModelsCustomerGetCustomersCustomerModel } from './trade-cards-models-customer-get-customers-customer-model';

/**
 * Ответ на запрос на получение списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersResponse {

  /**
   * Покупатели
   */
  customers?: Array<TradeCardsModelsCustomerGetCustomersCustomerModel>;

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
