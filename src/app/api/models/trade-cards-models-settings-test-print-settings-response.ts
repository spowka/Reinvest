/* tslint:disable */
export interface TradeCardsModelsSettingsTestPrintSettingsResponse {

  /**
   * Исходник для печати на терминале. Обратная сторона. Голограмма
   */
  printBackHolo?: string;

  /**
   * Исходник для печати на терминале. Обратная сторона. Изображение
   */
  printBackImage?: string;

  /**
   * Исходник для печати на терминале. Обратная сторона. Ламинация
   */
  printBackLamination?: string;

  /**
   * Режим печати карты на терминале
   */
  printFilesMode?: 'None' | 'ImageLamination' | 'ImageHoloLamination';

  /**
   * Исходник для печати на терминале. Лицевая сторона. Голограмма
   */
  printFrontHolo?: string;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Изображение
   */
  printFrontImage?: string;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Ламинация
   */
  printFrontLamination?: string;
}
