/* tslint:disable */

/**
 * Модель получения карточки для просмотра списка карточек в админке
 */
export interface TradeCardsModelsCardAdminCardBriefModel {

  /**
   * Обратная сторона
   */
  backImage?: Blob;

  /**
   * Можно ли перенести карточку в архив
   */
  canArchive?: boolean;

  /**
   * Можно ли удалить карточку
   */
  canDelete?: boolean;

  /**
   * Можно ли редактировать поля или статус карточки
   */
  canEdit?: boolean;

  /**
   * Можно ли переносить карточку на другой уровень или изменять ее порядок отображения
   */
  canMoveOrReorder?: boolean;

  /**
   * Можно ли восстановить карточку из архивных
   */
  canRestore?: boolean;

  /**
   * Идентификатор уровня каталога, к которому привязана карточка
   */
  catalogLevelId?: string;

  /**
   * Комментарий к смене статуса
   */
  comment?: string;

  /**
   * Описание для сайта
   */
  description?: string;

  /**
   * Лицевая сторона
   */
  frontImage?: Blob;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Признак действующая/архивная
   */
  isActive?: boolean;

  /**
   * Превью для каталога
   */
  previewImage?: Blob;

  /**
   * Цена
   */
  price?: number;

  /**
   * Модель формирования цены
   */
  priceModel?: 'Fixed' | 'Proportional' | 'Exponential';

  /**
   * Тираж
   */
  printCount?: number;

  /**
   * Режим печати карты на терминале
   */
  printFilesMode?: 'None' | 'ImageLamination' | 'ImageHoloLamination';

  /**
   * Продано
   */
  soldCount?: number;

  /**
   * Статус карточки
   */
  status?: 'New' | 'Check' | 'Modification' | 'Active' | 'NotActive' | 'SoldOut';

  /**
   * Обратная сторона для терминала
   */
  terminalBackImage?: Blob;

  /**
   * Описание для терминала
   */
  terminalDescription?: string;

  /**
   * Лицевая сторона для терминала
   */
  terminalFrontImage?: Blob;

  /**
   * Превью для терминала
   */
  terminalPreviewImage?: Blob;

  /**
   * Исходник для печати на терминале. Обратная сторона. Голограмма
   */
  terminalPrintBackHolo?: Blob;

  /**
   * Исходник для печати на терминале. Обратная сторона. Изображение
   */
  terminalPrintBackImage?: Blob;

  /**
   * Исходник для печати на терминале. Обратная сторона. Ламинация
   */
  terminalPrintBackLamination?: Blob;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Голограмма
   */
  terminalPrintFrontHolo?: Blob;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Изображение
   */
  terminalPrintFrontImage?: Blob;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Ламинация
   */
  terminalPrintFrontLamination?: Blob;

  /**
   * Наименование
   */
  title?: string;

  /**
   * Неограниченный тираж
   */
  unlimited?: boolean;

  /**
   * Время последнего изменения
   */
  updated?: string;
}
