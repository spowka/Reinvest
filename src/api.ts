/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Объект доступа сотрудника
 */
export type TradeCardsModelsEmployeeEmployeeRoleTarget = 0;

/**
 * Уровень доступа сотрудника
 */
export type TradeCardsModelsEmployeeEmployeeRoleAccess = 0 | 1 | 2 | 3;

export interface TradeCardsModelsAccountCurrentUserResponseUserAccessRow {
  Target?: TradeCardsModelsEmployeeEmployeeRoleTarget;
  Access?: TradeCardsModelsEmployeeEmployeeRoleAccess;
}

export type TradeCardsModelsAccountUserType = 0 | 1 | 2 | 3 | 4;

/**
 * Ответ на запрос входа в систему
 */
export interface TradeCardsModelsAccountLoginResponse {
  Id?: string | null;

  /** ФИО */
  FullName?: string | null;

  /** Роли пользователя */
  Access?: TradeCardsModelsAccountCurrentUserResponseUserAccessRow[] | null | null;
  UserType?: TradeCardsModelsAccountUserType;

  /** Токен авторизации */
  Token?: string | null;
}

/**
 * Ошибка
 */
export interface TradeCardsModelsControllerError {
  /** Код */
  Code?: string | null;

  /** Описание */
  Description?: string | null;
}

export interface MicrosoftAspNetCoreMvcProblemDetails {
  Type?: string | null;
  Title?: string | null;
  Status?: number | null;
  Detail?: string | null;
  Instance?: string | null;
  Extensions?: Record<string, any>;
}

/**
 * Модель запроса логирования гостя с терминала
 */
export interface TradeCardsModelsAccountLoginGuestTerminalRequest {
  /** Connect id терминала */
  ConnectId?: string | null;
}

/**
 * Параметры запроса на вход в систему
 */
export interface TradeCardsModelsAccountLoginRequest {
  /** Email */
  Email: string;

  /** Пароль */
  Password: string;

  /** Если true, то пользователь пытается залогиниться в админку, в противном случае - как покупатель */
  IsAdmin?: boolean | null;
}

/**
 * Параметры запроса на подтверждение почты покупателя
 */
export interface TradeCardsModelsAccountConfirmCustomerEmailRequest {
  /** ИД покупателя */
  Id: string;

  /** Код подтверждения */
  Code: string;
}

/**
 * Параметры запроса на восстановление пароля
 */
export interface TradeCardsModelsAccountForgotPasswordRequest {
  /** Email */
  Email: string;
}

/**
 * Параметры запроса на сброс пароля пользователя
 */
export interface TradeCardsModelsAccountResetPasswordRequest {
  /** Идентификатор пользователя */
  UserId: string;

  /** Пароль */
  Password: string;

  /** Токен */
  Code?: string | null;
}

/**
 * Ответ на запрос данных текущего пользователя
 */
export interface TradeCardsModelsAccountCurrentUserResponse {
  Id?: string | null;

  /** ФИО */
  FullName?: string | null;

  /** Роли пользователя */
  Access?: TradeCardsModelsAccountCurrentUserResponseUserAccessRow[] | null | null;
  UserType?: TradeCardsModelsAccountUserType;
}

export interface TradeCardsModelsAccountIsEmailFreeResponse {
  HasUser?: boolean;
}

/**
 * Параметры запроса на вход в систему через VK
 */
export interface TradeCardsModelsAccountLoginVKRequest {
  ReturnUrl?: string | null;
  Code?: string | null;
}

/**
 * Параметры запроса на вход в систему через VK
 */
export interface TradeCardsModelsAccountLoginFBRequest {
  accessToken?: string | null;
  data_access_expiration_time?: number;
  expiresIn?: number;
  signedRequest?: string | null;
  userID?: string | null;
}

/**
 * Параметры запроса на вход в систему через Google
 */
export interface TradeCardsModelsAccountLoginGoogleRequest {
  IdToken?: string | null;
}

/**
 * Параметры запроса на вход в систему через OK
 */
export interface TradeCardsModelsAccountLoginOKRequest {
  AccessToken?: string | null;
  SessionSecretKey?: string | null;
}

/**
 * Фильтр даты
 */
export interface TradeCardsModelsDateFilter {
  /** Начало */
  From?: string | null;

  /** Конец */
  To?: string | null;
}

export interface TradeCardsModelsEmployeeGetBlogPostsTableFilter {
  CreationDate?: TradeCardsModelsDateFilter;

  /** Имя */
  Title?: string | null;
}

/**
 * Колонки таблицы списка сотрудников
 */
export type TradeCardsModelsEmployeeGetBlogPostsTableColumn = 0 | 1;

export interface TradeCardsModelsEmployeeGetBlogPostsTableSort {
  Column?: TradeCardsModelsEmployeeGetBlogPostsTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка записей блога
 */
export interface TradeCardsModelsEmployeeGetBlogPostsRequest {
  /** Размер страницы */
  PageSize?: number;

  /** Индекс страницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsEmployeeGetBlogPostsTableFilter;
  SortOrder?: TradeCardsModelsEmployeeGetBlogPostsTableSort;
}

/**
 * Админка. Модель для списка текстовых страниц
 */
export interface TradeCardsModelsBlogPostBlogPostBriefModel {
  Id?: string | null;
  CreateDate?: string;
  Title?: string | null;
  IsPublished?: boolean;
}

/**
 * Админка. Модель для списка текстовых страниц
 */
export interface TradeCardsModelsBlogPostBlogPostModel {
  Id?: string | null;
  Title?: string | null;
  LogicalName?: string | null;
  TitleTag?: string | null;
  DescriptionTag?: string | null;
  KeywordsTag?: string | null;
  PostImage?: string | null;
  ShortContent?: string | null;
  Content?: string | null;
  Tags?: string | null;
  CreateDate?: string;
  IsPublished?: boolean;
}

export interface TradeCardsModelsHomeGetBlogFeedRequest {
  Year?: number;
  Skip?: number;
}

export interface TradeCardsModelsHomeBlogPostSiteBriefModel {
  Image?: string | null;
  CreateDate?: string;
  Title?: string | null;
  Text?: string | null;
  LogicalName?: string | null;
}

export interface TradeCardsModelsHomeBlogPostFeedChunk {
  Rows?: TradeCardsModelsHomeBlogPostSiteBriefModel[] | null | null;
  NextPosition?: number | null;
  NextYear?: number | null;
}

export interface TradeCardsModelsBlogPostBlogPostSiteViewModel {
  CreateDate?: string;
  Title?: string | null;
  Image?: string | null;
  Content?: string | null;
  Tags?: string | null;
  TitleTag?: string | null;
  DescriptionTag?: string | null;
  KeywordsTag?: string | null;
}

/**
 * Статус карточки
 */
export type TradeCardsDataEntitiesCardStatus = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Фильтр таблицы списка карточек
 */
export interface TradeCardsModelsCardGetCardsTableFilter {
  /** Идентификатор уровня каталога */
  CatalogLevelId?: string | null;

  /** Название карточки */
  Title?: string | null;

  /** Тираж */
  PrintCount?: number | null;
  Status?: TradeCardsDataEntitiesCardStatus;
}

/**
 * Колонки таблицы списка карточек
 */
export type TradeCardsModelsCardGetCardsTableColumn = 0 | 1 | 2 | 3;

/**
 * Параметры сортировки таблицы списка карточек
 */
export interface TradeCardsModelsCardGetCardsTableSort {
  Column?: TradeCardsModelsCardGetCardsTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка карточек
 */
export interface TradeCardsModelsGetItemsRequest2TradeCardsModelsCardGetCardsTableFilterTradeCardsVersion1000CultureNeutralPublicKeyTokenNullTradeCardsModelsCardGetCardsTableSortTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Признак запроса активных */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsCardGetCardsTableFilter;
  SortOrder?: TradeCardsModelsCardGetCardsTableSort;
}

/**
 * Модель формирования цены
 */
export type TradeCardsDataEntitiesPriceModelType = 0 | 1 | 2;

/**
 * Режим печати карты на терминале
 */
export type TradeCardsDataEntitiesCardPrintFilesMode = 0 | 1 | 2;

/**
 * Модель получения карточки для просмотра списка карточек в админке
 */
export interface TradeCardsModelsCardAdminCardBriefModel {
  /** Идентификатор уровня каталога, к которому привязана карточка */
  CatalogLevelId?: string | null;

  /** Наименование */
  Title?: string | null;

  /** Описание для сайта */
  Description?: string | null;

  /** Описание для терминала */
  TerminalDescription?: string | null;

  /** Тираж */
  PrintCount?: number | null;

  /** Неограниченный тираж */
  Unlimited?: boolean | null;
  PriceModel?: TradeCardsDataEntitiesPriceModelType;

  /** Цена */
  Price?: number | null;

  /** Превью для каталога */
  PreviewImage?: File | null;

  /** Лицевая сторона */
  FrontImage?: File | null;

  /** Обратная сторона */
  BackImage?: File | null;

  /** Превью для терминала */
  TerminalPreviewImage?: File | null;

  /** Лицевая сторона для терминала */
  TerminalFrontImage?: File | null;

  /** Обратная сторона для терминала */
  TerminalBackImage?: File | null;

  /** Исходник для печати на терминале. Лицевая сторона. Изображение */
  TerminalPrintFrontImage?: File | null;

  /** Исходник для печати на терминале. Лицевая сторона. Голограмма */
  TerminalPrintFrontHolo?: File | null;

  /** Исходник для печати на терминале. Лицевая сторона. Ламинация */
  TerminalPrintFrontLamination?: File | null;

  /** Исходник для печати на терминале. Обратная сторона. Изображение */
  TerminalPrintBackImage?: File | null;

  /** Исходник для печати на терминале. Обратная сторона. Голограмма */
  TerminalPrintBackHolo?: File | null;

  /** Исходник для печати на терминале. Обратная сторона. Ламинация */
  TerminalPrintBackLamination?: File | null;
  PrintFilesMode?: TradeCardsDataEntitiesCardPrintFilesMode;
  Status?: TradeCardsDataEntitiesCardStatus;

  /** Время последнего изменения */
  Updated?: string;

  /** Комментарий к смене статуса */
  Comment?: string | null;

  /** Идентификатор */
  Id?: string | null;

  /** Признак действующая/архивная */
  IsActive?: boolean;

  /** Продано */
  SoldCount?: number;

  /** Можно ли редактировать поля или статус карточки */
  CanEdit?: boolean;

  /** Можно ли перенести карточку в архив */
  CanArchive?: boolean;

  /** Можно ли восстановить карточку из архивных */
  CanRestore?: boolean;

  /** Можно ли удалить карточку */
  CanDelete?: boolean;

  /** Можно ли переносить карточку на другой уровень или изменять ее порядок отображения */
  CanMoveOrReorder?: boolean;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsCardAdminCardBriefModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsCardAdminCardBriefModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Модель получения карточки для редактирования в админке
 */
export interface TradeCardsModelsCardGetCardFullModel {
  /** Идентификатор уровня каталога, к которому привязана карточка */
  CatalogLevelId?: string | null;

  /** Наименование */
  Title?: string | null;

  /** Описание для сайта */
  Description?: string | null;

  /** Описание для терминала */
  TerminalDescription?: string | null;

  /** Тираж */
  PrintCount?: number | null;

  /** Неограниченный тираж */
  Unlimited?: boolean | null;
  PriceModel?: TradeCardsDataEntitiesPriceModelType;

  /** Цена */
  Price?: number | null;

  /** Превью */
  PreviewImage?: string | null;

  /** Лицевая сторона */
  FrontImage?: string | null;

  /** Обратная сторона */
  BackImage?: string | null;

  /** Превью для терминала */
  TerminalPreviewImage?: string | null;

  /** Лицевая сторона для терминала */
  TerminalFrontImage?: string | null;

  /** Обратная сторона для терминала */
  TerminalBackImage?: string | null;

  /** Исходник для печати на терминале. Лицевая сторона. Изображение */
  TerminalPrintFrontImage?: string | null;

  /** Исходник для печати на терминале. Лицевая сторона. Голограмма */
  TerminalPrintFrontHolo?: string | null;

  /** Исходник для печати на терминале. Лицевая сторона. Ламинация */
  TerminalPrintFrontLamination?: string | null;

  /** Исходник для печати на терминале. Обратная сторона. Изображение */
  TerminalPrintBackImage?: string | null;

  /** Исходник для печати на терминале. Обратная сторона. Голограмма */
  TerminalPrintBackHolo?: string | null;

  /** Исходник для печати на терминале. Обратная сторона. Ламинация */
  TerminalPrintBackLamination?: string | null;
  PrintFilesMode?: TradeCardsDataEntitiesCardPrintFilesMode;
  Status?: TradeCardsDataEntitiesCardStatus;

  /** Комментарий к смене статуса */
  Comment?: string | null;

  /** Идентификатор */
  Id?: string | null;

  /** Признак действующая/архивная */
  IsActive?: boolean;

  /** Продано */
  SoldCount?: number;

  /** Дата создания */
  Created?: string;

  /** Индекс карточки в списке карточек уровня каталога */
  Index?: number;

  /** Последнее изменение */
  UpdatedByUserId?: string | null;

  /** Последнее изменение */
  UpdatedBy?: string | null;

  /** Время последнего изменения */
  Updated?: string;

  /** Можно ли редактировать поля карточки (за исключением статуса - возможности по его изменению определяются согласно полю AvailableStatuses) */
  CanEdit?: boolean;

  /** Доступные статусы карточки */
  AvailableStatuses?: TradeCardsDataEntitiesCardStatus[] | null | null;
}

/**
 * Ответ на запрос операции над элементом
 */
export interface TradeCardsModelsItemIdResponse {
  /** Идентификатор */
  Id?: string | null;
}

/**
 * Ответ на запрос детальных данных карточки
 */
export interface TradeCardsModelsHomeGetCardDetailResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Title?: string | null;

  /** Описание для сайта */
  Description?: string | null;

  /** Дата создания */
  Created?: string;

  /** Тираж */
  PrintCount?: number;

  /** Неограниченный тираж */
  Unlimited?: boolean;

  /** Остаток тиража */
  PrintCountLeft?: number;

  /** Цена */
  Price?: number;

  /** Лицевая сторона */
  FrontImage?: string | null;

  /** Обратная сторона */
  BackImage?: string | null;
}

export interface TradeCardsModelsCardCardStatusHistoryRecord {
  /** Идентификатор */
  Id?: string | null;

  /** Карточка */
  CardTitle?: string | null;

  /** Сотрудник */
  UserName?: string | null;

  /** Дата */
  Date?: string;
  Status?: TradeCardsDataEntitiesCardStatus;

  /** Коммент */
  Comment?: string | null;
}

/**
 * Запрос на добавление карточек в корзину
 */
export interface TradeCardsModelsCartAddRowRequest {
  /** Id карточки */
  CardId?: string | null;

  /** Количество добавляемых карточек (если null, добавляем одну) */
  Quantity?: number | null;

  /** Ожидаемая цена карточки, если добавляется одна карточка и необходимо проверить цену */
  ExpectedPrice?: number | null;

  /** Ответ капчи */
  CaptchaResponse?: string | null;
}

/**
 * Ответ с информацией о таймере на бездействие терминала
 */
export interface TradeCardsModelsCartTimerInfoResponse {
  /** Время, когда корзина будет очищена */
  TimeForCartClearing?: string;

  /** Время для показа предупреждения, что корзина будет очищена (если предупреждение не предусмотрено - null) */
  TimeForAlert?: string | null;
}

/**
 * Ответ на добавление карточек в корзину
 */
export interface TradeCardsModelsCartAddRowResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Доступный остаток карточек (null = неограничено) */
  Remaining?: number | null;

  /** Цена следующей карточки */
  NextCardPrice?: number;
  TimerEndingInfo?: TradeCardsModelsCartTimerInfoResponse;
}

export interface TradeCardsModelsCartUpdateRowRequest {
  CardId?: string | null;
  Quantity?: number;
  CaptchaResponse?: string | null;
}

/**
 * Ответ на изменение карточек в корзине
 */
export interface TradeCardsModelsCartUpdateRowResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Доступный остаток карточек (null = неограничено) */
  Remaining?: number | null;

  /** Цена следующей карточки */
  NextCardPrice?: number;
  TimerEndingInfo?: TradeCardsModelsCartTimerInfoResponse;
}

export interface TradeCardsModelsCartDeleteRowRequest {
  CardId?: string | null;
  CaptchaResponse?: string | null;
}

/**
 * Ответ на удаление карточек в корзине
 */
export interface TradeCardsModelsCartDeleteRowResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Доступный остаток карточек (null = неограничено) */
  Remaining?: number | null;

  /** Цена следующей карточки */
  NextCardPrice?: number;
  TimerEndingInfo?: TradeCardsModelsCartTimerInfoResponse;
}

export interface TradeCardsModelsCartDetailRow {
  /** Цена за штуку */
  Price?: number;

  /** Количество */
  Quantity?: number;

  /** Общая цена */
  DetailPrice?: number;
}

/**
 * Строка в корзине пользователя
 */
export interface TradeCardsModelsCartCartRow {
  /** Идентификатор (карточки) */
  Id?: string | null;

  /** Превью */
  PreviewImage?: string | null;

  /** Наименование */
  Title?: string | null;

  /** Путь ( Тематика / Серия / Комплект ) */
  Path?: string | null;
  DetailRows?: TradeCardsModelsCartDetailRow[] | null | null;

  /** Общее количество */
  RowQuantity?: number;

  /** Общая цена */
  RowPrice?: number;
}

/**
 * Тип обратного отсчета до очищения корзины
 */
export type TradeCardsDataEntitiesCountdownTimerType = 0 | 1 | 2;

/**
 * Корзина пользователя
 */
export interface TradeCardsModelsCartCart {
  /** Элементы корзины */
  Rows?: TradeCardsModelsCartCartRow[] | null | null;

  /** Общее количество товаров */
  TotalCount?: number;

  /** Общая стоимость */
  TotalPrice?: number;

  /** Время, по наступлении которого нужно вывести предупреждение, что корзина будет очищена */
  AlertTime?: string | null;

  /** Время, по наступлении которого корзина будет очищена */
  CleanupTime?: string | null;
  CleanupType?: TradeCardsDataEntitiesCountdownTimerType;
}

export interface TradeCardsModelsCartMoveCartRequest {
  CustomerId?: string | null;
}

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogTreeResponseCatalogLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Количество действующих карточек */
  ActiveCards?: number;

  /** Количество архивных карточек */
  ArchiveCards?: number;

  /** Дочерние уровни */
  Children?: TradeCardsModelsCatalogGetCatalogTreeResponseCatalogLevel[] | null | null;
}

/**
 * Ответ на запрос структуры каталога
 */
export interface TradeCardsModelsCatalogGetCatalogTreeResponse {
  /** Тематики */
  Themes?: TradeCardsModelsCatalogGetCatalogTreeResponseCatalogLevel[] | null | null;
}

/**
 * Тип уровня каталога
 */
export type TradeCardsModelsCatalogCatalogLevelType = 0 | 1 | 2;

/**
 * Краткие данные уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponseCatalogLevelBase {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;
}

/**
 * Данные второго родительского уровня (Тематика)
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponseCatalogThirdLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Дочерние уровни */
  Children?: TradeCardsModelsCatalogGetCatalogLevelResponseCatalogLevelBase[] | null | null;
}

/**
 * Данные первого родительского уровня (Серия или Тематика)
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponseCatalogSecondLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;
  Parent?: TradeCardsModelsCatalogGetCatalogLevelResponseCatalogThirdLevel;
}

/**
 * Ответ на запрос данных уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogLevelResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;
  LevelType?: TradeCardsModelsCatalogCatalogLevelType;

  /** Краткое описание */
  ShortDescription?: string | null;

  /** Расширенное описание */
  ExtendedDescription?: string | null;

  /** Изображение */
  Image?: string | null;

  /** Терминал. Изображение для списка тематик */
  TerminalThemeListImage?: string | null;

  /** Терминал. Изображение для списка серий */
  TerminalSeriesListImage?: string | null;

  /** Терминал. Фон */
  TerminalBackgroundImage?: string | null;

  /** Терминал. Изображение для списка коллекций */
  TerminalCollectionsListImage?: string | null;

  /** Терминал. Изображение для списка карточек */
  TerminalCardsListImage?: string | null;
  Parent?: TradeCardsModelsCatalogGetCatalogLevelResponseCatalogSecondLevel;
}

/**
 * Параметры запроса перемещения уровня каталога
 */
export interface TradeCardsModelsCatalogMoveCatalogLevelRequest {
  /** Идентификатор родительского уровня */
  ParentId?: string | null;

  /** Индекс уровня в списке уровней родителя */
  Index?: number;
}

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsCatalogGetCatalogPublishTreeResponseCatalogPublishLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Количество действующих карточек */
  ActiveCards?: number;

  /** Количество архивных карточек */
  ArchiveCards?: number;

  /** Признак публикации на сайте */
  IsPublished?: boolean;

  /** Признак возможности изменения флага публикации на сайте */
  AllowChangeIsPublished?: boolean;

  /** Признак публикации в топе каталога */
  IsPublishedInCatalogTop?: boolean;

  /** Признак публикации в топе первого уровня (тематики) */
  IsPublishedInFirstLevelTop?: boolean;

  /** Признак публикации в топе второго уровня (серии) */
  IsPublishedInSecondLevelTop?: boolean;

  /** Дочерние уровни */
  Children?: TradeCardsModelsCatalogGetCatalogPublishTreeResponseCatalogPublishLevel[] | null | null;
}

/**
 * Ответ на запрос структуры каталога c параметрами публикации
 */
export interface TradeCardsModelsCatalogGetCatalogPublishTreeResponse {
  /** Тематики */
  Themes?: TradeCardsModelsCatalogGetCatalogPublishTreeResponseCatalogPublishLevel[] | null | null;
}

export interface TradeCardsModelsPromoBannerPromoBannerSiteModel {
  Image?: string | null;
  ShowSeconds?: number;
  Link?: string | null;
}

/**
 * Фильтр таблицы списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersTableFilter {
  RegistrationDate?: TradeCardsModelsDateFilter;
  ArchivedDate?: TradeCardsModelsDateFilter;

  /** Имя */
  FirstName?: string | null;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Количество заказов, оформленных пользователем */
  Orders?: number | null;
}

/**
 * Колонки таблицы списка покупателей
 */
export type TradeCardsModelsCustomerGetCustomersTableColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Параметры сортировки таблицы списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersTableSort {
  Column?: TradeCardsModelsCustomerGetCustomersTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersRequest {
  /** Признак запроса активных пользователей */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsCustomerGetCustomersTableFilter;
  SortOrder?: TradeCardsModelsCustomerGetCustomersTableSort;
}

/**
 * Данные пользователя для запроса на получение списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersCustomerModel {
  /** Идентификатор */
  Id?: string | null;

  /** Дата регистрации */
  RegistrationDate?: string;

  /** Дата архивирования */
  ArchivedDate?: string | null;

  /** Имя */
  FirstName?: string | null;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Количество заказов, оформленных пользователем */
  Orders?: number;
}

/**
 * Ответ на запрос на получение списка покупателей
 */
export interface TradeCardsModelsCustomerGetCustomersResponse {
  /** Покупатели */
  Customers?: TradeCardsModelsCustomerGetCustomersCustomerModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Ответ на запрос получения данных пользователя
 */
export interface TradeCardsModelsCustomerGetCustomerResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Дата регистрации */
  RegistrationDate?: string;

  /** Дата архивирования */
  ArchivedDate?: string | null;

  /** Имя */
  FirstName?: string | null;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Пароль */
  Password?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Признак активности пользователя */
  IsActive?: boolean;

  /** Почта подтверждена */
  IsEmailConfirmed?: boolean;
  DeliveryRegion?: string | null;
  DeliveryCity?: string | null;
  DeliveryPostIndex?: string | null;
  DeliveryStreet?: string | null;
  DeliveryHouse?: string | null;
  DeliveryBuilding?: string | null;
  DeliveryApartment?: string | null;
}

/**
 * Параметры запроса на регистрацию покупателя
 */
export interface TradeCardsModelsAccountRegisterCustomerRequest {
  /** Имя */
  FirstName: string;

  /** Фамилия */
  LastName?: string | null;

  /** Email */
  Email: string;

  /** Пароль */
  Password: string;

  /** Номер телефона */
  PhoneNumber?: string | null;
}

export interface TradeCardsModelsCustomerEmployeeOrderModelRow {
  Title?: string | null;
  Price?: number;
  Quantity?: number;
  Sum?: number;
}

/**
 * Статус заказа
 */
export type TradeCardsDataEntitiesOrderStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

/**
 * Информация о заказе для списка заказов в профиле (одна структура для активных и неактивных)
 */
export interface TradeCardsModelsCustomerEmployeeOrderModel {
  Id?: number;
  CreateDate?: string;
  Rows?: TradeCardsModelsCustomerEmployeeOrderModelRow[] | null | null;
  TotalPrice?: number;
  Status?: TradeCardsDataEntitiesOrderStatus;
  StatusDate?: string;
}

export interface TradeCardsModelsCustomerGetCustomerActiveOrdersResponse {
  Orders?: TradeCardsModelsCustomerEmployeeOrderModel[] | null | null;
}

export interface TradeCardsModelsCustomerGetCustomerFinishedOrdersRequest {
  Year?: number | null;
  Themes?: string[] | null | null;
}

export interface TradeCardsModelsCustomerGetCustomerFinishedOrdersResponseTheme {
  Id?: string | null;
  Name?: string | null;
}

export interface TradeCardsModelsCustomerGetCustomerFinishedOrdersResponse {
  Years?: number[] | null | null;
  Themes?: TradeCardsModelsCustomerGetCustomerFinishedOrdersResponseTheme[] | null | null;
  Orders?: TradeCardsModelsCustomerEmployeeOrderModel[] | null | null;
}

/**
 * Типы шаблонов писем
 */
export type TradeCardsModelsMessageEmailTemplateTypeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * Ответ на запрос шаблона письма
 */
export interface TradeCardsModelsMessageGetEmailTemplateResponse {
  /** Текст сообщения */
  Message?: string | null;
}

/**
 * Запрос на изменение шаблона письма
 */
export interface TradeCardsModelsMessageUpdateEmailTemplateRequest {
  /** Текст сообщения */
  Message?: string | null;
}

/**
 * Фильтр таблицы списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesTableFilter {
  CreationDate?: TradeCardsModelsDateFilter;
  ArchivedDate?: TradeCardsModelsDateFilter;

  /** Имя */
  FirstName?: string | null;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;
}

/**
 * Колонки таблицы списка сотрудников
 */
export type TradeCardsModelsEmployeeGetEmployeesTableColumn = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Параметры сортировки таблицы списка покупателей
 */
export interface TradeCardsModelsEmployeeGetEmployeesTableSort {
  Column?: TradeCardsModelsEmployeeGetEmployeesTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesRequest {
  /** Признак запроса активных пользователей */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsEmployeeGetEmployeesTableFilter;
  SortOrder?: TradeCardsModelsEmployeeGetEmployeesTableSort;
}

/**
 * Данные пользователя для запроса на получение списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesEmployeeModel {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreationDate?: string;

  /** Дата архивирования */
  ArchivedDate?: string | null;

  /** Имя */
  FirstName?: string | null;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Признак системного пользователя (нельзя отправить в архив) */
  IsSystem?: boolean;
}

/**
 * Ответ на запрос получения списка сотрудников
 */
export interface TradeCardsModelsEmployeeGetEmployeesResponse {
  /** Сотрудники */
  Employees?: TradeCardsModelsEmployeeGetEmployeesEmployeeModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

export interface TradeCardsModelsEmployeeEmployeeRoleModel {
  Target?: TradeCardsModelsEmployeeEmployeeRoleTarget;
  Access?: TradeCardsModelsEmployeeEmployeeRoleAccess;
}

/**
 * Ответ на запрос данных пользователя
 */
export interface TradeCardsModelsEmployeeGetEmployeeResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreationDate?: string;

  /** Дата архивирования */
  ArchivedDate?: string | null;

  /** Имя */
  FirstName?: string | null;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Пароль */
  Password?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Должность */
  Position?: string | null;

  /** Признак активности пользователя */
  IsActive?: boolean;

  /** Признак системного пользователя (нельзя отправить в архив) */
  IsSystem?: boolean;

  /** Список включенных ролей для пользователя */
  Roles?: TradeCardsModelsEmployeeEmployeeRoleModel[] | null | null;
}

/**
 * Параметры запроса обновление данных сотрудника
 */
export interface TradeCardsModelsEmployeeUpdateEmployeeRequest {
  /** Имя */
  FirstName: string;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Пароль пользователя */
  Password?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Должность */
  Position?: string | null;

  /** Список включенных ролей для пользователя */
  Roles?: TradeCardsModelsEmployeeEmployeeRoleModel[] | null | null;
}

/**
 * Параметры запроса на регистрацию сотрудника
 */
export interface TradeCardsModelsAccountRegisterEmployeeRequest {
  /** Имя */
  FirstName: string;

  /** Фамилия */
  LastName?: string | null;

  /** Почта пользователя */
  Email?: string | null;

  /** Пароль пользователя */
  Password?: string | null;

  /** Номер телефона */
  PhoneNumber?: string | null;

  /** Должность */
  Position?: string | null;

  /** Список включенных ролей для пользователя */
  Roles?: TradeCardsModelsEmployeeEmployeeRoleModel[] | null | null;
}

export interface TradeCardsModelsGeoSearchResponse {
  Longitude?: number;
  Latitude?: number;
}

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Дочерние уровни */
  Children?: TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel[] | null | null;
}

/**
 * Ссылка на текстовую страницу
 */
export interface TradeCardsModelsHomeTextPageMenuModel {
  LogicalName?: string | null;
  Title?: string | null;
}

/**
 * Ответ на запрос главного меню для сайта
 */
export interface TradeCardsModelsHomeGetMenuResponse {
  /** Список тематик */
  Themes?: TradeCardsModelsHomeGetMenuResponseCatalogMenuLevel[] | null | null;
  Pages?: TradeCardsModelsHomeTextPageMenuModel[] | null | null;
}

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogTopLevelsResponseCatalogTopLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;
  LevelType?: TradeCardsModelsCatalogCatalogLevelType;

  /** Краткое описание */
  ShortDescription?: string | null;

  /** Изображение */
  Image?: string | null;
}

/**
 * Ответ на запрос топовых уровней каталога
 */
export interface TradeCardsModelsHomeGetCatalogTopLevelsResponse {
  /** Топовые уровни */
  TopLevels?: TradeCardsModelsHomeGetCatalogTopLevelsResponseCatalogTopLevel[] | null | null;
}

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;
  LevelType?: TradeCardsModelsCatalogCatalogLevelType;

  /** Краткое описание */
  ShortDescription?: string | null;

  /** Изображение */
  Image?: string | null;

  /** Топовые дочерние уровни */
  TopLevels?: TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel[] | null | null;
}

/**
 * Данные карточки
 */
export interface TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailCard {
  /** Идентификатор */
  Id?: string | null;

  /** Индекс карточки в списке карточек уровня каталога */
  Index?: number;

  /** Наименование */
  Title?: string | null;

  /** Тираж */
  PrintCount?: number;

  /** Неограниченный тираж */
  Unlimited?: boolean;

  /** Цена */
  Price?: number;

  /** Изображение */
  Image?: string | null;
}

/**
 * Ответ на запрос подробных данных уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogLevelDetailResponse {
  /** Наименование */
  Name?: string | null;
  LevelType?: TradeCardsModelsCatalogCatalogLevelType;

  /** Расширенное описание */
  ExtendedDescription?: string | null;

  /** Изображение */
  Image?: string | null;

  /** Топовые дочерние уровни */
  TopLevels?: TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailTopLevel[] | null | null;

  /** Карточки */
  Cards?: TradeCardsModelsHomeGetCatalogLevelDetailResponseCatalogLevelDetailCard[] | null | null;
}

/**
 * Данные уровня каталога
 */
export interface TradeCardsModelsHomeGetCatalogChildrenResponseCatalogLevel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;
  LevelType?: TradeCardsModelsCatalogCatalogLevelType;

  /** Краткое описание */
  ShortDescription?: string | null;

  /** Изображение */
  Image?: string | null;
}

/**
 * Ответ на запрос списка подуровней
 */
export interface TradeCardsModelsHomeGetCatalogChildrenResponse {
  /** Уровни */
  Levels?: TradeCardsModelsHomeGetCatalogChildrenResponseCatalogLevel[] | null | null;
}

/**
 * Фильтр списка карточек для тематики
 */
export interface TradeCardsModelsCardGetThemeCardsFilter {
  /** Показывать закончившиеся */
  ShowSoldOut?: boolean;
}

/**
 * Колонки списка карточек для тематики
 */
export type TradeCardsModelsCardGetThemeCardsColumn = 0 | 1;

/**
 * Параметры сортировки таблицы списка карточек
 */
export interface TradeCardsModelsCardGetThemeCardsSort {
  Column?: TradeCardsModelsCardGetThemeCardsColumn;
}

/**
 * Параметры запроса на получение списка карточек
 */
export interface TradeCardsModelsGetItemsRequest2TradeCardsModelsCardGetThemeCardsFilterTradeCardsVersion1000CultureNeutralPublicKeyTokenNullTradeCardsModelsCardGetThemeCardsSortTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Признак запроса активных */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsCardGetThemeCardsFilter;
  SortOrder?: TradeCardsModelsCardGetThemeCardsSort;
}

/**
 * Модель получения карточки для сайта
 */
export interface TradeCardsModelsCardSiteThemeCardModel {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Title?: string | null;

  /** Тираж */
  PrintCount?: number;

  /** Неограниченный тираж */
  Unlimited?: boolean;

  /** Остаток тиража */
  PrintCountLeft?: number;

  /** Цена */
  Price?: number;

  /** Превью */
  PreviewImage?: string | null;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsCardSiteThemeCardModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsCardSiteThemeCardModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Фильтр таблицы списка юр. лиц
 */
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter {
  CreateDate?: TradeCardsModelsDateFilter;
  ArchiveDate?: TradeCardsModelsDateFilter;

  /** Наименование */
  Name?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Количество терминалов */
  TerminalsCount?: number | null;

  /** Количество пунктов самовывоза */
  PickupPointsCount?: number | null;
}

/**
 * Колонки таблицы списка юр.лиц
 */
export type TradeCardsModelsLegalEntitiesGetLegalEntitiesTableColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * Параметры сортировки таблицы юр. лиц
 */
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesTableSort {
  Column?: TradeCardsModelsLegalEntitiesGetLegalEntitiesTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка карточек
 */
export interface TradeCardsModelsGetItemsRequest2TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilterTradeCardsVersion1000CultureNeutralPublicKeyTokenNullTradeCardsModelsLegalEntitiesGetLegalEntitiesTableSortTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Признак запроса активных */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter;
  SortOrder?: TradeCardsModelsLegalEntitiesGetLegalEntitiesTableSort;
}

/**
 * Строка таблицы списка юр. лиц
 */
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesBriefModel {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Дата архивирования */
  ArchiveDate?: string | null;

  /** Наименование */
  Name?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Количество терминалов */
  TerminalsCount?: number;

  /** Количество терминалов */
  PickupPointsCount?: number;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsLegalEntitiesGetLegalEntitiesBriefModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsLegalEntitiesGetLegalEntitiesBriefModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Базовое описание юр. лица
 */
export interface TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Наименование */
  Name?: string | null;

  /** Адрес офиса */
  OfficeAddress?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Электронная почта */
  Email?: string | null;

  /** Пароль */
  Password?: string | null;
}

/**
 * Запрос на создание юридического лица
 */
export interface TradeCardsModelsLegalEntitiesTabsRequestCreateLegalEntityRequest {
  /** Наименование */
  Name?: string | null;

  /** Адрес офиса */
  OfficeAddress?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Электронная почта */
  Email?: string | null;

  /** Пароль */
  Password?: string | null;
}

/**
 * Запрос на обновление базового описания юр. лица
 */
export interface TradeCardsModelsLegalEntitiesTabsRequestUpdateLegalEntityBasicInfoRequest {
  /** Наименование */
  Name?: string | null;

  /** Адрес офиса */
  OfficeAddress?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Электронная почта */
  Email?: string | null;

  /** Пароль */
  Password?: string | null;
}

/**
 * Группы редактируемых сообщений
 */
export type TradeCardsModelsMessageMessageGroupEnum =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

/**
 * Подгруппа редактируемых текстов
 */
export interface TradeCardsModelsMessageGetMessageGroupTreeResponseMessageSubgroup {
  Id?: TradeCardsModelsMessageMessageGroupEnum;

  /** Наименование группы */
  Name?: string | null;
}

/**
 * Группа редактируемых текстов
 */
export interface TradeCardsModelsMessageGetMessageGroupTreeResponseMessageGroup {
  /** Наименование группы */
  Name?: string | null;

  /** Сортированный список подгрупп */
  Subgroups?: TradeCardsModelsMessageGetMessageGroupTreeResponseMessageSubgroup[] | null | null;
}

/**
 * Ответ на запрос получения дерева групп текстов
 */
export interface TradeCardsModelsMessageGetMessageGroupTreeResponse {
  /** Группы редактируемых текстов */
  Groups?: TradeCardsModelsMessageGetMessageGroupTreeResponseMessageGroup[] | null | null;
}

/**
 * Типы редактируемых сообщений
 */
export type TradeCardsModelsMessageMessageTypeEnum =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58;

/**
 * Редактируемое сообщение
 */
export interface TradeCardsModelsMessageGetMessageGroupResponseMessage {
  Id?: TradeCardsModelsMessageMessageTypeEnum;

  /** Заголовок сообщения */
  Title?: string | null;

  /** Текст сообщения */
  Text?: string | null;
}

/**
 * Ответ на запрос группы редактируемых сообщений
 */
export interface TradeCardsModelsMessageGetMessageGroupResponse {
  /** Сортированный список редактируемых сообщений */
  Messages?: TradeCardsModelsMessageGetMessageGroupResponseMessage[] | null | null;
}

/**
 * Отредактированное сообщение
 */
export interface TradeCardsModelsMessageUpdateMessageGroupRequestMessageUpdate {
  Id?: TradeCardsModelsMessageMessageTypeEnum;

  /** Текст сообщения */
  Text?: string | null;
}

/**
 * Запрос на изменение сообщений группы
 */
export interface TradeCardsModelsMessageUpdateMessageGroupRequest {
  /** Список отредактированных сообщений */
  Messages?: TradeCardsModelsMessageUpdateMessageGroupRequestMessageUpdate[] | null | null;
}

/**
 * Тип доставки заказа
 */
export type TradeCardsDataEntitiesDeliveryType = 0 | 1 | 2;

/**
 * Модель создания заказа клиентом
 */
export interface TradeCardsModelsOrderPlaceOrderRequest {
  Phone?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  Email?: string | null;
  DeliveryType?: TradeCardsDataEntitiesDeliveryType;
  DeliveryRegion?: string | null;
  DeliveryCity?: string | null;
  DeliveryPostIndex?: string | null;
  DeliveryStreet?: string | null;
  DeliveryHouse?: string | null;
  DeliveryBuilding?: string | null;
  DeliveryApartment?: string | null;
  DeliveryPickupPointId?: string | null;
  Comment?: string | null;
  TotalPrice?: number;
  CreateAccount?: boolean;
}

export interface TradeCardsModelsOrderPlaceOrderResponse {
  InvoiceId?: string | null;
  InvoiceAccessToken?: string | null;
}

export type TradeCardsModelsOrderFilterOrdersFeed = 0 | 1 | 2 | 3;

/**
 * Фильтр таблицы списка заказов
 */
export interface TradeCardsModelsOrderGetOrdersTableFilter {
  Id?: number | null;
  CreateDate?: TradeCardsModelsDateFilter;
  CustomerName?: string | null;
  CustomerEmail?: string | null;
  ItemsCount?: number | null;
  TotalPrice?: number | null;
  Status?: TradeCardsDataEntitiesOrderStatus;
  Feed?: TradeCardsModelsOrderFilterOrdersFeed;
  DeliveryType?: TradeCardsDataEntitiesDeliveryType;
  PickPointId?: string | null;
}

/**
 * Колонки таблицы списка заказов
 */
export type TradeCardsModelsOrderGetOrdersTableColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Параметры сортировки таблицы списка карточек
 */
export interface TradeCardsModelsOrderGetOrdersTableSort {
  Column?: TradeCardsModelsOrderGetOrdersTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка карточек
 */
export interface TradeCardsModelsGetItemsRequest2TradeCardsModelsOrderGetOrdersTableFilterTradeCardsVersion1000CultureNeutralPublicKeyTokenNullTradeCardsModelsOrderGetOrdersTableSortTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Признак запроса активных */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsOrderGetOrdersTableFilter;
  SortOrder?: TradeCardsModelsOrderGetOrdersTableSort;
}

/**
 * Краткие сведения о заказе для списка заказов
 */
export interface TradeCardsModelsOrderOrderBriefModel {
  Id?: number;
  CreateDate?: string;
  CustomerId?: string | null;
  CustomerName?: string | null;
  CustomerEmail?: string | null;
  ItemsCount?: number;
  TotalPrice?: number;
  Status?: TradeCardsDataEntitiesOrderStatus;
  StatusDate?: string;
  DeliveryType?: string | null;
  PickpointId?: string | null;
  PickpointName?: string | null;
  PickpointAddress?: string | null;

  /** Печатается ли заказ в настоящий момент */
  IsPrinting?: boolean;
  IsGuest?: boolean;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsOrderOrderBriefModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsOrderOrderBriefModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

export interface TradeCardsModelsOrderOrderDataModelOrderRow {
  Title?: string | null;
  Path?: string | null;
  Price?: number;
  Quantity?: number;
}

/**
 * Список позиций заказа для быстрого просмотра из списка заказов
 */
export interface TradeCardsModelsOrderOrderDataModel {
  Items?: TradeCardsModelsOrderOrderDataModelOrderRow[] | null | null;
  TotalPrice?: number;
}

/**
 * Модель перехода к подготовке к печати заказов (в админке)
 */
export interface TradeCardsModelsOrderStartPrintPreparingModel {
  OrderIds?: number[] | null | null;
}

/**
 * Статус сессии печати
 */
export type TradeCardsDataEntitiesPrintSessionStatus = 0 | 1 | 2;

export interface TradeCardsModelsOrderPickupPointOrderModel {
  Id?: string | null;
  Name?: string | null;
  Address?: string | null;
  Phones?: string | null;
  Schedule?: string | null;
  Comment?: string | null;
  Latitude?: number;
  Longitude?: number;
  ActiveIcon?: string | null;
  InactiveIcon?: string | null;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsOrderPickupPointOrderModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsOrderPickupPointOrderModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

export interface TradeCardsModelsOrderGetOrderDetailsForEmployeeResponseRow {
  PreviewImage?: string | null;
  Title?: string | null;
  Path?: string | null;
  Price?: number;
  Quantity?: number;
  Sum?: number;
  Status?: string | null;
}

export interface TradeCardsModelsListItem1TradeCardsDataEntitiesOrderStatusTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  Name?: string | null;
  Value?: TradeCardsDataEntitiesOrderStatus;
}

export interface TradeCardsModelsOrderGetOrderDetailsForEmployeeResponse {
  Id?: string | null;
  CreateDate?: string;
  Rows?: TradeCardsModelsOrderGetOrderDetailsForEmployeeResponseRow[] | null | null;
  TotalPrice?: number;
  DeliveryType?: TradeCardsDataEntitiesDeliveryType;
  PickPointName?: string | null;
  PickPointAddress?: string | null;
  PickPointPhones?: string | null;
  PickPointSchedule?: string | null;
  PickPointComment?: string | null;
  DeliveryRegion?: string | null;
  DeliveryCity?: string | null;
  DeliveryPostIndex?: string | null;
  DeliveryStreet?: string | null;
  DeliveryHouse?: string | null;
  DeliveryBuilding?: string | null;
  DeliveryApartment?: string | null;
  Comment?: string | null;
  Status?: TradeCardsDataEntitiesOrderStatus;
  StatusComment?: string | null;
  StatusDate?: string;
  CustomerName?: string | null;
  CustomerLastName?: string | null;
  CustomerEmail?: string | null;
  CustomerPhone?: string | null;
  ShowProcessingBlock?: boolean;
  IsFinished?: boolean;
  AvailableStatuses?:
    | TradeCardsModelsListItem1TradeCardsDataEntitiesOrderStatusTradeCardsVersion1000CultureNeutralPublicKeyTokenNull[]
    | null
    | null;
}

export interface TradeCardsModelsOrderGetPaymentStatusRequest {
  InvoiceId?: string | null;
}

export interface TradeCardsModelsOrderGetPaymentStatusResponse {
  Status?: string | null;
}

/**
 * Параметры запроса на получение списка ПС
 */
export interface TradeCardsModelsPickupPointGetPickupPointsRequest {
  /** Признак запроса активных ПС */
  IsActive?: boolean;

  /** Id собственника ПС */
  OwnerId?: string | null;
}

/**
 * Модель пункта самовывоза (краткая, для списка пунктов в админке)
 */
export interface TradeCardsModelsPickupPointPickupPointBriefModel {
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Адрес */
  Address?: string | null;

  /** Доступность для заказа */
  IsAvailable?: boolean;

  /** Является офисом */
  IsOffice?: boolean;
}

/**
 * Модель пункта самовывоза (для админки)
 */
export interface TradeCardsModelsPickupPointPickupPointModel {
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Адрес */
  Address?: string | null;

  /** Широта */
  Latitude?: number | null;

  /** Долгота */
  Longitude?: number | null;

  /** Если true, то координаты установлены вручную (не по адресу) */
  ManualCoordinates?: boolean;

  /** Телефоны */
  Phones?: string | null;

  /** Время работы */
  Schedule?: string | null;

  /** Дополнительно */
  Comment?: string | null;

  /** Доступность для заказа */
  IsAvailable?: boolean;

  /** Является офисом */
  IsOffice?: boolean;

  /** Привязанный сотрудник. Email */
  EmployeeEmail?: string | null;

  /** Привязанный сотрудник. Пароль */
  EmployeePassword?: string | null;
}

/**
 * Параметры запроса на получение списка собственников ПС
 */
export interface TradeCardsModelsPickupPointGetPickupPointsOwnersRequest {
  /** Признак запроса активных собственников ПС */
  IsActive?: boolean;
}

/**
 * Модель собственника пункта самовывоза (краткая, для списка пунктов в админке)
 */
export interface TradeCardsModelsPickupPointPickupPointsOwnerBriefModel {
  Id?: string | null;
  Index?: number;

  /** Дата архивирования */
  ArchiveDate?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Наименование ("Собственник пунктов") */
  Name?: string | null;

  /** Количество пунктов самовывоза */
  PickupPointsCount?: number;
}

/**
 * Модель собственника пункта самовывоза (полная, для редактирования в админке)
 */
export interface TradeCardsModelsPickupPointPickupPointsOwnerModel {
  Id?: string | null;

  /** Признак действующий/архивный */
  IsActive?: boolean;

  /** Дата создания */
  CreateDate?: string;

  /** Наименование ("Собственник пунктов") */
  Name?: string | null;

  /** Иконка для карты неактивная */
  MapIconInactive?: string | null;

  /** Иконка для карты активная */
  MapIconActive?: string | null;

  /** Имя контактного лица */
  ContactFirstName?: string | null;

  /** Фамилия контактного лица */
  ContactLastName?: string | null;

  /** Должность контактного лица */
  ContactPost?: string | null;

  /** Email контактного лица */
  ContactEmail?: string | null;

  /** Телефон контактного лица */
  ContactPhone?: string | null;
}

export type TradeCardsModelsPPMOrderFilterOrdersFeed = 0 | 1 | 2;

/**
 * Фильтр таблицы списка заказов
 */
export interface TradeCardsModelsPPMOrderGetOrdersTableFilter {
  Id?: number | null;
  CustomerName?: string | null;
  CustomerEmail?: string | null;
  CustomerPhone?: string | null;
  ItemsCount?: number | null;
  TotalPrice?: number | null;
  Status?: TradeCardsDataEntitiesOrderStatus;
  Feed?: TradeCardsModelsPPMOrderFilterOrdersFeed;
}

/**
 * Колонки таблицы списка заказов
 */
export type TradeCardsModelsPPMOrderGetOrdersTableColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Параметры сортировки таблицы списка карточек
 */
export interface TradeCardsModelsPPMOrderGetOrdersTableSort {
  Column?: TradeCardsModelsPPMOrderGetOrdersTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка карточек
 */
export interface TradeCardsModelsGetItemsRequest2TradeCardsModelsPPMOrderGetOrdersTableFilterTradeCardsVersion1000CultureNeutralPublicKeyTokenNullTradeCardsModelsPPMOrderGetOrdersTableSortTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Признак запроса активных */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsPPMOrderGetOrdersTableFilter;
  SortOrder?: TradeCardsModelsPPMOrderGetOrdersTableSort;
}

/**
 * Краткие сведения о заказе для списка заказов
 */
export interface TradeCardsModelsPPMOrderOrderBriefModel {
  Id?: number;
  CustomerId?: string | null;
  CustomerName?: string | null;
  CustomerEmail?: string | null;
  CustomerPhone?: string | null;
  ItemsCount?: number;
  TotalPrice?: number;
  Status?: TradeCardsDataEntitiesOrderStatus;
  StatusDate?: string | null;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsPPMOrderOrderBriefModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsPPMOrderOrderBriefModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Запрос на перевод одного или нескольких заказов в статус "Ожидает выдачи"
 */
export interface TradeCardsModelsPPMOrderSetAwaitingDeliveryRequest {
  OrderIds?: number[] | null | null;
  Comment?: string | null;
}

export interface TradeCardsModelsPPMOrderGetOrderDetailsResponseRow {
  PreviewImage?: string | null;
  Title?: string | null;
  Path?: string | null;
  Price?: number;
  Quantity?: number;
  Sum?: number;
}

export interface TradeCardsModelsPPMOrderGetOrderDetailsResponse {
  Id?: string | null;
  CreateDate?: string;
  Rows?: TradeCardsModelsPPMOrderGetOrderDetailsResponseRow[] | null | null;
  TotalPrice?: number;
  Status?: TradeCardsDataEntitiesOrderStatus;
  StatusComment?: string | null;
  StatusDate?: string;
  CustomerName?: string | null;
  CustomerLastName?: string | null;
  CustomerEmail?: string | null;
  CustomerPhone?: string | null;
  ShowProcessingBlock?: boolean;
  AvailableStatuses?:
    | TradeCardsModelsListItem1TradeCardsDataEntitiesOrderStatusTradeCardsVersion1000CultureNeutralPublicKeyTokenNull[]
    | null
    | null;
}

/**
 * Задание на печать
 */
export interface TradeCardsModelsPrintAgentPrintTask {
  /** ID задачи */
  Id?: string | null;

  /** Серийный номер принтера, который должен ее напечатать */
  PrinterSerialNumber?: string | null;
}

export interface TradeCardsModelsPrintAgentPrinterInfo {
  SerialHex?: string | null;
  Status?: number;
  LifeTime?: number;
  RemainingRibbon?: number;
  Sublimate?: number;
  Hologram?: number;
}

/**
 * Информация о принтере (для админки, раздел "Настройки -> Принтеры")
 */
export interface TradeCardsModelsPrintersPrinter {
  /** Id в базе */
  Id?: string | null;

  /** Серийный номер */
  SerialHex?: string | null;

  /** Имя принтера */
  Name?: string | null;

  /** Текущий статус принтера */
  Status?: string | null;

  /** Дата статуса принтера */
  StatusDate?: string;

  /** Ссылка на скачивание загруженного файла входного цветового профиля */
  InProfileUrl?: string | null;

  /** Ссылка на скачивание загруженного файла выходного цветового профиля */
  OutProfileUrl?: string | null;

  /** Доступна ли тестовая печать */
  CanDoTestPrint?: boolean;

  /** Пробег */
  LifeTime?: number;

  /** Остаток (карточек?) */
  RemainingRibbon?: number;

  /** Краска */
  Sublimate?: number;

  /** Голографическая пленка */
  Hologram?: number;
}

/**
 * Статус печати тестовой карточки
 */
export type TradeCardsDataEntitiesTestPrintTaskStatus = 0 | 1 | 2 | 3;

/**
 * Текущее состояние тестовой печати для конкретного принтера
 */
export interface TradeCardsModelsPrintersTestPrintStateModel {
  /** ID задачи на печать, если таковая существует */
  TaskId?: string | null;
  Status?: TradeCardsDataEntitiesTestPrintTaskStatus;

  /** Текст ошибки */
  Error?: string | null;

  /** Можно ли начать новую задачу */
  CanStartTestPrint?: boolean;
}

/**
 * Информация о принтере (для админки, раздел "Заказы - подготовка к печати")
 */
export interface TradeCardsModelsPrintingPreparationPrinter {
  Id?: string | null;
  Name?: string | null;
  Status?: string | null;
  IsReady?: boolean;
  LifeTime?: number;
  RemainingRibbon?: number;
  Sublimate?: number;
  Hologram?: number;
}

/**
 * Статус печати карточки
 */
export type TradeCardsDataEntitiesPrintSessionCardStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface TradeCardsModelsPrintingPrintPreparationModelCard {
  Id?: string | null;
  Number?: string | null;
  Name?: string | null;
  Path?: string | null;
  Printer?: string | null;
  Status?: TradeCardsDataEntitiesPrintSessionCardStatus;
  StatusText?: string | null;
  StatusDescription?: string | null;
}

export interface TradeCardsModelsPrintingPrintPreparationModelOrder {
  Id?: number;
  Printer?: string | null;
  Status?: string | null;
  Cards?: TradeCardsModelsPrintingPrintPreparationModelCard[] | null | null;
}

export interface TradeCardsModelsPrintingPrintPreparationModel {
  Printers?: TradeCardsModelsPrintingPreparationPrinter[] | null | null;
  Orders?: TradeCardsModelsPrintingPrintPreparationModelOrder[] | null | null;
}

/**
 * Запрос на редактирование списка выбранных принтеров
 */
export interface TradeCardsModelsPrintingSelectPrintersRequest {
  /** Выбранные принтеры для печати */
  Printers?: string[] | null | null;
}

/**
 * Информация о принтере (для админки, раздел "Заказы - процесс печати")
 */
export interface TradeCardsModelsPrintingPrintingPrinter {
  Id?: string | null;
  Name?: string | null;
  Status?: string | null;
  IsReady?: boolean;
  LifeTime?: number;
  RemainingRibbon?: number;
  Sublimate?: number;
  Hologram?: number;
  ReadyCards?: number;
  TotalCards?: number;
  CanStop?: boolean;
  IsSelected?: boolean;
}

export interface TradeCardsModelsPrintingPrintProcessModelCard {
  Id?: string | null;
  Number?: string | null;
  Name?: string | null;
  Path?: string | null;
  PrinterName?: string | null;
  Status?: TradeCardsDataEntitiesPrintSessionCardStatus;
  StatusText?: string | null;
  StatusDescription?: string | null;
}

export interface TradeCardsModelsPrintingPrintProcessModelOrder {
  Id?: number;
  PrinterName?: string | null;
  Status?: string | null;
  Cards?: TradeCardsModelsPrintingPrintProcessModelCard[] | null | null;
}

export interface TradeCardsModelsPrintingPrintProcessModel {
  /** Информация о состоянии принтеров */
  Printers?: TradeCardsModelsPrintingPrintingPrinter[] | null | null;

  /** Информация о печатающихся заказах */
  Orders?: TradeCardsModelsPrintingPrintProcessModelOrder[] | null | null;

  /** Можно ли остановить все принтеры (т.е. есть ли хотя бы у одного принтера не начатые задания на печать) */
  CanStopAll?: boolean;

  /** Можно ли завершить сессию печати. Все карточки должны быть напечатаны */
  CanFinish?: boolean;

  /** Запрошено экстренное завершение сессии */
  ForceShutdownRequested?: boolean;
}

export interface TradeCardsModelsPrintingStartPrintingRequestCard {
  Id?: string | null;
  Printer?: string | null;
}

export interface TradeCardsModelsPrintingStartPrintingRequestOrder {
  Id?: number;
  Printer?: string | null;
  Cards?: TradeCardsModelsPrintingStartPrintingRequestCard[] | null | null;
}

/**
 * Запрос на запуск печати
 */
export interface TradeCardsModelsPrintingStartPrintingRequest {
  /** Список заказов для печати */
  Orders?: TradeCardsModelsPrintingStartPrintingRequestOrder[] | null | null;

  /** Выбранные принтеры для печати */
  Printers?: string[] | null | null;
}

/**
 * Запрос на изменение статуса печати карточки
 */
export interface TradeCardsModelsPrintingChangeCardStatusRequest {
  Comment?: string | null;
}

/**
 * Запрос на повторную печать карточки
 */
export interface TradeCardsModelsPrintingReprintCardRequest {
  PrinterId?: string | null;
}

/**
 * Результат команды на экстренное завершение
 */
export interface TradeCardsModelsPrintingForceShutdownResponse {
  IsImmediate?: boolean;
}

/**
 * Ответ на запрос данных профиля покупателя
 */
export interface TradeCardsModelsProfileGetProfileDataResponse {
  FirstName?: string | null;
  LastName?: string | null;
  Email?: string | null;
  PhoneNumber?: string | null;
  DeliveryRegion?: string | null;
  DeliveryCity?: string | null;
  DeliveryPostIndex?: string | null;
  DeliveryStreet?: string | null;
  DeliveryHouse?: string | null;
  DeliveryBuilding?: string | null;
  DeliveryApartment?: string | null;
}

export interface TradeCardsModelsProfileProfileOrderModelRow {
  Title?: string | null;
  Price?: number;
  Quantity?: number;
  Sum?: number;
}

/**
 * Информация о заказе для списка заказов в профиле (одна структура для активных и неактивных)
 */
export interface TradeCardsModelsProfileProfileOrderModel {
  Id?: number;
  CreateDate?: string;
  Rows?: TradeCardsModelsProfileProfileOrderModelRow[] | null | null;
  TotalPrice?: number;
  Status?: string | null;
  StatusDate?: string;
}

export interface TradeCardsModelsProfileGetActiveOrdersResponse {
  Orders?: TradeCardsModelsProfileProfileOrderModel[] | null | null;
}

export interface TradeCardsModelsProfileGetOrderDetailsResponseRow {
  Id?: string | null;
  PreviewImage?: string | null;
  Title?: string | null;
  Path?: string | null;
  Price?: number;
  Quantity?: number;
  Sum?: number;
}

export interface TradeCardsModelsProfileGetOrderDetailsResponse {
  Id?: string | null;
  Rows?: TradeCardsModelsProfileGetOrderDetailsResponseRow[] | null | null;
  TotalPrice?: number;
  DeliveryType?: TradeCardsDataEntitiesDeliveryType;

  /** адрес для доставки транспортной компанией, либо адрес пункта самовывоза, либо адрес терминала */
  Address?: string[] | null | null;

  /** расписание (заполняется только для пункта самовывоза) */
  Schedule?: string | null;
  Comment?: string | null;
  Status?: string | null;
  StatusDate?: string;
}

export interface TradeCardsModelsProfileGetProfileFinishedOrdersRequest {
  Year?: number | null;
  Themes?: string[] | null | null;
}

export interface TradeCardsModelsProfileGetFinishedOrdersResponseTheme {
  Id?: string | null;
  Name?: string | null;
}

export interface TradeCardsModelsProfileGetFinishedOrdersResponse {
  Years?: number[] | null | null;
  Themes?: TradeCardsModelsProfileGetFinishedOrdersResponseTheme[] | null | null;
  Orders?: TradeCardsModelsProfileProfileOrderModel[] | null | null;
}

/**
 * Админка. Модель для списка промо баннеров
 */
export interface TradeCardsModelsPromoBannerPromoBannerModel {
  Id?: string | null;

  /** Показывать на сайте */
  Show?: boolean;

  /** Дата публикации. От */
  ShowFrom?: string | null;

  /** Дата публикации. До */
  ShowTo?: string | null;

  /** Длительность показа (сек) */
  ShowSeconds?: number | null;

  /** Ссылка */
  Link?: string | null;

  /** Ссылка на изображение баннера */
  Image?: string | null;
}

/**
 * Админка. Модель для сохранения инфы о промо баннере
 */
export interface TradeCardsModelsPromoBannerPromoBannerUpdateModel {
  Id?: string | null;

  /** Показывать на сайте */
  Show?: boolean;

  /** Дата публикации. От */
  ShowFrom?: string | null;

  /** Дата публикации. До */
  ShowTo?: string | null;

  /** Длительность показа (сек) */
  ShowSeconds?: number | null;

  /** Ссылка */
  Link?: string | null;
}

export interface TradeCardsModelsSettingsParamResponse {
  Value?: string | null;
}

export interface TradeCardsModelsSettingsServiceSettingsResponse {
  /** Время для печати одной карточки без голограммы, с */
  TimeForPrintingCardWithoutHologram?: number;

  /** Время для печати одной карточки с голограммой, с */
  TimeForPrintingCardWithHologram?: number;
  OrdersNotifyEmail?: string | null;
  PickpointOfficeAddress?: string | null;
  PickpointOfficeAddressComment?: string | null;
  ProportionalPriceFactor?: number;
  ExponentialPriceFactor?: number;
  CartClearInterval?: number;
  OrderPaymentInterval?: number;
}

/**
 * Служебные настройки для терминала
 */
export interface TradeCardsModelsSettingsServiceSettingsForTerminalResponse {
  /** Время для печати одной карточки без голограммы, с */
  TimeForPrintingCardWithoutHologram?: number;

  /** Время для печати одной карточки с голограммой, с */
  TimeForPrintingCardWithHologram?: number;
}

export interface TradeCardsModelsSettingsTestPrintSettingsResponse {
  /** Исходник для печати на терминале. Лицевая сторона. Изображение */
  PrintFrontImage?: string | null;

  /** Исходник для печати на терминале. Лицевая сторона. Голограмма */
  PrintFrontHolo?: string | null;

  /** Исходник для печати на терминале. Лицевая сторона. Ламинация */
  PrintFrontLamination?: string | null;

  /** Исходник для печати на терминале. Обратная сторона. Изображение */
  PrintBackImage?: string | null;

  /** Исходник для печати на терминале. Обратная сторона. Голограмма */
  PrintBackHolo?: string | null;

  /** Исходник для печати на терминале. Обратная сторона. Ламинация */
  PrintBackLamination?: string | null;
  PrintFilesMode?: TradeCardsDataEntitiesCardPrintFilesMode;
}

export interface TradeCardsModelsSettingsSocialSettingsResponse {
  VkAppId?: string | null;
  FbAppId?: string | null;
  GoogleAppId?: string | null;
  OkAppId?: string | null;
}

export interface TradeCardsModelsSiteSearchSearchRequest {
  SearchString?: string | null;
}

/**
 * Данные карточки для страницы результатов поиска
 */
export interface TradeCardsModelsSiteSearchCard {
  /** Идентификатор */
  Id?: string | null;

  /** Наименование */
  Title?: string | null;

  /** Тираж */
  PrintCount?: number;

  /** Неограниченный тираж */
  Unlimited?: boolean;

  /** Цена */
  Price?: number;

  /** Изображение */
  PreviewImage?: string | null;

  /** Путь к карточке */
  Path?: string | null;

  /** Остаток тиража */
  PrintCountLeft?: number;
}

/**
 * Данные уровня каталога для страницы результатов поиска
 */
export interface TradeCardsModelsSiteSearchCatalogLevel {
  /** Идентификатор */
  Id?: string | null;
  Image?: string | null;
  Name?: string | null;
  ShortDescription?: string | null;
  Children?: TradeCardsModelsSiteSearchCatalogLevel[] | null | null;
}

/**
 * Группа каталогов для страницы результатов поиска
 */
export interface TradeCardsModelsSiteSearchSeriesGroup {
  Path?: string | null;
  Series?: TradeCardsModelsSiteSearchCatalogLevel[] | null | null;
}

export interface TradeCardsModelsSiteSearchSet {
  /** Идентификатор */
  Id?: string | null;
  Image?: string | null;
  Name?: string | null;
  ShortDescription?: string | null;
  CardsCount?: number;
}

/**
 * Группа комплектов для страницы результатов поиска
 */
export interface TradeCardsModelsSiteSearchSetGroup {
  Path?: string | null;
  Sets?: TradeCardsModelsSiteSearchSet[] | null | null;
}

export type TradeCardsModelsSiteSearchOtherResultType = 0 | 1;

export interface TradeCardsModelsSiteSearchOtherResult {
  LogicalName?: string | null;
  Title?: string | null;
  Description?: string | null;
  Type?: TradeCardsModelsSiteSearchOtherResultType;
}

export interface TradeCardsModelsSiteSearchSearchResult {
  Cards?: TradeCardsModelsSiteSearchCard[] | null | null;
  Themes?: TradeCardsModelsSiteSearchCatalogLevel[] | null | null;
  Series?: TradeCardsModelsSiteSearchSeriesGroup[] | null | null;
  Sets?: TradeCardsModelsSiteSearchSetGroup[] | null | null;
  OtherResults?: TradeCardsModelsSiteSearchOtherResult[] | null | null;
}

export interface TradeCardsModelsSiteSearchSuggestsResult {
  Suggests?: string[] | null | null;
}

/**
 * Фильтр таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsTableFilter {
  CreateDate?: TradeCardsModelsDateFilter;
  ArchiveDate?: TradeCardsModelsDateFilter;

  /** Инвентарный номер */
  InventoryNumber?: string | null;
  ConnectId?: string | null;

  /** Идентификатор собственника терминала */
  TerminalOwner?: string | null;
}

/**
 * Колонки таблицы списка терминалов
 */
export type TradeCardsModelsTerminalGetTerminalsTableColumn = 0 | 1 | 2 | 3 | 4;

/**
 * Параметры сортировки таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsTableSort {
  Column?: TradeCardsModelsTerminalGetTerminalsTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsRequest {
  /** Признак запроса активных терминалов */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsTerminalGetTerminalsTableFilter;
  SortOrder?: TradeCardsModelsTerminalGetTerminalsTableSort;
}

/**
 * Строка таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsRow {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Дата архивирования */
  ArchiveDate?: string | null;

  /** Инвентарный номер */
  InventoryNumber?: string | null;
  ConnectId?: string | null;

  /** Собственник терминала */
  TerminalOwner?: string | null;
}

/**
 * Ответ на запрос списка терминалов
 */
export interface TradeCardsModelsTerminalGetTerminalsResponse {
  /** Терминалы */
  Terminals?: TradeCardsModelsTerminalGetTerminalsRow[] | null | null;

  /** Индекс страницы */
  PageIndex?: number;

  /** Количество страниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Параметры запроса на получение списка терминалов для прикрепления
 */
export interface TradeCardsModelsTerminalGetTerminalsForAttachRequest {
  /** Строка для поиска */
  ConnectId?: string | null;
}

/**
 * Строка таблицы списка терминалов для присоединения
 */
export interface TradeCardsModelsTerminalGetTerminalsForAttachRow {
  /** Идентификатор */
  Id?: string | null;
  ConnectId?: string | null;

  /** Собственник терминала */
  TerminalOwner?: string | null;

  /** Идентификатор собственника терминала */
  TerminalOwnerId?: string | null;
}

export interface TradeCardsModelsTerminalGetTerminalResponseCatalogLevelCustomImagesRow {
  /** Идентификатор уровня каталога */
  CatalogLevelId?: string | null;

  /** Фон */
  BackgroundImage?: string | null;
}

/**
 * Ответ на запрос данных терминала
 */
export interface TradeCardsModelsTerminalGetTerminalResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Дата архивирования */
  ArchiveDate?: string | null;

  /** Инвентарный номер */
  InventoryNumber?: string | null;
  ConnectId?: string | null;

  /** Собственник терминала */
  TerminalOwner?: string | null;

  /** Признак активности */
  IsActive?: boolean;

  /** Идентификатор собственника терминала */
  TerminalOwnerId?: string | null;

  /** Адрес расположения */
  Location?: string | null;

  /** Предупреждение об очистке корзины при бездействии более N сек. */
  CartCleanupWarningDelay?: number;

  /** Обратный отсчет до очистки корзины, сек. */
  CartCleanupCountdown?: number;

  /** Список идентификаторов всех уровней каталога, предназначенных к публикации на данном терминале */
  PublishCatalogLevels?: string[] | null | null;

  /** Список всех переопределенных фоновых изображений для данного терминала */
  CustomCatalogLevelImages?: TradeCardsModelsTerminalGetTerminalResponseCatalogLevelCustomImagesRow[] | null | null;

  /** Промо-ролик */
  PromoVideo?: string | null;
}

/**
 * Модель запроса часто меняющихся параметров карточек для терминала
 */
export interface TradeCardsModelsTerminalGetCardsRequest {
  /** Идентификаторы */
  CardIds?: string[] | null | null;
}

/**
 * Модель получения часто меняющихся параметров карточки
 */
export interface TradeCardsModelsTerminalGetCardVariableParamsModel {
  /** Идентификатор */
  Id?: string | null;

  /** Остаток тиража */
  AvailablePrintCount?: number | null;

  /** Цена */
  Price?: number;
}

/**
 * Ответ на запрос получения списка элементов
 */
export interface TradeCardsModelsGetItemsResponse1TradeCardsModelsTerminalGetCardVariableParamsModelTradeCardsVersion1000CultureNeutralPublicKeyTokenNull {
  /** Карточки */
  Items?: TradeCardsModelsTerminalGetCardVariableParamsModel[] | null | null;

  /** Индекс старницы */
  PageIndex?: number;

  /** Количество старниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

/**
 * Сведения о файле
 */
export interface TradeCardsModelsTerminalTerminalFullFileInfo {
  /** Адрес */
  Url?: string | null;

  /** Хэш */
  MD5?: string | null;
}

export interface TradeCardsModelsTerminalTerminalFullCard {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  Created?: string;

  /** Индекс карточки в списке карточек уровня каталога */
  Index?: number;

  /** Тираж */
  PrintCount?: number;

  /** Наименование */
  Title?: string | null;

  /** Описание для сайта */
  Description?: string | null;
  PreviewImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  FrontImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  BackImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  TerminalPrintFrontImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  TerminalPrintFrontHolo?: TradeCardsModelsTerminalTerminalFullFileInfo;
  TerminalPrintFrontLamination?: TradeCardsModelsTerminalTerminalFullFileInfo;
  TerminalPrintBackImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  TerminalPrintBackHolo?: TradeCardsModelsTerminalTerminalFullFileInfo;
  TerminalPrintBackLamination?: TradeCardsModelsTerminalTerminalFullFileInfo;
  PrintFilesMode?: TradeCardsDataEntitiesCardPrintFilesMode;
}

export interface TradeCardsModelsTerminalTerminalFullCatalogLevel {
  /** Идентификатор уровня каталога */
  Id?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Краткое описание */
  ShortDescription?: string | null;

  /** Расширенное описание */
  ExtendedDescription?: string | null;

  /** Признак публикации в топе каталога */
  IsPublishedInCatalogTop?: boolean;

  /** Признак публикации в топе первого уровня */
  IsPublishedInFirstLevelTop?: boolean;

  /** Признак публикации в топе второго уровня */
  IsPublishedInSecondLevelTop?: boolean;

  /** Индекс уровня в списке уровней родителя */
  Index?: number;
  CatalogItemPreviewImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  CatalogItemBackgroundImage?: TradeCardsModelsTerminalTerminalFullFileInfo;
  CardsHeaderImage?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /** Дочерние уровни */
  Children?: TradeCardsModelsTerminalTerminalFullCatalogLevel[] | null | null;

  /** Список всех карточек, предназначенных к публикации на данном терминале */
  Cards?: TradeCardsModelsTerminalTerminalFullCard[] | null | null;
}

/**
 * Полные сведения о терминале (нужны самому терминалу при регулярном обновлении данных)
 */
export interface TradeCardsModelsTerminalTerminalFull {
  /** Инвентарный номер */
  InventoryNumber?: string | null;

  /** Адрес расположения */
  Location?: string | null;

  /** Сообщение о том, что корзина скоро будет очищена */
  CartCleanupCountdownMessage?: string | null;

  /** Предупреждение об очистке корзины при бездействии более N сек. */
  CartCleanupWarningDelay?: number;

  /** Обратный отсчет до очистки корзины, сек. */
  CartCleanupCountdown?: number;
  PromoVideo?: TradeCardsModelsTerminalTerminalFullFileInfo;

  /** Список всех уровней каталога, предназначенных к публикации на данном терминале */
  CatalogLevels?: TradeCardsModelsTerminalTerminalFullCatalogLevel[] | null | null;
}

/**
 * Фильтр таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalOwnerGetTerminalOwnersTableFilter {
  CreateDate?: TradeCardsModelsDateFilter;
  ArchiveDate?: TradeCardsModelsDateFilter;

  /** Наименование */
  Name?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Количество терминалов */
  TerminalsCount?: number | null;
}

/**
 * Колонки таблицы списка терминалов
 */
export type TradeCardsModelsTerminalOwnerGetTerminalOwnersTableColumn = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Параметры сортировки таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalOwnerGetTerminalOwnersTableSort {
  Column?: TradeCardsModelsTerminalOwnerGetTerminalOwnersTableColumn;

  /** Признак сортировки в обратном порядке */
  Descending?: boolean;
}

/**
 * Параметры запроса на получение списка терминалов
 */
export interface TradeCardsModelsTerminalOwnerGetTerminalOwnersRequest {
  /** Признак запроса активных терминалов */
  IsActive?: boolean;

  /** Размер старницы */
  PageSize?: number;

  /** Индекс старницы */
  PageIndex?: number;
  Filter?: TradeCardsModelsTerminalOwnerGetTerminalOwnersTableFilter;
  SortOrder?: TradeCardsModelsTerminalOwnerGetTerminalOwnersTableSort;
}

/**
 * Строка таблицы списка терминалов
 */
export interface TradeCardsModelsTerminalOwnerGetTerminalOwnersRow {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Дата архивирования */
  ArchiveDate?: string | null;

  /** Наименование */
  Name?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Количество терминалов */
  TerminalsCount?: number;
}

/**
 * Ответ на запрос списка терминалов
 */
export interface TradeCardsModelsTerminalOwnerGetTerminalOwnersResponse {
  /** Терминалы */
  TerminalOwners?: TradeCardsModelsTerminalOwnerGetTerminalOwnersRow[] | null | null;

  /** Индекс страницы */
  PageIndex?: number;

  /** Количество страниц */
  PageCount?: number;

  /** Полное количество записей */
  Total?: number;
}

export interface TradeCardsModelsTerminalOwnerGetTerminalOwnerTerminalsRow {
  /** Идентификатор */
  Id?: string | null;
  ConnectId?: string | null;
}

/**
 * Ответ на запрос данных терминала
 */
export interface TradeCardsModelsTerminalOwnerGetTerminalOwnerResponse {
  /** Идентификатор */
  Id?: string | null;

  /** Дата создания */
  CreateDate?: string;

  /** Дата архивирования */
  ArchiveDate?: string | null;

  /** Наименование */
  Name?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Признак активности */
  IsActive?: boolean;

  /** Email для входа */
  Email?: string | null;

  /** Пароль для входа */
  Password?: string | null;

  /** Адрес офиса */
  OfficeAddress?: string | null;

  /** Терминалы */
  Terminals?: TradeCardsModelsTerminalOwnerGetTerminalOwnerTerminalsRow[] | null | null;
}

/**
 * Запрос на обновление данных терминала
 */
export interface TradeCardsModelsTerminalOwnerUpdateTerminalOwnerRequest {
  /** Email для входа */
  Email?: string | null;

  /** Пароль для входа */
  Password?: string | null;

  /** Наименование */
  Name?: string | null;

  /** Адрес офиса */
  OfficeAddress?: string | null;

  /** ФИО контактного лица */
  ContactPersonName?: string | null;

  /** Контактный телефон */
  ContactPhone?: string | null;

  /** Контактный Email */
  ContactEmail?: string | null;

  /** Терминалы, привязанные к собственнику */
  Terminals?: string[] | null | null;
}

/**
 * Админка. Модель для списка текстовых страниц
 */
export interface TradeCardsModelsTextPageTextPageBriefModel {
  Id?: string | null;
  IsPublished?: boolean;
  IsSystem?: boolean;
  Index?: number;
  Title?: string | null;
}

/**
 * Админка. Модель для списка текстовых страниц
 */
export interface TradeCardsModelsTextPageTextPageModel {
  Id?: string | null;
  IsPublished?: boolean;
  IsSystem?: boolean;
  LogicalName?: string | null;
  Title?: string | null;
  Content?: string | null;
  TitleTag?: string | null;
  DescriptionTag?: string | null;
  KeywordsTag?: string | null;
}

export interface TradeCardsModelsTextPageTextPageViewModel {
  Title?: string | null;
  Content?: string | null;
  TitleTag?: string | null;
  DescriptionTag?: string | null;
  KeywordsTag?: string | null;
  SidePages?: TradeCardsModelsHomeTextPageMenuModel[] | null | null;
}
