import { TextPageBriefModel } from '../../../shared/text-pages/text-pages.model';

export class TextPageModelVM {
    isFirstRow?: boolean;

    id: string;
    isPublished: boolean;
    isSystem: boolean;
    index: number;
    title: string;

    constructor() {
        this.isFirstRow = undefined;
    }

    setFirstRow(): TextPageModelVM {
        this.isFirstRow = true;
        return this;
    }

    fill(src: TextPageBriefModel): TextPageModelVM {
        if (src) {
            this.id = src.id;
            this.isPublished = src.isPublished;
            this.isSystem = src.isSystem;
            this.index = src.index;
            this.title = src.title;
        }

        return this;
    }
}