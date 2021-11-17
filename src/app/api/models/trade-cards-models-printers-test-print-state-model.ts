/* tslint:disable */

/**
 * Текущее состояние тестовой печати для конкретного принтера
 */
export interface TradeCardsModelsPrintersTestPrintStateModel {

  /**
   * Можно ли начать новую задачу
   */
  canStartTestPrint?: boolean;

  /**
   * Текст ошибки
   */
  error?: string;

  /**
   * Статус тестовой карточки
   */
  status?: 'Waiting' | 'Printing' | 'Success' | 'Fail';

  /**
   * ID задачи на печать, если таковая существует
   */
  taskId?: string;
}
