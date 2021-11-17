/** Ответ на запрос структуры каталога */
export class GetCatalogTreeResponse {
    /** Тематики */
    public themes: CatalogLevel[] | null;
}

export class GetCatalogPublishTreeResponse {
    /** Тематики */
    public themes: CatalogPublishLevel[] | null;
}

export class CatalogLevel {
    /** Идентификатор */
    public id: string | null;
    /** Наименование */
    public name: string | null;
    /** Количество действующих карточек */
    public activeCards: number | null;
    /** Количество архивных карточек */
    public archiveCards: number | null;
    /** Дочерние уровни */
    public children: CatalogLevel[] | null;
}

export class CatalogPublishLevel {
    public id: string;
    public name: string;
    public activeCards: number;
    public archiveCards: number;
    public isPublished: boolean;
    public isPublishedInCatalogTop: boolean;
    public isPublishedInFirstLevelTop: boolean;
    public isPublishedInSecondLevelTop: boolean;
    public children: CatalogPublishLevel[] | null;
}

//Инфо о каталоге для редактирования
export class GetCatalogResponse {
    extendedDescription: string;
    id: string;
    image: string;
    levelType: string;
    name: string;
    shortDescription: string;
    parent: any;
}

export class GetCatalogTopLevelsResponse {
    topLevels: CatalogTopLevel[];
}

export class CatalogTopLevel {
    id: string;
    name: string;
    shortDescription: string;
    levelType: string;
    image: string;
}

//Инфо о каталоге для просмотра
export class GetCatalogDetailsResponse {
    name: string;
    levelType: string;
    extendedDescription: string;
    image: string;

    topLevels: CatalogLevelDetail[];
    cards: CatalogLevelDetailCard[];
}

export class CatalogLevelDetail {
    id: string;
    name: string;
    levelType: string;
    shortDescription: string;
    image: string;
    topLevels: CatalogLevelDetail[];
}

export class CatalogLevelDetailCard {
    id: string;
    index: number;
    title: string;
    printCount: number;
    unlimited: boolean;
    price: number;
    image: string;
}

//Инфо о дочерних каталогах для просмотра
export class GetCatalogChildrenResponse {
    levels: CatalogLevelDetail[];
}

//Колонки карточек каталога для сортировки
export type CatalogCardsSortColumn = 'Price' | 'Updated';

export interface GetMenuResponse {
    themes: CatalogLevel[];
    pages: TextPageMenuModel[]
}

export interface TextPageMenuModel {
    logicalName: string;
    title: string;
}