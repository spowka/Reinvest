import { TextPageMenuModel } from '../catalog/catalog.model';

export class BlogPostBriefModel {
    id: string;
    createDate: string;
    title: string;
    isPublished: boolean;
}

export class BlogPostModel {
    id: string;

    title: string;
    logicalName: string;

    titleTag: string;
    descriptionTag: string;
    keywordsTag: string;

    postImage: string;

    shortContent: string;
    content: string;
    tags: string;

    createDate: string;

    isPublished: boolean;

    constructor() {
        this.createDate = new Date().toString();
    }
}

export interface BlogPostFeedChunk {
    rows: BlogPostSiteBriefModel[];
    nextPosition: number | undefined;
    nextYear: number | undefined;
}

export interface BlogPostSiteBriefModel {
    image: string;
    createDate: string;
    title: string;
    text: string;
    logicalName: string;
}

export class BlogPostViewModel {
    createDate: string;
    title: string;
    image: string;
    content: string;
    tags: string;

    titleTag: string;
    descriptionTag: string;
    keywordsTag: string;
}