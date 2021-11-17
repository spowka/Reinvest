import { Component, OnInit } from '@angular/core';
import { TradeCardsModelsOrderTerminalGetOrderTerminalListRequest } from '../../../api/models/trade-cards-models-order-terminal-get-order-terminal-list-request';
import { TradeCardsModelsOrderTerminalGetOrderTerminalListResponse } from '../../../api/models/trade-cards-models-order-terminal-get-order-terminal-list-response';
import { TradeCardsModelsOrderTerminalGetOrderTerminalListTableFilter } from '../../../api/models/trade-cards-models-order-terminal-get-order-terminal-list-table-filter';
import { TradeCardsModelsOrderTerminalOrderTerminalListItemModel } from '../../../api/models/trade-cards-models-order-terminal-order-terminal-list-item-model';
import { OrderTerminalService } from '../../../api/services/order-terminal.service';

@Component({
  selector: 'terminal-orders',
  templateUrl: './terminal-orders.component.html',
  styleUrls: ['./terminal-orders.component.scss']
})
export class TerminalOrdersComponent implements OnInit {
  public filters: any = {};
  public sort: { field: string, order: number };
  public showArchive: boolean = false;
  public orders: TradeCardsModelsOrderTerminalOrderTerminalListItemModel[];
  public totalRecords: number;

  constructor(private orderTerminalService: OrderTerminalService) {
    this.resetFilters();
  }

  ngOnInit() {
  }

  public resetFilters() {
    this.filters = {
      createDate: '',
      orderNumber: '',
      legalEntity: '',
      terminal: '',
      itemsCount: '',
      plannedSum: '',
      factSum: '',
      status: ''
    };

    this.search();
  }

  search() {
    const sort = this.sort ? {
      column: this.sort.field,
      descending: this.sort.order == 1 ? false : true
    } : null;

    let filter = <TradeCardsModelsOrderTerminalGetOrderTerminalListTableFilter>{
      createDate: {
        from: this.filters.createDateFrom,
        to: this.filters.createDateTo,
      },
      factSum: this.filters.factSum,
      orderNumber: this.filters.orderNumber,
      itemsCount: this.filters.itemsCount,
      plannedSum: this.filters.plannedSum,
      legalEntity: this.filters.legalEntity,
      status: this.filters.status,
      terminal: this.filters.terminal
    };

    this.orderTerminalService.getOrders(<TradeCardsModelsOrderTerminalGetOrderTerminalListRequest>{
      filter: filter,
      sortOrder: sort,
      isActive: !this.showArchive,
      pageIndex: 0,
      pageSize: 100
    }).subscribe(
      (data: TradeCardsModelsOrderTerminalGetOrderTerminalListResponse) => {
        this.orders = data.items;
        this.totalRecords = data.total;
      });
  }

  public onSort(event, field) {
    this.sort = { field, order: event };
    this.search();
  }

  public getSortOrder(field: string) {
    return this.sort && this.sort.field == field ? this.sort.order : undefined;
  }
}
