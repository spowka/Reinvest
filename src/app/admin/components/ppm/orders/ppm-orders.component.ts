import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';
import { OrderBriefVM } from '../../../shared/order/order.model';
import { Router } from '@angular/router';
import { FormService } from '../../../shared/form/form-service';
import { CustomerCardComponentOpenState } from '../../+info/customers-card/customer-card.component';
import { PPMOrderService } from '../../../shared/ppm-order/ppm-order.service';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { getOrderStatuses, allOrderStatuses } from './ppm-order-statuses';

@Component({
  selector: 'app-ppm-orders',
  templateUrl: './ppm-orders.component.html',
  styleUrls: ['../../../shared-admin.scss', './ppm-orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PPMOrdersComponent implements OnInit {
  isLoading: boolean = true;
  orders: OrderBriefVM[];
  totalRecords: number;

  isExpanded: boolean;
  expandedData: any;
  popoverPosition = { left: 0, top: 0 };

  changeStatusComment: string = '';
  selectedOrders: OrderBriefVM[];

  sort: { field: string, order: number };
  filters: any = {};
  totalStatuses = allOrderStatuses;
  statuses: any[];

  calendarLocale: CalendarLocale;

  constructor(
    private orderService: PPMOrderService,
    private msg: MessageService,
    private router: Router,
    private formService: FormService,
    private textService: EditTextService,
    private confirmService: ConfirmationService,
  ) {
    this.calendarLocale = CurrentCalendarLocale;
    this.resetFilters(false);
    this.setFeed('Receiving');

    this.textService.loadTextsGroup(MessageGroupEnum.PickupOwnerARM);
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
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  resetFilters(reload: boolean = true) {
    this.filters = {
      id: '',
      status: '',
      feed: this.filters.feed || 'Receiving',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      itemsCount: '',
      totalPrice: ''
    }
    if (reload) {
      this.reloadOrders();
    }
  }

  setFeed(feed: 'Receiving' | 'Delivering' | 'Completed') {
    this.resetFilters(false);
    this.filters.feed = feed;
    this.statuses = getStatuses();
    this.reloadOrders();

    function getStatuses() {
      switch (feed) {
        case 'Receiving': return getOrderStatuses(['SentToPickPoint']);
        case 'Delivering': return getOrderStatuses(['ReadyToTake']);
        case "Completed": return getOrderStatuses(['DeliveredByPickPoint', 'ReturningToOffice', 'ReturnedToOffice']);
        default: return [];
      }
    }
  }

  selectedChange() {
    this.selectedOrders = this.orders.filter(t => t.selected);
  }

  resetSelection() {
    this.selectedOrders.forEach(t => t.selected = false);
    this.changeStatusComment = '';
    this.selectedChange();
  }

  get selectedOrdersItemsCount() {
    return this.selectedOrders && this.selectedOrders.map(t => t.itemsCount).reduce((a, b) => a + b, 0);
  }

  moveToAwaitingDelivery() {
    var msg = this.textService.getText(MessageGroupEnum.PickupOwnerARM, 'PickPointArmAwaitingDelivery');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        var orderIds = this.selectedOrders.map(t => t.id);
        this.isLoading = true;
        this.orderService.setAwaitingDelivery(orderIds, this.changeStatusComment).subscribe(
          (response) => {
            this.isLoading = false;
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Заказы переведены в статус "Ожидает выдачи"' });
            this.resetSelection();
            this.reloadOrders();
          },
          error => {
            this.isLoading = false;
            this.formService.showServerErrors(this.msg, error);
            this.reloadOrders();
          }
        );
      }
    });
  }

  get canMoveToAwaitingDelivery(): boolean {
    return this.changeStatusComment && this.changeStatusComment.trim() && true || false;
  }

  gotoOrderView(rowData: OrderBriefVM) {
    this.router.navigate([`/admin/ppm/order/${rowData.id}`]);
  }

  ngOnInit() {
  }

  onSort(event, field) {
    this.sort = { field, order: event };
    this.reloadOrders();
  }

  getSortOrder(field: string) {
    return this.sort && this.sort.field == field ? this.sort.order : undefined;
  }
}
