
import { Component, OnInit } from '@angular/core';
import { GetCatalogDetailsResponse, GetCatalogChildrenResponse, CatalogCardsSortColumn } from 'src/app/admin/shared/catalog/catalog.model';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CardSiteDetails } from 'src/app/admin/shared/cards/card.model';
import { CardService } from 'src/app/admin/shared/cards/card.service';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { MessageService, DynamicDialogConfig } from 'primeng/api';
import { CardComponent } from 'src/app/site/components/card/card.component';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';

@Component({
  selector: 'app-card',
  templateUrl: '../../../../site/components/card/card.component.html',
  styleUrls: ['../../../../site/components/card/card.component.scss']
})
export class CardPreviewComponent extends CardComponent {
  constructor(
    activateRoute: ActivatedRoute,
    cardService: CardService,
    cartService: CartService,
    msg: MessageService,
    textService: EditTextService,
  ) {
    super(null, cardService, cartService, msg, textService);
    this.addToCartEnabled = false;

    activateRoute.params.subscribe(params => {
      this.cardId = params.id;
      this.loadPreviewData();
    });
  }

  private loadPreviewData() {
    this.sidesTurned = false;
    this.cardService.getCardDetailsPreview(this.cardId).subscribe(
      (response: CardSiteDetails) => {
        this.card = response;
      });
  }

  ngOnInit() {
  }
}
