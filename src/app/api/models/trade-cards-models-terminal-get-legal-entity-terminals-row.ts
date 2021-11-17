/* tslint:disable */

/**
 * Строка таблицы списка терминалов юр. лица
 */
export interface TradeCardsModelsTerminalGetLegalEntityTerminalsRow {

  /**
   * Дата прикрепления к юр. лицу
   */
  attachDate?: string;

  /**
   * ConnectId
   */
  connectId?: string;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Инвентарный номер
   */
  inventoryNumber?: string;

  /**
   * Cтатус соединения
   */
  isOnline?: boolean;

  /**
   * Описание статуса готовности
   */
  readyStatusString?: string;
}
