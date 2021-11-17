/* tslint:disable */
import { TradeCardsModelsTerminalGetTerminalResponseCatalogLevelCustomImagesRow } from './trade-cards-models-terminal-get-terminal-response-catalog-level-custom-images-row';

/**
 * Ответ на запрос данных терминала
 */
export interface TradeCardsModelsTerminalGetTerminalResponse {

  /**
   * Дата архивирования
   */
  archiveDate?: string;

  /**
   * Способы оплаты - банковской картой
   */
  canPayBankCard?: boolean;

  /**
   * Обратный отсчет до очистки корзины, сек.
   */
  cartCleanupCountdown?: number;

  /**
   * Предупреждение об очистке корзины при бездействии более N сек.
   */
  cartCleanupWarningDelay?: number;

  /**
   * ConnectId
   */
  connectId?: string;

  /**
   * Дата создания
   */
  createDate?: string;

  /**
   * Список всех переопределенных фоновых изображений для данного терминала
   */
  customCatalogLevelImages?: Array<TradeCardsModelsTerminalGetTerminalResponseCatalogLevelCustomImagesRow>;

  /**
   * Идентификатор
   */
  id?: string;

  /**
   * Инвентарный номер
   */
  inventoryNumber?: string;

  /**
   * Признак активности
   */
  isActive?: boolean;

  /**
   * Cтатус соединения
   */
  isOnline?: boolean;

  /**
   * Адрес расположения
   */
  location?: string;

  /**
   * Промо-ролик
   */
  promoVideo?: string;

  /**
   * Список идентификаторов всех уровней каталога, предназначенных к публикации на данном терминале
   */
  publishCatalogLevels?: Array<string>;

  /**
   * Описание статуса готовности
   */
  readyStatusString?: string;

  /**
   * Юр. лицо - собственник терминала
   */
  terminalOwner?: string;

  /**
   * Идентификатор собственника терминала
   */
  terminalOwnerId?: string;
}
