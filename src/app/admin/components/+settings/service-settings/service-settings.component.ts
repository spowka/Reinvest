import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { MessageModel } from '../../../shared/edit-texts/message.model';
import { UpdateMessageGroupRequest } from '../../../shared/edit-texts/message-group.model';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormService } from '../../../shared/form/form-service';
import { ServiceSettingsResponse } from '../../../shared/settings/settings.model';
import { EmailRegex } from 'src/app/shared/validation';
import { SettingsService } from '../../../shared/settings/settings.service';

@Component({
  selector: 'app-service-settings',
  templateUrl: './service-settings.component.html',
  styleUrls: ['../../../shared-admin.scss', './service-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ServiceSettingsComponent implements OnInit {
  public settingsForm: FormGroup;
  public isLoading = true;

  private hasSaveAttempt: boolean;

  constructor(
    private settingsService: SettingsService,
    private msg: MessageService,
    public formBuilder: FormBuilder,
    private formService: FormService,
  ) {
    this.buildForm({
      ordersNotifyEmail: '',
      pickpointOfficeAddress: '',
      pickpointOfficeAddressComment: '',
      cartClearInterval: 0,
      exponentialPriceFactor: 0,
      orderPaymentInterval: 0,
      proportionalPriceFactor: 0,
      timeAfterPrintingToInactionMode: 0
    });
    this.loadData();
  }

  private loadData() {
    this.settingsService.getServiceSettings().subscribe(
      response => {
        this.buildForm(response);
        this.isLoading = false;
        this.hasSaveAttempt = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  private buildForm(model: ServiceSettingsResponse) {
    this.settingsForm = this.formBuilder.group({
      ordersNotifyEmail: [model.ordersNotifyEmail || '', Validators.compose([Validators.required, this.emailListValidator])],
      pickpointOfficeAddress: [model.pickpointOfficeAddress || '', Validators.compose([Validators.required])],
      pickpointOfficeAddressComment: [model.pickpointOfficeAddressComment || '', Validators.compose([Validators.required])],
      proportionalPriceFactor: [model.proportionalPriceFactor || '', Validators.compose([Validators.required, FormService.numberValidator, Validators.min(0.1)])],
      exponentialPriceFactor: [model.exponentialPriceFactor || '', Validators.compose([Validators.required, FormService.numberValidator, Validators.min(0.1)])],
      cartClearInterval: [model.cartClearInterval || '', Validators.compose([Validators.required, FormService.numberValidator, Validators.min(1)])],
      orderPaymentInterval: [model.orderPaymentInterval || '', Validators.compose([Validators.required, FormService.numberValidator, Validators.min(1)])],
      timeAfterPrintingToInactionMode : [model.timeAfterPrintingToInactionMode || '', Validators.compose([Validators.required, FormService.numberValidator, Validators.min(1)])],
    });
  }

  private emailListValidator(control: AbstractControl): ValidationErrors | null {
    var regexp = EmailRegex;

    var str = control.value as string;
    var splitted = str.split(',');
    for (var i in splitted) {
      var result = regexp.test(splitted[i].trim());
      if (!result)
        return { error: 'Неправильный формат email' };
    }
    return null;
  }

  public save() {
    this.hasSaveAttempt = true;

    if (this.settingsForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const model = this.settingsForm.value;
      this.isLoading = true;
      this.settingsService.setServiceSettings(model).subscribe(
        data => {
          this.isLoading = false;
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
          this.loadData();
        },
        error => {
          this.isLoading = false;
          this.formService.showServerErrors(this.msg, error);
        }
      );
    }
  }

  ngOnInit() {
  }

  get f() { return this.settingsForm.controls; }

  public hasError(control: any) {
    return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }
}