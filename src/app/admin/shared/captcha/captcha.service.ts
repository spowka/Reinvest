import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { MatDialog } from '@angular/material';
import { CaptchaDialogComponent } from 'src/app/site/components/captcha-dialog/captcha-dialog.component';
import { DialogService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  constructor(
    private auth: SiteAuthService,
    private dialogService: DialogService,
  ) {
  }

  getCaptchaIfNeeded(): Observable<GetCaptchaResult> {
    let user = this.auth.currentUser.getValue();

    if (user.userType == 'Guest') {
      const dialogRef = this.dialogService.open(CaptchaDialogComponent, {
        header: 'Проверка для неавторизованных пользователей',
      });
      return dialogRef.onClose.pipe(
        map(res => res ? { captchaResponse: res, userCancel: false } : { captchaResponse: '', userCancel: true })
      );
    } else {
      return of({ captchaResponse: '', userCancel: false });
    }
  }
}

export interface GetCaptchaResult {
  captchaResponse: string;
  userCancel: boolean;
}
