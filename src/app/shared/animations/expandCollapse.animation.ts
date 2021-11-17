import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export const expandCollapseEnterLeave: AnimationTriggerMetadata =
    trigger('expandCollapseEnterLeave', [
        transition(':enter', [
            style({ opacity: 0, overflow: 'hidden', height: '0px' }),
            animate(
                '950ms ease-in-out',
                style({ opacity: 1, overflow: 'visible', height: '*' })
            )
        ]),
        transition(':leave', [
            style({ opacity: 1, overflow: 'visible', height: '*' }),
            animate(
                '950ms ease-in-out',
                style({ opacity: 0, overflow: 'hidden', height: '0px' })
            )
        ])
    ]);
