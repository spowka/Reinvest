import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute, NavigationCancel, ActivationEnd, NavigationEnd } from '@angular/router';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { SettingsService } from 'src/app/admin/shared/settings/settings.service';
import { SocialSettingsResponse } from 'src/app/admin/shared/settings/settings.model';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { SocialAuthService } from '../../../shared/auth-service/social-auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginSiteForm: FormGroup;
  showError: boolean = false;
  emailConfirmationError: boolean;
  error: string;
  infoMessage: string;

  socialSettings: SocialSettingsResponse;

  constructor(
    private formBuilder: FormBuilder,
    private auth: SiteAuthService,
    private settingsService: SettingsService,
    private msg: MessageService,
    private router: Router,
    private formService: FormService,
    private activateRoute: ActivatedRoute,
    private ngZone: NgZone,
    private socialAuth: SocialAuthService,
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

  login() {
    this.infoMessage = '';

    if (this.loginSiteForm.invalid) {
      this.formService.showFormErrors(this.msg);
      return false;
    } else {
      this.showError = false;
      const email = this._getField('email').trim();
      const password = this._getField('password');
      this.auth.login(email, password).subscribe(
        response => {
          this.router.navigate(['/']);
        },
        error => {
          this.error = '';
          this.emailConfirmationError = false;

          if (error.error) {
            if (Array.isArray(error.error)) {
              error.error.forEach(e => {
                if (e.code == "EmailNotConfirmed")
                  this.emailConfirmationError = true;

                this.error += e.description;
              });
            }
            else {
              this.error = "Проверьте корректность введенных данных";
            }
          }
          this.showError = true;
        }
      );
    }
  }

  resendConfirmEmail() {
    const email = this._getField('email').trim();

    if (email) {
      this.auth.resendConfirmationEmail(email).subscribe(
        response => {
          this.error = '';
          this.emailConfirmationError = false;
          this.showError = false;
          this.infoMessage = 'Письмо отправлено вам на почту';
        },
        error => {
        }
      );
    }
  }

  loginVK() {
    this.showError = false;
    this.socialAuth.loginVK();
  }

  loginFB() {
    this.showError = false;
    this.socialAuth.loginFB();
  }

  loginGoogle() {
    this.showError = false;
    this.socialAuth.loginGoogle();
  }

  loginOK() {
    this.showError = false;
    this.socialAuth.loginOK();
  }

  private _buildForm() {
    this.loginSiteForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  private _getField(field: string) {
    return this.loginSiteForm.controls[field].value;
  }
}
