/* tslint:disable */
import { TradeCardsModelsDateFilter } from './trade-cards-models-date-filter';

/**
 * Фильтр таблицы списка юр. лиц
 */
export interface TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter {

  /**
   * Дата архивирования
   */
  archiveDate?: TradeCardsModelsDateFilter;

  /**
   * Контактный Email
   */
  contactEmail?: string;

  /**
   * ФИО контактного лица
   */
  contactPersonName?: string;

  /**
   * Контактный телефон
   */
  contactPhone?: string;

  /**
   * Дата создания
   */
  createDate?: TradeCardsModelsDateFilter;

  /**
   * Наименование
   */
  name?: string;

  /**
   * Количество пунктов самовывоза
   */
  pickupPointsCount?: number;

  /**
   * Количество терминалов
   */
  terminalsCount?: number;
}
