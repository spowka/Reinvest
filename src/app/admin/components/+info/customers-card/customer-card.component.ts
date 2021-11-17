import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from '../../../shared/customer/customer.service';
import { CustomerModel } from '../../../shared/customer/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, ConfirmationService } from "primeng/api";
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { OrderStatus } from '../../../shared/order/order.model';

@Component({
  selector: 'app-info-customer',
  templateUrl: './customer-card.component.html',
  styleUrls: ['../../../shared-admin.scss',
    './customer-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerCardComponent implements OnInit {
  tabIndex = 0;

  customerId: string;
  openState: CustomerCardComponentOpenState | null;
  customer: CustomerModel;

  constructor(
    private customerService: CustomerService,
    private textService: EditTextService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    let navigation = this.router.getCurrentNavigation();
    this.openState = navigation && (<CustomerCardComponentOpenState>navigation.extras.state) || null;

    this.customer = new CustomerModel();
    this.customerId = this.activatedRoute.snapshot.params['id'];

    this.textService.loadTextsGroup(MessageGroupEnum.Customers);
    this.reload();

    if (this.openState) {
      this.tabIndex = this.isOrderActive(this.openState.orderStatus) ? 1 : 2;
    }
  }

  ngOnInit() {
  }

  reload() {
    this.customerService.getCustomer(this.customerId).subscribe(
      (data: CustomerModel) => {
        this.customer = data;
      }
    )
  }

  private isOrderActive(orderStatus: OrderStatus): boolean {
    const inactiveOrderStatuses: OrderStatus[] = [OrderStatus.DeliveredByTransportCompany, OrderStatus.DeliveredByPickPoint, OrderStatus.ReturningToOffice, OrderStatus.ReturnedToOffice];
    return !inactiveOrderStatuses.includes(orderStatus);
  }
}

export interface CustomerCardComponentOpenState {
  orderId: number;
  orderStatus: OrderStatus;
}