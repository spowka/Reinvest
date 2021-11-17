import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';

@Component({
  selector: 'rs-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableInfoComponent implements OnInit, OnChanges {

  @Input() rows: any[];
  @Input() headerTemplate: any;
  @Input() rowsTemplate: any;
  @Input() totalRecords: number;

  @Output() resetFiltersEvent = new EventEmitter();
  @Output() setShowArchiveEvent = new EventEmitter<boolean>();

  public calendarLocale: CalendarLocale;

  archiveMode: boolean = false;

  constructor() {
  }

  get showArchive() {
    return this.setShowArchiveEvent.observers.length && true;
  }

  ngOnInit() {
    this.calendarLocale = CurrentCalendarLocale;
  }

  ngOnChanges() { }

  public _resetFilters() {
    this.resetFiltersEvent.emit();
  }

  public _setShowArchive(value: boolean) {
    this.archiveMode = value;
    this.setShowArchiveEvent.emit(value);
  }
}
