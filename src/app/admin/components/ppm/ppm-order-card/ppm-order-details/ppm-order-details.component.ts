import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { MessageService, DialogService } from 'primeng/api';
import { GetOrderDetailsForEmployeeResponse } from 'src/app/admin/shared/order/order.model';
import { InsertEmptyNode } from 'src/app/admin/shared/helpers/array-helpers';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { Router } from '@angular/router';
import { PPMOrderService } from 'src/app/admin/shared/ppm-order/ppm-order.service';
import { PPMOrderStatusHistoryComponent } from '../../orders/ppm-order-status-history/ppm-order-status-history.component';
import { allOrderStatuses, getStatusLabel } from '../../orders/ppm-order-statuses';

@Component({
  selector: 'app-ppm-order-details',
  templateUrl: './ppm-order-details.component.html',
  styleUrls: ['../../../../shared-admin.scss',
    './ppm-order-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PPMOrderDetailsComponent implements OnInit {
  @Input() details: GetOrderDetailsForEmployeeResponse;
  @Output() onUpdated = new EventEmitter<any>();

  statuses: any[];

  isStatusChanged: boolean = false;
  hasSaveAttempt: boolean;
  loading: boolean;
  form: FormGroup;

  constructor(
    private msg: MessageService,
    private dialogService: DialogService,
    private orderService: PPMOrderService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
  ) {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.details) {
      this.buildform();
      this.loading = false;
    }
  }

  buildform() {
    this.statuses = InsertEmptyNode(
      this.details.availableStatuses.map(t => ({ label: getStatusLabel(t.value), value: t.value })),
      { label: '-----', value: null });

    this.form = this.formBuilder.group({
      newStatus: ['', Validators.required],
      newStatusComment: ['', [FormService.customValidator(this, this.newStatusCommentValidator)]]
    });

    this.f.newStatus.valueChanges.subscribe(val => {
      this.isStatusChanged = val && true;
    });
  }

  requiredIfDeliveryTypeAddress(sender: PPMOrderDetailsComponent, control: AbstractControl): ValidationErrors | null {
    return sender.details.deliveryType == "Address" ? Validators.required(control) : null;
  }
  newStatusCommentValidator(sender: PPMOrderDetailsComponent, control: AbstractControl): ValidationErrors | null {
    return sender.isStatusChanged ? Validators.required(control) : null;
  }

  ngOnInit() {
  }

  public get f() { return this.form && this.form.controls; }

  public hasError(control: any) {
    return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }

  showHistory() {
    const ref = this.dialogService.open(PPMOrderStatusHistoryComponent, {
      header: 'История статусов',
      width: '800px',
      style: { 'max-height': '95%', overflow: 'auto' },
      data: {
        orderId: this.details.id,
        orderDate: this.details.createDate
      }
    });
  }

  save() {
    this.hasSaveAttempt = true;
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      var controls = FormService.getInvalidControls(this.form);
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = FormService.getFormData(this.form);

      this.orderService.updateOrder(this.details.id, formData).subscribe(
        (response) => {
          this.onUpdated.emit();
          this.gotoOrders();
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        }
      );
    }
  }

  gotoOrders() {
    this.router.navigate(['/admin/ppm/orders']);
  }

  getCurrentStatus() {
    return getStatusLabel(this.details.status);
  }
}