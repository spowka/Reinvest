/* tslint:disable */
export interface TradeCardsModelsCardCardStatusHistoryRecord {

  /**
   * Карточка
   */
  cardTitle?: string;

  /**
   * Коммент
   */
  comment?: string;

  /**
   * Дата
   */
  date?: string;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Новый статус
   */
  status?: 'New' | 'Check' | 'Modification' | 'Active' | 'NotActive' | 'SoldOut';

  /**
   * Сотрудник
   */
  userName?: string;
}
