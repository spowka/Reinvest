import { CardTheme } from 'src/app/admin/shared/customer/customer.model';

export class CardThemeVM {
    id: string;
    name: string;
    isSelected: boolean;
    constructor(src: CardTheme) {
        this.id = src.id;
        this.name = src.name;
    }
}
