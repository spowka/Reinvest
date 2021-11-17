/* tslint:disable */
import { TradeCardsModelsEmployeeGetBlogPostsTableFilter } from './trade-cards-models-employee-get-blog-posts-table-filter';
import { TradeCardsModelsEmployeeGetBlogPostsTableSort } from './trade-cards-models-employee-get-blog-posts-table-sort';

/**
 * Параметры запроса на получение списка записей блога
 */
export interface TradeCardsModelsEmployeeGetBlogPostsRequest {

  /**
   * Фильтр
   */
  filter?: TradeCardsModelsEmployeeGetBlogPostsTableFilter;

  /**
   * Индекс страницы
   */
  pageIndex?: number;

  /**
   * Размер страницы
   */
  pageSize?: number;

  /**
   * Сортировка
   */
  sortOrder?: TradeCardsModelsEmployeeGetBlogPostsTableSort;
}
