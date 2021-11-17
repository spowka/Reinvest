/* tslint:disable */
import { TradeCardsModelsTerminalTerminalFullFileInfo } from './trade-cards-models-terminal-terminal-full-file-info';
export interface TradeCardsModelsTerminalTerminalFullCard {

  /**
   * Обратная сторона для терминала
   */
  backImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Дата создания
   */
  created?: string;

  /**
   * Описание для сайта
   */
  description?: string;

  /**
   * Лицевая сторона для терминала
   */
  frontImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Индекс карточки в списке карточек уровня каталога
   */
  index?: number;

  /**
   * Превью для терминала
   */
  previewImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Тираж
   */
  printCount?: number;

  /**
   * Режим печати карты на терминале
   */
  printFilesMode?: 'None' | 'ImageLamination' | 'ImageHoloLamination';

  /**
   * Исходник для печати на терминале. Обратная сторона. Голограмма
   */
  terminalPrintBackHolo?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Исходник для печати на терминале. Обратная сторона. Изображение
   */
  terminalPrintBackImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Исходник для печати на терминале. Обратная сторона. Ламинация
   */
  terminalPrintBackLamination?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Голограмма
   */
  terminalPrintFrontHolo?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Изображение
   */
  terminalPrintFrontImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Ламинация
   */
  terminalPrintFrontLamination?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /**
   * Наименование
   */
  title?: string;
}
