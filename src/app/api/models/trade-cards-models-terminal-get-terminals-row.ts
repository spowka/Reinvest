/* tslint:disable */

/**
 * Строка таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsRow {

  /**
   * Дата архивирования
   */
  archiveDate?: string;

  /**
   * ConnectId
   */
  connectId?: string;

  /**
   * Дата создания
   */
  createDate?: string;

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

  /**
   * Юр. лицо - собственник терминала
   */
  terminalOwner?: string;
}
