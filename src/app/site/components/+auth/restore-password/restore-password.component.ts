import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { Router } from '@angular/router';

@Component({
  selector: 'restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestorePasswordComponent implements OnInit {
  public restoreForm: FormGroup;

  private hasSaveAttempt: boolean;

  constructor(
    private auth: SiteAuthService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private formService: FormService,
    private router: Router,
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.restoreForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
    this.hasSaveAttempt = false;
  }

  ngOnInit() {
  }

  public restore() {
    this.hasSaveAttempt = true;

    this.auth.restorePassword(this.f.email.value).subscribe(
      (response: boolean) => {
        console.log(response);
        if (response) {
          this.msg.add({ severity: 'success', summary: 'Успех', detail: 'На ваш email отправлена ссылка для восстановления пароля.' });
          this.buildForm();
        } else {
          this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Неизвестная ошибка' });
        }
      },
      error => {
        this.formService.showServerErrors(this.msg, error);
      });
  }

  get f() { return this.restoreForm.controls; }

  public hasError(control: any) {
    return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }
}
