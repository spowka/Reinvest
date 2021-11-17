/* tslint:disable */

/**
 * Информация о принтере (для админки, раздел "Настройки -&gt; Принтеры")
 */
export interface TradeCardsModelsPrintersPrinter {

  /**
   * Доступна ли тестовая печать
   */
  canDoTestPrint?: boolean;

  /**
   * Голографическая пленка
   */
  hologram?: number;

  /**
   * Id в базе
   */
  id?: string;

  /**
   * Ссылка на скачивание загруженного файла входного цветового профиля
   */
  inProfileUrl?: string;

  /**
   * Пробег
   */
  lifeTime?: number;

  /**
   * Имя принтера
   */
  name?: string;

  /**
   * Ссылка на скачивание загруженного файла выходного цветового профиля
   */
  outProfileUrl?: string;

  /**
   * Остаток (карточек?)
   */
  remainingRibbon?: number;

  /**
   * Серийный номер
   */
  serialHex?: string;

  /**
   * Текущий статус принтера
   */
  status?: string;

  /**
   * Дата статуса принтера
   */
  statusDate?: string;

  /**
   * Краска
   */
  sublimate?: number;
}
