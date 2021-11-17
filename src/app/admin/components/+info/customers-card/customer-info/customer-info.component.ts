import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { PhoneNumberRegex } from 'src/app/shared/validation';
import { CustomerModel } from 'src/app/admin/shared/customer/customer.model';
import { CustomerService } from 'src/app/admin/shared/customer/customer.service';
import { EditTextService } from 'src/app/admin/shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from 'src/app/admin/shared/edit-texts/MessageGroupEnum';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['../../../../shared-admin.scss', './customer-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerInfoComponent implements OnInit {
  @Input() customer: CustomerModel;
  @Output() onReload = new EventEmitter<any>();

  form: FormGroup;
  hasSaveAttempt: boolean;
  loading: boolean;
  isArchived: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private formService: FormService,
    private customerService: CustomerService,
    private textService: EditTextService,
    private confirmService: ConfirmationService,
    private router: Router,
  ) {
    this.customer = new CustomerModel();
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.customer && changes.customer.currentValue) {
      this.customer = changes.customer.currentValue;
      this.buildForm();
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      phoneNumber: [this.customer.phoneNumber, Validators.compose([Validators.required, Validators.pattern(PhoneNumberRegex)])],
      email: [this.customer.email, Validators.compose([Validators.required, Validators.email])],
      password: [this.customer.password, Validators.required],
      deliveryRegion: [this.customer.deliveryRegion],
      deliveryCity: [this.customer.deliveryCity],
      deliveryPostIndex: [this.customer.deliveryPostIndex],
      deliveryStreet: [this.customer.deliveryStreet],
      deliveryHouse: [this.customer.deliveryHouse],
      deliveryBuilding: [this.customer.deliveryBuilding],
      deliveryApartment: [this.customer.deliveryApartment]
    });
    this.isArchived = !this.customer.isActive;
  }

  save() {
    this.hasSaveAttempt = true;

    if (this.form.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      var formData = FormService.getFormData(this.form);
      this.customerService.updateInfoCustomer(this.customer.id, formData)
        .subscribe(
          response => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
            this.onReload.emit();
          },
          (error) => {
            this.formService.showServerErrors(this.msg, error);
          });
    }
  }

  public sendRegData() {
    var msg = this.textService.getText(MessageGroupEnum.Customers, 'CustomerSendingRegData');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.customerService.sendCustomerRegData(this.customer.id).subscribe(
          data => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Регистрационные данные отправлены' });
          },
          error => {
            this.formService.showServerErrors(this.msg, error);
          }
        )
      },
      reject: () => { console.log('cancel') }
    });
  }

  public restoreCustomer() {
    var msg = this.textService.getText(MessageGroupEnum.Customers, 'CustomerRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.customerService.restoreCustomer(this.customer.id).subscribe(
          data => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Покупатель восстановлен' });
            this.router.navigate(['/admin/main/customers/']);
          }
        )
      }
    });
  }

  ngOnInit() {
  }

  get f() { return this.form.controls; }

  public hasError(control: any) {
    return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }
}