export type TabVMType = 'cards' | 'themes' | 'series' | 'sets' | 'other';

export class TabVM {
    type: TabVMType;

    constructor(type: TabVMType) {
        this.type = type;
    }

    get tabText() {
        switch (this.type) {
            case 'cards': return 'карточки';
            case 'themes': return 'тематики';
            case 'series': return 'серии';
            case 'sets': return 'комплекты';
            case 'other': return 'прочее';
            default: return null;
        }
    }
}