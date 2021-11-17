import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse } from '../../../api/models/trade-cards-models-order-terminal-get-order-terminal-details-for-employee-response';
import { OrderTerminalService } from '../../../api/services/order-terminal.service';

@Component({
  selector: 'terminal-order',
  templateUrl: './terminal-order.component.html',
  styleUrls: ['./terminal-order.component.scss']
})
export class TerminalOrderComponent implements OnInit {
  id: number;
  details: TradeCardsModelsOrderTerminalGetOrderTerminalDetailsForEmployeeResponse = {};

  constructor(private orderTerminalService: OrderTerminalService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.orderTerminalService.getOrderDetails(this.id).toPromise().then(x => {
      this.details = x;
    }, error => { });
  }

  ngOnInit() {
  }

}
