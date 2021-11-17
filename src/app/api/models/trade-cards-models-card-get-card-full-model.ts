/* tslint:disable */

/**
 * Модель получения карточки для редактирования в админке
 */
export interface TradeCardsModelsCardGetCardFullModel {

  /**
   * Доступные статусы карточки
   */
  availableStatuses?: Array<'New' | 'Check' | 'Modification' | 'Active' | 'NotActive' | 'SoldOut'>;

  /**
   * Обратная сторона
   */
  backImage?: string;

  /**
   * Можно ли редактировать поля карточки (за исключением статуса - возможности по его изменению определяются согласно полю AvailableStatuses)
   */
  canEdit?: boolean;

  /**
   * Идентификатор уровня каталога, к которому привязана карточка
   */
  catalogLevelId?: string;

  /**
   * Комментарий к смене статуса
   */
  comment?: string;

  /**
   * Дата создания
   */
  created?: string;

  /**
   * Описание для сайта
   */
  description?: string;

  /**
   * Лицевая сторона
   */
  frontImage?: string;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Индекс карточки в списке карточек уровня каталога
   */
  index?: number;

  /**
   * Признак действующая/архивная
   */
  isActive?: boolean;

  /**
   * Превью
   */
  previewImage?: string;

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
  terminalBackImage?: string;

  /**
   * Описание для терминала
   */
  terminalDescription?: string;

  /**
   * Лицевая сторона для терминала
   */
  terminalFrontImage?: string;

  /**
   * Превью для терминала
   */
  terminalPreviewImage?: string;

  /**
   * Исходник для печати на терминале. Обратная сторона. Голограмма
   */
  terminalPrintBackHolo?: string;

  /**
   * Исходник для печати на терминале. Обратная сторона. Изображение
   */
  terminalPrintBackImage?: string;

  /**
   * Исходник для печати на терминале. Обратная сторона. Ламинация
   */
  terminalPrintBackLamination?: string;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Голограмма
   */
  terminalPrintFrontHolo?: string;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Изображение
   */
  terminalPrintFrontImage?: string;

  /**
   * Исходник для печати на терминале. Лицевая сторона. Ламинация
   */
  terminalPrintFrontLamination?: string;

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

  /**
   * Последнее изменение
   */
  updatedBy?: string;

  /**
   * Последнее изменение
   */
  updatedByUserId?: string;
}
