// Параметры запроса на получение списка карточек 
export class GetCardsRequest {
  // Фильтр 
  public filter?: GetCardsTableFilter | null;
  // Признак запроса активных 
  public isActive?: boolean | null;
  // Размер страницы
  public pageSize?: number | null;
  // Индекс страницы 
  public pageIndex?: number | null;
}

// Фильтр таблицы списка карточек
export class GetCardsTableFilter {
  // Идентификатор уровня каталога 
  public catalogLevelId?: string | null;
  // Название карточки 
  public title?: string | null;
  // Тираж 
  public printCount?: number | null;
  // Статус 
  public status?: CardStatus | null;
}

// Ответ на запрос получения списка элементов 
export class GetCardsResponse {
  // Карточки 
  public items?: CardBriefModel[] | null;
  // Индекс страницы 
  public pageIndex?: number | null;
  // Количество страниц 
  public pageCount?: number | null;
  // Полное количество записей 
  public total?: number | null;
}

// Модель создания карточки 
export class CreateCardModel {
  // Идентификатор уровня каталога, к которому привязана карточка 
  public catalogLevelId?: string | null;
  // Индекс карточки в списке карточек уровня каталога 
  public index?: number | null;
  // Наименование 
  public title?: string | null;
  // Описание для сайта 
  public description?: string | null;
  // Тираж 
  public printCount?: number | null;
  // Неограниченный тираж 
  public unlimited?: boolean | null;
  // Модель формирования цены 
  public priceModel?: PriceModel | null;
  // Цена 
  public price?: number | null;
  // Минимальная цена 
  public minPrice?: number | null;
  // Максимальная цена 
  public maxPrice?: number | null;
  // Превью для каталога 
  public previewImage?: any | null;
  // Лицевая сторона 
  public frontImage?: any | null;
  // Обратная сторона 
  public backImage?: any | null;

  public terminalDescription: string;
}

// Модель обновления карточки
export class UpdateCardModel extends CreateCardModel {
  // Статус карточки
  public status: CardStatus;
}

//Сведения о карточке для редактирования в админке
class CardModel extends UpdateCardModel {
  // Идентификатор
  public id?: string | null;
  // Дата создания
  public created?: Date | null;
  // Признак действующая/архивная
  public isActive?: boolean | null;

  public soldCount: number;
}

export class CardBriefModel extends CardModel {
  // можно ли редактировать поля или статус карточки
  public canEdit: boolean;
  // можно ли редактировать статус карточки
  public canEditStatus: boolean;
  // можно ли архивировать карточку
  public canArchive: boolean;
  // можно ли восстановить карточку
  public canRestore: boolean;
  // можно ли удалить карточку
  public canDelete: boolean;
  // можно ли переносить карточку на другой уровень или изменять ее порядок отображения
  public canMoveOrReorder: boolean;
}

export class CardFullModel extends CardModel {
  // Последнее изменение
  public updatedByUserId?: string | null;
  // Последнее изменение
  public updatedBy?: string | null;
  // Время последнего изменения
  public updated?: Date | null;

  public previewImage: string;
  public frontImage: string;
  public backImage: string;
  public terminalPreviewImage: string;
  public terminalFrontImage: string;
  public terminalBackImage: string;
  public printFilesMode: PrintFilesMode;
  public terminalPrintFrontImage: string;
  public terminalPrintFrontHolo: string;
  public terminalPrintFrontLamination: string;
  public terminalPrintBackImage: string;
  public terminalPrintBackHolo: string;
  public terminalPrintBackLamination: string;

  // можно ли редактировать поля карточки
  public canEdit: boolean;
  // доступные статусы для смены
  public availableStatuses: CardAvailableStatus[];

  //Название шаблона печати номеров карточек
  cardNumberPrintTemplate: string;
}

// Информация о доступности нового статуса для карты
// Используется при смене статуса
export interface CardAvailableStatus {
  status: CardStatus;
  warning?: StatusWarning;
}

// Предупреждение о невозможности установки статуса
export enum StatusWarning {
  NoCardNumberPrintTemplate = 'NoCardNumberPrintTemplate',
}

// Ответ на запрос операции над элементом
export class ItemIdResponse {
  // Идентификатор
  public id?: string | null;
}

// Статус карточки
export enum CardStatus {
  New = 'New',
  Check = 'Check',
  Modification = 'Modification',
  Active = 'Active',
  NotActive = 'NotActive',
  SoldOut = 'SoldOut',
}

// Режим печати карты на терминале
export type PrintFilesMode = 'None' | 'ImageLamination' | 'ImageHoloLamination';

// Модель формирования цены
export enum PriceModel {
  Fixed = 'Fixed',
  Proportional = 'Proportional',
  Exponential = 'Exponential',
}

//Сведения о карточке для сайта
export class CardSiteDetails {
  public id: string;
  public title: string;
  public description: string;
  public created: Date;
  public printCount: number;
  public unlimited: boolean;
  public price: number;
  public frontImage: string;
  public backImage: string;
  public printCountLeft?: number;
}

//Запись истории изменения статусов
export class CardStatusHistoryRow {
  public id: string;
  public date: Date;
  public userName: string;
  public status: string;
  public comment: string;
}

export const cardStatuses: { label: string, value: CardStatus }[] = [
  { label: 'Новая', value: CardStatus.New },
  { label: 'Проверка', value: CardStatus.Check },
  { label: 'Доработка', value: CardStatus.Modification },
  { label: 'Активная', value: CardStatus.Active },
  { label: 'Неактивная', value: CardStatus.NotActive },
  { label: 'Тираж закончился', value: CardStatus.SoldOut },
];