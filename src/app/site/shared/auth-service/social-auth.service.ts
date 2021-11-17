import { SocialSettingsResponse } from 'src/app/admin/shared/settings/settings.model';
import { SettingsService } from 'src/app/admin/shared/settings/settings.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { SiteAuthService } from './auth.service';
import { Router } from '@angular/router';
import { ServerErrorHelper } from 'src/app/admin/shared/helpers/server-error-helper';
import { MessageService } from 'primeng/api';
import { loadScript } from 'src/app/admin/shared/helpers/script-helper';

declare const FB: any;
declare const gapi: any;

@Injectable({
    providedIn: 'root'
})
export class SocialAuthService {
    private _isFBReady: boolean;

    private _isGoogleReady: boolean;
    private _googleAuth: any;

    private _socialSettings: SocialSettingsResponse;

    constructor(
        private settingsService: SettingsService,
        private auth: SiteAuthService,
        private router: Router,
        private msg: MessageService,
        private ngZone: NgZone,
    ) {
    }

    public getSocialSettings(): Observable<SocialSettingsResponse> {
        if (this._socialSettings)
            return of(this._socialSettings);

        return this.settingsService.getSocialSettings().pipe(
            tap(response => { this._socialSettings = response; })
        );
    }

    loginVK() {
        const currentUrl = document.location.href;
        const email_access = '4194304'; //VK.access.EMAIL
        let redirectUrl = `https://oauth.vk.com/authorize?client_id=${this._socialSettings.vkAppId}&redirect_uri=${currentUrl}` +
            `&display=page&scope=${email_access}&response_type=code&state=vk`;
        document.location.href = redirectUrl;
    }
    onVKLoginSuccess(authCode: string) {
        let thisService = this;

        thisService.auth.loginVK(document.location.href, authCode).subscribe(
            response => {
                this.router.navigate(['/login-complete']);
            },
            error => {
                let detail = `Ошибка авторизации. ${ServerErrorHelper.getError(error, 'Неизвестная ошибка')}`;
                this.msg.add({ severity: 'error', summary: 'Ошибка', detail });
                this.router.navigate(['/login']);
            }
        );
    }

    loginFB() {
        let thisService = this;

        if (!thisService._isFBReady) {
            loadScript('https://connect.facebook.net/ru_RU/sdk.js', (ev) => {
                FB.init({ appId: thisService._socialSettings.fbAppId, cookie: true, xfbml: true, version: 'v8.0' });
                FB.AppEvents.logPageView();
                thisService._isFBReady = true;
                loginFBInternal();
            });
        } else {
            loginFBInternal();
        }

        function loginFBInternal() {
            FB.login(response => thisService.ngZone.run(() => {
                if (response.status === 'connected' && response.authResponse) {
                    thisService.auth.loginFB(response.authResponse).subscribe(
                        response => {
                            thisService.router.navigate(['/login-complete']);
                        },
                        error => {
                            let detail = `Ошибка авторизации. ${ServerErrorHelper.getError(error, 'Неизвестная ошибка')}`;
                            thisService.msg.add({ severity: 'error', summary: 'Ошибка', detail });
                        }
                    );
                } else {
                    thisService.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось выполнить авторизацию' });
                    console.log(response);
                }
            }), { scope: 'public_profile,email', return_scopes: true });
        }
    }

    loginGoogle() {
        let thisService = this;
        if (!thisService._isGoogleReady) {
            loadScript('https://apis.google.com/js/platform.js', (ev) => {
                gapi.load('auth2', function () {
                    gapi.auth2.init({ client_id: thisService._socialSettings.googleAppId }).then(googleAuth => {
                        thisService._googleAuth = googleAuth;
                        thisService._isGoogleReady = true;
                        loginGoogleInternal();
                    });
                });
            });
        } else {
            loginGoogleInternal();
        }

        function loginGoogleInternal() {
            thisService._googleAuth.signIn({ scope: 'profile email' }).then(googleResponse => {
                thisService.ngZone.run(() => {
                    thisService.auth.loginGoogle({
                        idToken: googleResponse.wc.id_token,
                        // accessToken: googleResponse.wc.access_token 
                    }).subscribe(
                        response => {
                            thisService.router.navigate(['/login-complete']);
                        },
                        error => {
                            thisService.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось выполнить авторизацию' });
                            console.log(error);
                        }
                    );
                });
            });
        }
    }

    loginOK() {
        const currentUrl = document.location.href;
        let redirectUrl = `https://connect.ok.ru/oauth/authorize?client_id=${this._socialSettings.okAppId}&scope=VALUABLE_ACCESS;GET_EMAIL&` +
            `response_type=token&redirect_uri=${currentUrl}?&state=ok`;
        document.location.href = redirectUrl;
    }
    onOKLoginSuccess(access_token: string, session_secret_key: string) {
        let thisService = this;

        thisService.auth.loginOK(access_token, session_secret_key).subscribe(
            response => {
                this.router.navigate(['/login-complete']);
            },
            error => {
                let detail = `Ошибка авторизации. ${ServerErrorHelper.getError(error, 'Неизвестная ошибка')}`;
                this.msg.add({ severity: 'error', summary: 'Ошибка', detail });
                this.router.navigate(['/login']);
            }
        );
    }
}