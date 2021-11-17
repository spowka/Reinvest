/* tslint:disable */

/**
 * Параметры запроса перемещения уровня каталога
 */
export interface TradeCardsModelsCatalogMoveCatalogLevelRequest {

  /**
   * Индекс уровня в списке уровней родителя
   */
  index?: number;

  /**
   * Идентификатор родительского уровня
   */
  parentId?: string;
}
