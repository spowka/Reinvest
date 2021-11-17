import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, tap, skip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CurrentUserResponse } from '../auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class PPMAuthGuardService implements CanActivate {

  constructor(
    private auth: AdminAuthService,
    public router: Router
  ) {
  }

  canActivate() {
    if (!this.auth.getToken()) {
      this.router.navigate(['/admin/login']);
      return false;
    } else {
      this.auth.checkLoggedIn();
      return this.auth.authState.pipe(
        skip(1),
        tap(user => {
          if (!userOK(user)) {
            this.router.navigate(['/admin/login']);
          }
        }),
        map(user => userOK(user))
      );
    }

    function userOK(user: CurrentUserResponse) {
      return user && user.userType == 'PickPointManager' && true || false;
    }
  }
}
