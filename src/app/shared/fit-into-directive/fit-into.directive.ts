import {
    Directive, ElementRef, AfterViewChecked,
    Input, HostListener
} from '@angular/core';

declare const $: any;

//Данная директива позволяет вписать один элемент внутрь другого.
//Подразумевается, что у "вписанного" элемента position: absolute
//Пример использования: встраивание блока карты в текстовые страницы в произвольно указанном месте
@Directive({
    selector: '[fitIntoId]'
})
export class FitIntoDirective implements AfterViewChecked {

    @Input()
    fitIntoId: any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        this.fitInto(this.el.nativeElement, this.fitIntoId);
    }

    @HostListener('window:resize')
    onResize() {
        this.fitInto(this.el.nativeElement, this.fitIntoId);
    }

    fitInto(target: HTMLElement, fitIntoId: string) {
        if (!target)
            return;

        const parent = target.offsetParent;
        const fitTarget = document.getElementById(fitIntoId);

        if (!fitTarget) return;

        var parentRect = parent.getBoundingClientRect();
        var rect = fitTarget.getBoundingClientRect();

        target.style.left = rect.left - parentRect.left + 'px';
        target.style.top = rect.top - parentRect.top + 'px';
        target.style.width = rect.width + 'px';
        target.style.height = rect.height + 'px';
    }
}