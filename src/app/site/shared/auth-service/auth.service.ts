import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, throwError, onErrorResumeNext, Subject } from 'rxjs';
import { siteTokenName, ResetPasswordModel, UserChangedEventArgs as UserUpdatedEventArgs, IsEmailFreeResponse } from './auth-service.model';
import { UserLoginSiteResponse, CurrentUserSiteResponse } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class SiteAuthService {

  private _currentUser = new BehaviorSubject<CurrentUserSiteResponse>(undefined);
  get currentUser() {
    return this._currentUser;
  }

  //Событие "Обновление пользователя". Вызывается как при смене пользователя, так и при обновлении пользовательских данных
  currentUserUpdating = new EventEmitter<UserUpdatedEventArgs>();
  currentUserUpdated = new EventEmitter<void>();

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) {
  }

  public login(username: string, password: string) {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/login', { email: username, password })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(response => {
          this._setCurrentUser(response, this.getToken(), response.token);
        })
      );
  }

  loginVK(returnUrl: string, code: string) {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/loginVK', { returnUrl, code })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(response => {
          this._setCurrentUser(response, this.getToken(), response.token);
        })
      );
  }

  loginOK(accessToken: string, sessionSecretKey: string) {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/loginOK', { accessToken, sessionSecretKey })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(response => {
          this._setCurrentUser(response, this.getToken(), response.token);
        })
      );
  }

  loginFB(data: any) {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/loginFB', data)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(response => {
          this._setCurrentUser(response, this.getToken(), response.token);
        })
      );
  }

  loginGoogle(data: any) {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/loginGoogle', data)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(response => {
          this._setCurrentUser(response, this.getToken(), response.token);
        })
      );
  }

  public guestLogin() {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/guest-login', {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(response => {
          this._setCurrentUser(response, this.getToken(), response.token);
        })
      );
  }

  public isEmailFree(email: string) {
    return this.http.get<IsEmailFreeResponse>(`${environment.API}/account/email/${email}/free`)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
  public signUp(firstName: string, lastName: string, email: string, password: string, onSuccess: () => void,
    onError: (error: any) => void) {
    return this.http.post<any>(environment.API + '/customer', { firstName, lastName, email, password })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      )
      .subscribe(loginResponse => {
        onSuccess();
      },
        onError);
  }
  public logout() {
    this._setCurrentUser(null, null, '');
    var token = this.getToken();
    if (token) {
      console.log('token was not deleted');
    }
  }
  public restorePassword(email: string) {
    return this.http.post(environment.API + '/account/forgot_password', { email })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      )
  }
  public resetPassword(model: ResetPasswordModel) {
    return this.http.post<UserLoginSiteResponse>(environment.API + '/account/reset_password', model)
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        tap(loginResponse => {
          this.cookie.set(siteTokenName, loginResponse.token, null, null, null, null, null);
          this._updateCurrentUserInfo();
        })
      );
  }

  public resendConfirmationEmail(email: string) {
    return this.http.post(environment.API + '/customer/resendConfirmationEmail', { email })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      )
  }

  public reloadUserIfNotLoaded() {
    if (!this._currentUser.getValue()) {
      this._updateCurrentUserInfo();
    }
  }
  public reloadUser() {
    this._updateCurrentUserInfo();
  }
  public getToken(): string {
    return this.cookie.get(siteTokenName);
  }

  private _updateCurrentUserInfo() {
    var token = this.getToken();
    if (token) {
      this._getCurrentUser().subscribe(response => {
        this._setCurrentUser(response, null, token);
      });
    }
  }
  private _getCurrentUser() {
    return this.http.get<CurrentUserSiteResponse>(environment.API + '/account/current_user', {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
  private _setCurrentUser(newValue: CurrentUserSiteResponse, oldToken: string, newToken: string) {
    let oldValue = this._currentUser.getValue();
    this.currentUserUpdating.emit({ oldValue, oldToken, newValue });
    this._currentUser.next(newValue);
    this.cookie.set(siteTokenName, newToken, null, null, null, null, null);
    this.currentUserUpdated.emit();
  }
}
