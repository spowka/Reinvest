import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { EmployeeOrderStatusHistoryRow } from 'src/app/admin/shared/order/order.model';
import { getStatusLabel } from 'src/app/admin/components/+catalog/orders/order-statuses';

@Component({
  selector: 'app-customer-order-status-history',
  templateUrl: './customer-order-status-history.component.html',
  styleUrls: ['../../../../shared-admin.scss', './customer-order-status-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerOrderStatusHistoryComponent implements OnInit {
  orderId: string;
  orderDate: string;
  data: EmployeeOrderStatusHistoryRow[];

  constructor(
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private ordersService: OrderService,
  ) {
    this.orderId = this.config.data.orderId;
    this.orderDate = this.config.data.orderDate;

    this.ordersService.getEmployeeOrderHistory(this.orderId).subscribe(
      data => {
        this.data = data;
      }
    );
  }

  ngOnInit() {
  }

  closeModal() {
    this.ref.close();
  }

  getStatusLabel(status: string) {
    return getStatusLabel(status);
  }
}
