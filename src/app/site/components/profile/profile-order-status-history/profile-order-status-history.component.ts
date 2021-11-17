import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { ProfileOrderStatusHistoryRow } from 'src/app/admin/shared/order/order.model';

@Component({
  selector: 'app-profile-order-status-history',
  templateUrl: './profile-order-status-history.component.html',
  styleUrls: ['./profile-order-status-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileOrderStatusHistoryComponent implements OnInit {
  orderId: string;
  orderDate: string;
  data: ProfileOrderStatusHistoryRow[];

  constructor(
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private ordersService: OrderService,
  ) {
    this.orderId = this.config.data.orderId;
    this.orderDate = this.config.data.orderDate;

    this.ordersService.getProfileOrderHistory(this.orderId).subscribe(
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
}
