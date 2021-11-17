import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';

@Component({
  selector: 'login-complete',
  templateUrl: './login-complete.component.html',
  styleUrls: ['./login-complete.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginCompleteComponent implements OnInit {
  public fullName: string;

  constructor(
    private auth: SiteAuthService,
  ) {
    var currentUser = this.auth.currentUser.getValue();
    this.fullName = currentUser && currentUser.fullName;

    this.auth.currentUser.subscribe(value => {
      this.fullName = value && value.fullName;
    });
  }

  ngOnInit() {
  }
}
