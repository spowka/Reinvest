import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService, DialogService } from 'primeng/api';
import { ProfileService } from '../../../shared/profile/profile.service';
import { OrderVM } from './order-vm';

@Component({
  selector: 'app-profile-active-orders',
  templateUrl: './profile-active-orders.component.html',
  styleUrls: ['./profile-active-orders.component.scss'],
  host: { class: 'column' },
  encapsulation: ViewEncapsulation.None
})
export class ProfileActiveOrdersComponent implements OnInit {
  loading: boolean;
  orders: OrderVM[];

  constructor(
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private profileService: ProfileService,
    private dialogService: DialogService
  ) {
    this.reload();
  }

  reload() {
    this.loading = true;
    this.profileService.getActiveOrders().subscribe((data) => {
      this.loading = false;
      this.orders = data.orders.map(t => new OrderVM(this.profileService, this.dialogService, t));
    });
  }

  ngOnInit() {
  }
}
