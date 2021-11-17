import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SelectItem, DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { FormGroup } from '@angular/forms';

const emptySeries = 'В корень тематики';
const emptySet = 'В корень серии';

@Component({
  selector: 'order-payment',
  templateUrl: './order-payment.component.html',
  styleUrls: ['./order-payment.component.scss']
})

export class OrderPaymentComponent implements OnInit {
  @ViewChild('script') script: ElementRef;

  invoiceId: string;
  invoiceAccessToken: string;

  constructor(
    private cdr: ChangeDetectorRef,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.invoiceId = this.config.data.invoiceId;
    this.invoiceAccessToken = this.config.data.invoiceAccessToken;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.convertToScript();
  }

  cancel() {
    this.ref.close();
  }

  convertToScript() {
    var element = this.script.nativeElement;
    var script = document.createElement('script');
    script.type = 'text/javascript';

    script.className = 'rbkmoney-checkout';
    script.setAttribute('data-invoice-id', this.invoiceId);
    script.setAttribute('data-invoice-access-token', this.invoiceAccessToken);
    script.setAttribute('data-name', 'TradeCards');
    script.setAttribute('data-name', 'TradeCards');
    script.setAttribute('data-description', 'Карточки');
    script.setAttribute('data-label', 'Оплатить через RBKmoney');

    script.src = 'https://checkout.rbk.money/checkout.js';
    var parent = element.parentElement;
    parent.replaceChild(script, element);
  }
}
