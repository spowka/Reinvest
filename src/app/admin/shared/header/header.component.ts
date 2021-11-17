import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public fullName: string;
  public isEmployee: boolean;
  public isPickPointManager: boolean;

  constructor(
    private auth: AdminAuthService,
  ) {
    this.auth.authState.subscribe(user => {
      this.fullName = user && user.fullName;
      this.isEmployee = user && user.userType == 'Employee' || false;
      this.isPickPointManager = user && user.userType == 'PickPointManager' || false;
    });
    this.auth.checkLoggedIn();
  }

  ngOnInit() {
  }

  public logOut() {
    this.auth.logout();
  }
}
