import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { PasswordValidation } from '../../../shared/validators/matchPasswordValidator';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';
import { UserLoginSiteResponse } from '../../../shared/user/user';

@Component({
  selector: 'create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  public restoreForm: FormGroup;
  public restoreParams: { userId: string; code: string; }

  private hasSaveAttempt: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private auth: SiteAuthService,
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private formService: FormService,
    private router: Router,
  ) {
    this.activateRoute.queryParams.subscribe(params => {
      this.restoreParams = {
        userId: params.userId,
        code: params.code
      };
    });

    this.buildForm();
  }

  private buildForm() {
    this.restoreForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: PasswordValidation.MatchPassword });
    this.hasSaveAttempt = false;
  }

  ngOnInit() {
  }

  public restore() {
    this.hasSaveAttempt = true;

    const model = { ...this.restoreParams, password: this.f.password.value };
    this.auth.resetPassword(model).subscribe(
      response => {
        console.log(response);
        if (response.token) {
          this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Пароль изменен.' });
          this.router.navigate(['/']);
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
