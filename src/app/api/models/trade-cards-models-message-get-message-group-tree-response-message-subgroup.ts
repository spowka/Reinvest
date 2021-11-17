/* tslint:disable */

/**
 * Подгруппа редактируемых текстов
 */
export interface TradeCardsModelsMessageGetMessageGroupTreeResponseMessageSubgroup {

  /**
   * Идентификатор/Тип группы
   */
  id?: 'Catalog' | 'CatalogStructure' | 'CardCatalog' | 'Directories' | 'Employees' | 'Customers' | 'Terminals' | 'TerminalEmbedded' | 'Printing' | 'Cart' | 'Orders' | 'PickupOwnerARM' | 'CartAndOrders' | 'LegalEntities';

  /**
   * Наименование группы
   */
  name?: string;
}
