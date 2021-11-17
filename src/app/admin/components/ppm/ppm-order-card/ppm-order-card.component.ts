import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, DialogService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from '../../../shared/form/form-service';
import { PPMOrderService } from '../../../shared/ppm-order/ppm-order.service';
import { GetOrderDetailsResponse } from '../../../shared/ppm-order/ppm-order.model';

@Component({
  selector: 'app-ppm-order-card',
  templateUrl: './ppm-order-card.component.html',
  styleUrls: ['../../../shared-admin.scss', './ppm-order-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PPMOrderCardComponent implements OnInit {
  isLoading: boolean = true;
  orderId: string;
  orderDetails: GetOrderDetailsResponse;

  constructor(
    private orderService: PPMOrderService,
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
