import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { MessageService, DialogService } from 'primeng/api';
import { CustomerService } from 'src/app/admin/shared/customer/customer.service';
import { CustomerOrderStatusHistoryComponent } from '../customer-order-status-history/customer-order-status-history.component';
import { OrderVM } from '../customer-active-orders/order-vm';
import { GetOrderDetailsForEmployeeResponse } from 'src/app/admin/shared/order/order.model';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { InsertEmptyNode } from 'src/app/admin/shared/helpers/array-helpers';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { Router } from '@angular/router';
import { getStatusLabel, allOrderStatuses } from 'src/app/admin/components/+catalog/orders/order-statuses';

@Component({
  selector: 'app-customer-order-details',
  templateUrl: './customer-order-details.component.html',
  styleUrls: ['../../../../shared-admin.scss', './customer-order-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomerOrderDetailsComponent implements OnInit {
  //если показываем заказ зарегистрированного покупателя, то заполняется это поле, а details подгружается потом
  @Input() order: OrderVM;
  //если показываем заказ гостя, то сразу заполняется это поле (а order оставляем пустым)
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
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
  ) {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.order) {
      this.reload();
    }
    if (this.details) {
      this.buildform();
      this.loading = false;
    }
  }

  reload() {
    this.loading = true;
    this.orderService.getOrderDetails(this.order.id).subscribe((data) => {
      this.details = data;
      this.buildform();
      this.loading = false;
    }, error => {
    });
  }

  buildform() {
    this.statuses = InsertEmptyNode(
      this.details.availableStatuses.map(t => ({ label: getStatusLabel(t.value), value: t.value })),
      { label: '-----', value: null });

    this.form = this.formBuilder.group({
      deliveryRegion: [this.details.deliveryRegion, [FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)]],
      deliveryCity: [this.details.deliveryCity, [FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)]],
      deliveryPostIndex: [this.details.deliveryPostIndex, [FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)]],
      deliveryStreet: [this.details.deliveryStreet],
      deliveryHouse: [this.details.deliveryHouse, [FormService.customValidator(this, this.requiredIfDeliveryTypeAddress)]],
      deliveryBuilding: [this.details.deliveryBuilding],
      deliveryApartment: [this.details.deliveryApartment],
      comment: [this.details.comment],
      newStatus: [''],
      newStatusComment: ['', [FormService.customValidator(this, this.newStatusCommentValidator)]]
    });

    this.f.newStatus.valueChanges.subscribe(val => {
      this.isStatusChanged = val && true;
    });
  }

  requiredIfDeliveryTypeAddress(sender: CustomerOrderDetailsComponent, control: AbstractControl): ValidationErrors | null {
    return sender.details.deliveryType == "Address" ? Validators.required(control) : null;
  }
  newStatusCommentValidator(sender: CustomerOrderDetailsComponent, control: AbstractControl): ValidationErrors | null {
    return sender.isStatusChanged ? Validators.required(control) : null;
  }

  ngOnInit() {
  }

  public get f() { return this.form && this.form.controls; }

  public hasError(control: any) {
    return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }

  showHistory() {
    const ref = this.dialogService.open(CustomerOrderStatusHistoryComponent, {
      header: 'История статусов',
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
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        }
      );
    }
  }

  cancel() {
    this.order.closeDetails();
  }

  gotoOrders() {
    this.router.navigate(['/admin/main/orders']);
  }

  getCurrentStatus() {
    return getStatusLabel(this.details.status);
  }
}
