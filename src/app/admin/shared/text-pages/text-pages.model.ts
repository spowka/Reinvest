import { TextPageMenuModel } from '../catalog/catalog.model';

export class TextPageBriefModel {
    id: string;
    isPublished: boolean;
    isSystem: boolean;
    index: number;
    title: string;
}

export class TextPageModel {
    id: string;

    isPublished: boolean;
    isSystem: boolean;

    logicalName: string;
    title: string;
    content: string;

    titleTag: string;
    descriptionTag: string;
    keywordsTag: string;
}

export class TextPageViewModel {
    title: string;
    content: string;

    titleTag: string;
    descriptionTag: string;
    keywordsTag: string;

    sidePages: TextPageMenuModel[];
}