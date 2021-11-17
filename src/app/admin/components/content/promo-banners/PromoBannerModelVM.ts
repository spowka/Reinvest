import { PromoBannerModel } from '../../../shared/promo-banners/promo-banners.model';
import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';

export class PromoBannerModelVM {
    isFirstRow?: boolean;

    id: string;
    show: boolean;
    showFrom: Date;
    showTo: Date;
    showSeconds: number;
    link: string;
    imageFile?: ImageEditModel;

    constructor() {
        this.isFirstRow = undefined;
        this.show = false;
    }

    public setFirstRow(): PromoBannerModelVM {
        this.isFirstRow = true;
        return this;
    }

    public fill(src: PromoBannerModel, sanitizer: DomSanitizer): PromoBannerModelVM {
        this.imageFile = new ImageEditModel(sanitizer, '');
        if (src) {
            this.id = src.id;
            this.show = src.show;
            this.showFrom = src.showFrom && new Date(src.showFrom);
            this.showTo = src.showTo && new Date(src.showTo);
            this.showSeconds = src.showSeconds;
            this.link = src.link;
            this.imageFile.url = src.image;
        }

        return this;
    }
}