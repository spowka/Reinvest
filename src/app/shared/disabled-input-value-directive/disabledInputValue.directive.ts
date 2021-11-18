import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[disabledInputValue]',
})
export class DisabledInputValueDirective {
  @Input() maxValue: number;
  @Input() quantity: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: any) {
    if (e.currentTarget && (this.quantity == this.maxValue) && e.which != 8 && e.which != 37 && e.which != 39 && e.which != 46) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}