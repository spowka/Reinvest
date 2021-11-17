import { Component, OnInit, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService, DialogService } from 'primeng/api';
import { OrderVM } from './order-vm';
import { CardThemeVM } from './сard-theme-vm';
import { CustomerService } from 'src/app/admin/shared/customer/customer.service';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { scrollToElementDelayed } from 'src/app/admin/shared/helpers/scroll-helper';
import { getStatusLabel } from 'src/app/admin/components/+catalog/orders/order-statuses';

@Component({
  selector: 'app-customer-finished-orders',
  templateUrl: './customer-finished-orders.component.html',
  styleUrls: ['../../../../shared-admin.scss', './customer-finished-orders.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerFinishedOrdersComponent implements OnInit {
  @Input() customerId: string;
  @Input() defaultOrderId: string;

  loading: boolean;
  orders: OrderVM[];
  years: string[];
  themes: CardThemeVM[];
  currentYear: string;

  constructor(
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private dialogService: DialogService
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

    let year = this.years ? (this.years.includes(this.currentYear) ? this.currentYear : undefined) : undefined;
    let themes = this.themes ? this.themes.filter(t => t.isSelected).map(t => t.id) : undefined;
    this.customerService.getFinishedOrders(this.customerId, year, themes).subscribe((data) => {
      this.loading = false;

      this.orders = data.orders.map(t => new OrderVM(this.orderService, this.dialogService, t));
      this.orders.forEach(order => {
        if (this.defaultOrderId && this.defaultOrderId == order.id) {
          order.toggleDetails();
          //не очень чистое решение, но сойдет
          scrollToElementDelayed(order.detailsElementId);
        }
      });

      this.years = data.years;

      let oldThemes = this.themes;
      this.themes = data.themes && data.themes.map(t => new CardThemeVM(t));
      if (oldThemes && this.themes) {
        this.themes.forEach(theme => {
          let oldTheme = oldThemes.find(t => t.id == theme.id);
          if (oldTheme) {
            theme.isSelected = oldTheme.isSelected;
          }
        });
      }
    });
  }

  setYear(year: string) {
    this.currentYear = year;
    this.reload();
  }

  setTheme(theme: CardThemeVM) {
    if (theme) {
      theme.isSelected = !theme.isSelected;
    } else {
      this.themes.forEach(theme => theme.isSelected = false);
    }
    this.reload();
  }

  get allThemesDeselected() {
    return this.themes.every(theme => !theme.isSelected);
  }

  ngOnInit() {
  }

  getStatusLabel(status: string) {
    return getStatusLabel(status);
  }
}