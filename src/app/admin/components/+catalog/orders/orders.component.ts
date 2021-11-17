import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OrderService } from '../../../shared/order/order.service';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';
import { OrderBriefVM, PrintingSessionState } from '../../../shared/order/order.model';
import { Router } from '@angular/router';
import { FormService } from '../../../shared/form/form-service';
import { CustomerCardComponentOpenState } from '../../+info/customers-card/customer-card.component';
import { getOrderStatuses, allOrderStatuses } from './order-statuses';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../../../shared-admin.scss', './orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = true;
  orders: OrderBriefVM[];
  dateFilter: number = 3;
  totalRecords: number;

  isExpanded: boolean;
  expandedData: any;
  popoverPosition = { left: 0, top: 0 };

  selectedOrders: OrderBriefVM[];
  printingState: PrintingSessionState;

  sort: { field: string, order: number };
  filters: any = {};
  totalStatuses = allOrderStatuses;
  statuses: any[];
  deliveryTypes: any[];
  pickPoints: any[];

  calendarLocale: CalendarLocale;

  constructor(
    private orderService: OrderService,
    private msg: MessageService,
    private router: Router,
    private formService: FormService,
  ) {
    this.calendarLocale = CurrentCalendarLocale;
    this.deliveryTypes = [
      { label: 'Все', value: null },
      { label: 'Самовывоз', value: 'Pickpoint' },
      { label: 'Доставка', value: 'Address' },
    ];
    this.resetFilters(false);
    this.setFeed('Processing');
  }

  reloadOrders() {
    this.isLoading = true;
    var filters = {
      id: this.filters.id,
      status: this.filters.status,
      deliveryType: this.filters.deliveryType,
      pickPointId: this.filters.pickPointId,
      feed: this.filters.feed,
      createDate: {
        from: this.filters.createDateFrom,
        to: this.filters.createDateTo,
      },
      customerName: this.filters.customerName,
      customerEmail: this.filters.customerEmail,
      itemsCount: this.filters.itemsCount,
      totalPrice: this.filters.totalPrice
    };
    const sort = this.sort ? {
      column: this.sort.field,
      descending: this.sort.order == 1 ? false : true
    } : null;

    this.orderService.getOrders(filters, sort).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.orders = response.items;
        this.totalRecords = response.total;
        this.updatePickpointsFilter();
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );

    this.reloadPrintingState();
  }

  reloadPrintingState() {
    this.orderService.getPrintingState().subscribe(
      (response: any) => this.printingState = response,
      error => this.printingState = PrintingSessionState.None
    );
  }

  get printingStateText() {
    switch (this.printingState) {
      case PrintingSessionState.Preparing: return 'Идет печать - подготовка';
      case PrintingSessionState.Printing: return 'Идет печать - процесс';
      default: return null;
    }
  }

  printingStateClick() {
    if (this.printingState == PrintingSessionState.Preparing) {
      this.router.navigate(['/admin/main/print-preparation']);
    } else if (this.printingState == PrintingSessionState.Printing) {
      this.router.navigate(['/admin/main/print-process']);
    }
  }

  resetFilters(reload: boolean = true) {
    this.dateFilter = 3;
    this.filters = {
      id: '',
      status: '',
      deliveryType: '',
      pickPointId: '',
      feed: this.filters.feed || 'Processing',
      createDateFrom: '',
      createDateTo: '',
      customerName: '',
      customerEmail: '',
      itemsCount: '',
      totalPrice: ''
    }
    if (reload) {
      this.reloadOrders();
    }
  }

  expandOrder($event, rowData: OrderBriefVM) {
    var position = $event.target.getBoundingClientRect();
    this.popoverPosition = { left: position.left, top: position.bottom };
    this.isExpanded = true;
    if (!rowData.expandedData) {
      this.orderService.getOrderData(rowData.id).subscribe(
        (response: any) => {
          rowData.expandedData = response;
          this.expandedData = response;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.expandedData = rowData.expandedData;
    }
  }
  cancelCollapseOrder($event) {
    $event.stopPropagation();
  }
  collapseOrder() {
    this.isExpanded = false;
  }

  setFeed(feed: 'Processing' | 'Packaging' | 'Returning' | 'Completed') {
    this.resetFilters(false);
    this.filters.feed = feed;
    this.statuses = getStatuses();
    this.reloadOrders();

    function getStatuses() {
      switch (feed) {
        case 'Processing': return getOrderStatuses(['New', 'Printing', 'PartialPrinted', 'Printed']);
        case 'Packaging': return getOrderStatuses(['Packaging', 'ReadyToSendToTransportCompany',
          'ReadyToSendToPickPoint', 'SentToTransportCompany', 'SentToPickPoint', 'ReadyToTake']);
        case 'Returning': return getOrderStatuses(['ReturningToOffice']);
        case "Completed": return getOrderStatuses(['DeliveredByTransportCompany', 'DeliveredByPickPoint', 'ReturnedToOffice']);
        default: return [];
      }
    }
  }

  setDateFilter(mode: 0 | 1 | 2 | 3) {
    var from: Date | '' = '', to: Date | '' = '';
    switch (mode) {
      case 0:
        to = new Date();
        to.setDate(new Date().getDate() - 2);
        break;
      case 1:
        from = new Date();
        from.setDate(new Date().getDate() - 2);
        to = new Date();
        to.setDate(new Date().getDate() - 1);
        break;
      case 2:
        from = new Date();
        from.setDate(new Date().getDate() - 1);
        to = new Date();
        break;
      case 3:
        break;
    }
    this.filters.createDateFrom = from;
    this.filters.createDateTo = to;
    this.dateFilter = mode;
    this.reloadOrders();
  }

  selectedChange() {
    this.selectedOrders = this.orders.filter(t => t.selected);
  }

  resetSelection() {
    this.selectedOrders.forEach(t => t.selected = false);
    this.selectedChange();
  }

  get selectedOrdersItemsCount() {
    return this.selectedOrders && this.selectedOrders.map(t => t.itemsCount).reduce((a, b) => a + b, 0);
  }

  gotoPrintPreparation() {
    var orderIds = this.selectedOrders.map(t => t.id);
    this.isLoading = true;
    this.orderService.startPrinting(orderIds).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.router.navigate(['/admin/main/print-preparation']);
      },
      error => {
        this.formService.showServerErrors(this.msg, error);
        this.isLoading = false;
        console.log(error);
        this.resetSelection();
        this.reloadPrintingState();
      }
    );
  }

  gotoOrderView(rowData: OrderBriefVM) {
    if (rowData.isGuest) {
      //если заказ сделал гость, переходим к карточке гостевого заказа
      this.router.navigate([`/admin/main/order/${rowData.id}`]);
    } else {
      //если заказ сделал зарегистрированный покупатель, переходим к карточке покупателя 
      //(передавая команду перейти на вкладку заказов и раскрыть данный заказ)
      var state: CustomerCardComponentOpenState = {
        orderId: rowData.id,
        orderStatus: rowData.status
      };
      this.router.navigateByUrl(`/admin/main/customer/${rowData.customerId}`, { state });
    }
  }

  ngOnInit() {
  }

  updatePickpointsFilter() {
    this.pickPoints = [{ label: 'Все', value: null }].concat(
      this.orders.filter((value, index, array) => {
        if (!value.pickpointId)
          return false;
        let first = array.findIndex(t => t.pickpointId == value.pickpointId);
        return first == index;
      }).map(t => ({ label: `${t.pickpointName} - ${t.pickpointAddress}`, value: t.pickpointId })));
  }

  onSort(event, field) {
    this.sort = { field, order: event };
    this.reloadOrders();
  }

  getSortOrder(field: string) {
    return this.sort && this.sort.field == field ? this.sort.order : undefined;
  }

  canPrint(order: OrderBriefVM) {
    return !this.printingState && (order.status == 'New' || order.status == 'PartialPrinted');
  }
}