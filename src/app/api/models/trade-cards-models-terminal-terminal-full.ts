/* tslint:disable */
import { TradeCardsModelsTerminalTerminalFullCatalogLevel } from './trade-cards-models-terminal-terminal-full-catalog-level';
import { TradeCardsModelsTerminalTerminalFullFileInfo } from './trade-cards-models-terminal-terminal-full-file-info';

/**
 * Полные сведения о терминале (нужны самому терминалу при регулярном обновлении данных)
 */
export interface TradeCardsModelsTerminalTerminalFull {

  /**
   * Обратный отсчет до очистки корзины, сек.
   */
  cartCleanupCountdown?: number;

  /**
   * Сообщение о том, что корзина скоро будет очищена
   */
  cartCleanupCountdownMessage?: string;

  /**
   * Предупреждение об очистке корзины при бездействии более N сек.
   */
  cartCleanupWarningDelay?: number;

  /**
   * Список всех уровней каталога, предназначенных к публикации на данном терминале
   */
  catalogLevels?: Array<TradeCardsModelsTerminalTerminalFullCatalogLevel>;

  /**
   * Инвентарный номер
   */
  inventoryNumber?: string;

  /**
   * Адрес расположения
   */
  location?: string;

  /**
   * Промо-ролик
   */
  promoVideo?: TradeCardsModelsTerminalTerminalFullFileInfo;
}
