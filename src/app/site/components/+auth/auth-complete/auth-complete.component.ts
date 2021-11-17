import { Component, OnInit } from '@angular/core';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';

@Component({
  selector: 'auth-complete',
  templateUrl: './auth-complete.component.html',
  styleUrls: ['./auth-complete.component.scss']
})

export class AuthCompleteComponent implements OnInit {
  public fullName: string;

  constructor(
    private auth: SiteAuthService,
  ) {
    this.auth.currentUser.subscribe(value => {
      this.fullName = value && value.fullName;
    });
  }

  ngOnInit() {
  }
}
