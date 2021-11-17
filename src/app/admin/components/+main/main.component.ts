import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminAuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(private auth: AdminAuthService) {
    this.auth.checkLoggedIn();
  }

  ngOnInit() {
  }

}
