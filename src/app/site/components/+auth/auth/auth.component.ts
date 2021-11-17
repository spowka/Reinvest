import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';
import { PasswordValidation } from '../../../shared/validators/matchPasswordValidator';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { SocialSettingsResponse } from 'src/app/admin/shared/settings/settings.model';
import { SocialAuthService } from '../../../shared/auth-service/social-auth.service';
import { SettingsService } from 'src/app/admin/shared/settings/settings.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signUpForm: FormGroup;
  socialSettings: SocialSettingsResponse;

  constructor(
    private formBuilder: FormBuilder,
    private auth: SiteAuthService,
    private msg: MessageService,
    private router: Router,
    private formService: FormService,
    private settingsService: SettingsService,
    private socialAuth: SocialAuthService,
    private activateRoute: ActivatedRoute,
  ) {
    socialAuth.getSocialSettings().subscribe(response => { this.socialSettings = response; });
    this._buildForm();

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        let urlParts = s.url.split('#');
        if (urlParts.length > 1) {
          let srcParams = urlParts[1].split('&').map(t => t.split('='));
          let params = new URLSearchParams(srcParams);
          let state = params.get('state');
          let access_token = params.get('access_token');
          let session_secret_key = params.get('session_secret_key');

          this.router.navigate(['/login'], { replaceUrl: true });
          if (state == 'ok' && access_token && session_secret_key) {
            socialAuth.onOKLoginSuccess(access_token, session_secret_key);
          }
        }
      }
    });
    activateRoute.queryParams.subscribe(params => {
      if (params.state) {
        this.router.navigate(['/login']);
        if (params.state == 'vk' && params.code) {
          socialAuth.onVKLoginSuccess(params.code)
        }
      }
    });
  }

  ngOnInit() {
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const { firstName, lastName, email, password } = this.signUpForm.value;
      this.auth.signUp(firstName, lastName, email, password,
        () => {
          this.router.navigate(['/authorization-complete']);
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        });
    }
  }

  loginVK() {
    this.socialAuth.loginVK();
  }

  loginFB() {
    this.socialAuth.loginFB();
  }

  loginGoogle() {
    this.socialAuth.loginGoogle();
  }

  loginOK() {
    this.socialAuth.loginOK();
  }

  private _buildForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    }, { validator: PasswordValidation.MatchPassword });
  }
  private _getTrimUsername() {
    return this._getField('email').replace(/ +$/, '');
  }
  private _getField(field: string) {
    return this.signUpForm.controls[field].value;
  }
}
