import { loadScript } from 'src/app/admin/shared/helpers/script-helper';
import { BehaviorSubject, of, Observable } from 'rxjs';

declare const RbkmoneyCheckout: any;
let RbkmoneyCheckoutLoaded: boolean = false;

export function getYmaps(): any {
    return RbkmoneyCheckoutLoaded ? RbkmoneyCheckout : null;
}

export function initRbkmoneyCheckout(): Observable<any> {
    if (!RbkmoneyCheckoutLoaded) {
        let result = new BehaviorSubject<any>(null);
        loadScript(`https://checkout.rbk.money/checkout.js`, (ev) => {
            RbkmoneyCheckoutLoaded = true;
            result.next(RbkmoneyCheckout);
        });
        return result;
    } else
        return of(RbkmoneyCheckout);
}