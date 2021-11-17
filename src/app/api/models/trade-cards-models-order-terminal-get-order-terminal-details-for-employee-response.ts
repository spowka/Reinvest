/* tslint:disable */
import { TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponseRow } from './trade-cards-models-order-terminal-get-order-terminal-details-for-employee-response-row';

/**
 * Детали заказа в терминале для админки
 */
export interface TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse {

  /**
   * Дата создания заказа
   */
  createDate?: string;

  /**
   * Стоимость фактически напечатанного заказа
   */
  factSum?: number;

  /**
   * Юр. лицо
   */
  legalEntity?: string;

  /**
   * Номер заказа
   */
  orderNumber?: string;

  /**
   * Первоначальная стоимость заказа
   */
  plannedSum?: number;
  rows?: Array<TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponseRow>;

  /**
   * Статус заказа
   */
  status?: string;

    /**
   * Последнее обновление статуса
   */
  statusUpdatedDate?: string;

  /**
   * Терминал
   */
  terminal?: string;

  /**
   * Адрес терминала, в котором оформлен заказ, на момент заказа
   */
  terminalAddress?: string;
}
