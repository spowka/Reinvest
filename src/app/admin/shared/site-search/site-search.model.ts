export interface SearchResult {
    cards: Card[];
    themes: CatalogLevel[];
    series: SeriesGroup[];
    sets: SetGroup[];
    otherResults: OtherResult[];
}

export interface Card {
    id: string;
    title: string;
    printCount: number;
    unlimited: boolean;
    price: number;
    previewImage: string;
    path: string;
    cartQuantity: number;
    hovered?:boolean;
    printCountLeft: number;
}

export interface CatalogLevel {
    id: string;
    image: string;
    name: string;
    shortDescription: string;
    children: CatalogLevel[];
}

export interface SeriesGroup {
    path: string;
    series: CatalogLevel[];
}

export interface SetGroup {
    path: string;
    sets: Set[];
}

export interface Set {
    id: string;
    image: string;
    name: string;
    shortDescription: string;
    cardsCount: number;
}

export interface OtherResult {
    logicalName: string;
    title: string;
    description: string;
    type: OtherResultType;
}

export type OtherResultType = 'TextPage' | 'BlogPost';

export interface SuggestsResult {
    suggests: string[];
}