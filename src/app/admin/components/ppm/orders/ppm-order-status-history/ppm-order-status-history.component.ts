import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { EmployeeOrderStatusHistoryRow } from 'src/app/admin/shared/order/order.model';
import { getStatusLabel } from '../ppm-order-statuses';

@Component({
  selector: 'app-ppm-order-status-history',
  templateUrl: './ppm-order-status-history.component.html',
  styleUrls: ['../../../../shared-admin.scss', './ppm-order-status-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PPMOrderStatusHistoryComponent implements OnInit {
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
