import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, DialogService } from 'primeng/api';
import { OrderService } from '../../../shared/order/order.service';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';
import { OrderBriefVM, PrintingSessionState, GetOrderDetailsForEmployeeResponse } from '../../../shared/order/order.model';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from '../../../shared/form/form-service';
import { OrderVM } from '../../+info/customers-card/customer-active-orders/order-vm';

@Component({
  selector: 'app-guest-order-card',
  templateUrl: './guest-order-card.component.html',
  styleUrls: ['../../../shared-admin.scss', './guest-order-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuestOrderCardComponent implements OnInit {
  isLoading: boolean = true;
  orderId: string;
  orderDetails: GetOrderDetailsForEmployeeResponse;

  constructor(
    private orderService: OrderService,
    private msg: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formService: FormService,
    private dialogService: DialogService,
  ) {
    this.orderId = this.activatedRoute.snapshot.params['id'];

    this.reload();
  }

  public reload() {
    this.isLoading = true;

    this.orderService.getOrderDetails(this.orderId).subscribe(
      data => {
        this.orderDetails = data;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  ngOnInit() {
  }
}
