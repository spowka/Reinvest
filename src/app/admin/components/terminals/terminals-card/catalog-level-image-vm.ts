import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';

export class CatalogLevelImageVM {
    public id: string;
    public name: string;
    public unique: boolean = false;
    public expanded: boolean = false;
    public type: CatalogLevelImageType;
    public image: ImageEditModel;

    public parent?: CatalogLevelImageVM;
    public children: CatalogLevelImageVM[];

    constructor(sanitizer: DomSanitizer, id: string, name: string, type: CatalogLevelImageType,
        children: CatalogLevelImageVM[]
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.children = children;
        this.image = new ImageEditModel(sanitizer, '1080х1920');

        this.children.forEach(c => {
            c.parent = this;
        });
    }

    public get canExpand() {
        return this.children.length > 0;
    }

    public toggleExpand() {
        this.expanded = !this.expanded;
    }

    public uniqueChanged(target: any) {
        this.unique = target.checked;
    }
}

export type CatalogLevelImageType = 'theme' | 'series';