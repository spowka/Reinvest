export class CatalogLevelPublishVM {
    public id: string;
    public name: string;
    public selected: boolean = false;
    public disabled: boolean = true;
    public expanded: boolean = false;
    public type: CatalogLevelPublishType;
    public activeCards: number;
    public archiveCards: number;

    public parent?: CatalogLevelPublishVM;
    public children: CatalogLevelPublishVM[];

    constructor(id: string, name: string, type: CatalogLevelPublishType, activeCards: number, archiveCards: number,
        children: CatalogLevelPublishVM[]) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.children = children;
        this.activeCards = activeCards;
        this.archiveCards = archiveCards;

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

    public selectedChanged(target: any) {
        this.selected = target.checked;
        this.updateChildrenDisabled();
    }

    public updateChildrenDisabled() {
        if (this.selected) {
            this.children && this.children.forEach(t1 => {
                t1.disabled = false;
                t1.children && t1.children.forEach(t2 => {
                    t2.disabled = !t1.selected;
                });
            });
        } else {
            this.children && this.children.forEach(t1 => {
                t1.disabled = true;
                t1.children && t1.children.forEach(t2 => {
                    t2.disabled = true;
                });
            });
        }
    }
}

export type CatalogLevelPublishType = 'theme' | 'series' | 'set';