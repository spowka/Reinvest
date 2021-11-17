import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceInterface } from './auth.service.interface';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { CookieService } from 'ngx-cookie-service';
import { UserLoginResponse, CurrentUserResponse } from './auth.model';
import { RoleTargetType, RoleAccessType } from '../employee/employee.model';

export const adminTokenName = 'auth-admin-tkn';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements AuthServiceInterface {
  public authState = new BehaviorSubject<CurrentUserResponse>(null);

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookie: CookieService,
  ) {
  }

  login(username: string, password: string) {
    return this.http.post<UserLoginResponse>(environment.API + '/Account/Login', { email: username, password, isAdmin: true })
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        map(response => {
          //так надо. иначе куки не всегда обновляются
          this.cookie.set(adminTokenName, response.token, null, null, null, null, null);
          this.authState.next(response);
          if (response.userType == 'Employee') {
            this.router.navigate(['/admin/main']);
          } else if (response.userType == 'PickPointManager') {
            this.router.navigate(['/admin/main/legal-entities']);
          }
          return response;
        })
      );
  }

  logout() {
    //так надо. иначе куки не всегда обновляются
    this.cookie.set(adminTokenName, '', null, null, null, null, null);
    this.authState.next(null);
    this.router.navigate(['/admin/login']);
  }

  getToken(): string {
    return this.cookie.get(adminTokenName);
  }
  isAuthenticated(): boolean {
    return this.authState.value && true;
  }
  checkLoggedIn() {
    if (this.getToken()) {
      this._getCurrentUser().subscribe(
        response => {
          this.authState.next(response);
        },
        error => {
          this.authState.next(null);
        }
      );
    } else {
      this.authState.next(null);
    }
  }

  private _getCurrentUser() {
    return this.http.get<CurrentUserResponse>(environment.API + '/account/current_user', {
      headers: { "admin": "true" }
    }
    ).pipe(
      catchError(err => {
        console.log(err)
        return throwError(err);
      })
    );
  }

  hasRole(target: RoleTargetType, access: RoleAccessType): boolean {
    var user = this.authState.getValue();
    return user && user.access.filter(t => t.access == access && t.target == target).length > 0 || false;
  }
  hasAnyRole(target: RoleTargetType, access: RoleAccessType[]): boolean {
    return access.filter(t => this.hasRole(target, t)).length > 0 || false;
  }
}
