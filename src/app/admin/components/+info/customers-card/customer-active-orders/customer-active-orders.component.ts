import { Component, OnInit, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService, DialogService } from 'primeng/api';
import { OrderVM } from './order-vm';
import { CustomerService } from 'src/app/admin/shared/customer/customer.service';
import { scrollToElementDelayed } from 'src/app/admin/shared/helpers/scroll-helper';
import { getStatusLabel } from 'src/app/admin/components/+catalog/orders/order-statuses';

@Component({
  selector: 'app-customer-active-orders',
  templateUrl: './customer-active-orders.component.html',
  styleUrls: ['../../../../shared-admin.scss', './customer-active-orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerActiveOrdersComponent implements OnInit {
  @Input() customerId: string;
  @Input() defaultOrderId: string;

  loading: boolean;
  orders: OrderVM[];

  constructor(
    private msg: MessageService,
    private dialogService: DialogService,
    private customerService: CustomerService,
  ) {
    this.orders = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.customerId && changes.customerId.currentValue) {
      this.reload();
    }
  }

  reload() {
    this.loading = true;
    this.customerService.getActiveOrders(this.customerId).subscribe((data) => {
      this.loading = false;
      this.orders = data.orders.map(t => new OrderVM(this.dialogService, t));
      this.orders.forEach(order => {
        if (this.defaultOrderId && this.defaultOrderId == order.id) {
          order.toggleDetails();
          //не очень чистое решение, но сойдет
          scrollToElementDelayed(order.detailsElementId);
        }
      });
    });
  }

  ngOnInit() {
  }

  getStatusLabel(status: string) {
    return getStatusLabel(status);
  }
}