import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SiteAuthService } from '../../shared/auth-service/auth.service';
import { Router } from '@angular/router';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { OrderService } from 'src/app/admin/shared/order/order.service';

@Component({
  selector: 'app-order-created',
  templateUrl: './order-created.component.html',
  styleUrls: ['./order-created.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCreatedComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private confirmService: ConfirmationService,
    private auth: SiteAuthService,
    private router: Router,
    public msg: MessageService,
    private formService: FormService,
  ) {
  }

  ngOnInit() {
    this.auth.reloadUser();
  }
}
