import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() cardQuantity: number = 2;
  @Input() showMoreButton: string;

  @Output() handleShowMore = new EventEmitter();
  isCatalogPage: boolean;

  constructor(
    private route: Router
  ) {}

  ngOnInit() {
    if (this.route.url.includes('catalog')) {
      this.isCatalogPage = true;
    }
  }

  onShowMore(): void {
    this.handleShowMore.emit();
  }
}
