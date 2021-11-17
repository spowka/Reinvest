import {
    Directive, ElementRef, AfterViewChecked,
    Input, HostListener
} from '@angular/core';

declare const $: any;

//Данная директива удерживает родительский скролл на заданном элементе в блоке.
//Применяется для того, чтобы показать наиболее важную часть контента в ограниченном по высоте блоке
//Пример использования: вывод результатов поиска, вкладка "прочее" (для отображения фрагмента
// заранее неизвестного документа, сохраняя форматирован ие)
@Directive({
    selector: '[maintainScrollClass]'
})
export class MaintainScrollDirective implements AfterViewChecked {

    @Input()
    maintainScrollClass: any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        this.setScroll(this.el.nativeElement, this.maintainScrollClass);
    }

    @HostListener('window:resize')
    onResize() {
        this.setScroll(this.el.nativeElement, this.maintainScrollClass);
    }

    setScroll(parent: HTMLElement, className: string) {
        if (!parent || parent.scrollHeight <= parent.clientHeight)
            return;

        const children = parent.getElementsByClassName(className);

        if (!children || !children.length) return;

        var parentAny: any = parent;
        var firstChildAny: any = children[0];

        var delta = firstChildAny.offsetTop - parentAny.offsetTop;
        var maxDelta = parent.scrollHeight - parent.clientHeight;

        var realDelta = delta < maxDelta ? delta : maxDelta;
        parent.scroll(0, realDelta);
    }
}