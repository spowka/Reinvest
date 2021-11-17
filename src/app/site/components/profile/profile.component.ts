import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileTabs } from '../../shared/profile/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  tabIndex = ProfileTabs.profile;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.tabIndex = +(ProfileTabs[params.type] || ProfileTabs.profile);
    });
  }

  selectTab(tab: number): void {
    this.router
      .navigate(['.'], { relativeTo: this.activatedRoute, queryParams: {} })
      .then(() => this.tabIndex = tab);
  }
}
