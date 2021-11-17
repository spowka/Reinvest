import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../../shared/auth/auth.service';
import { MessageService } from 'primeng/api';
import { FormService } from '../../shared/form/form-service';
import { UserLoginResponse } from '../../shared/auth/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AdminAuthService,
    private msg: MessageService,
    private formService: FormService,
  ) {
    this._buildForm();
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  public logIn() {
    if (this.loginForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      this.showError = false;
      const password = this._getField('password');
      const email = this._getTrimUsername();
      var subsr = this.auth.login(email, password)
        .subscribe(response => {
        }, error => {
          this.showError = true;
          this.formService.showServerErrors(this.msg, error);
        });
    }
  }

  private _buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }
  private _getTrimUsername() {
    return this._getField('email').replace(/ +$/, '');
  }
  private _getField(field: string) {
    return this.loginForm.controls[field].value;
  }
}
