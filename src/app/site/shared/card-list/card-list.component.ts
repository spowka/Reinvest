import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CatalogTopLevel } from '../../../admin/shared/catalog/catalog.model';

@Component({
  selector: 'rs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() cardList: Array<CatalogTopLevel>;
  @Input() cardLinkTitle: string;
  @Input() cardClass: string;
  @Input() cardsTitle: string;
  @Input() showMoreTitle: string;

  @Output() handleShowMore = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onShowMore(): void {
    this.handleShowMore.emit();
  }
}
