import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';

@Component({
  selector: 'sortArrows',
  templateUrl: './sort-arrows.component.html',
  styleUrls: ['./sort-arrows.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortArrowsComponent implements OnInit, OnChanges {

  @Input() order: number;

  @Output() onChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() { }

  ngOnChanges() { }

  public _toggleSort() {
    var newOrder = this.order === -1 ? 1 : -1;
    this.onChange.emit(newOrder);
  }
}
