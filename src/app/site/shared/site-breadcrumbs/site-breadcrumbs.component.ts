import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MathcPath } from './matchesObjects';

@Component({
  selector: 'rs-site-breadcrumbs',
  templateUrl: './site-breadcrumbs.component.html',
  styleUrls: ['./site-breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteBreadcrumbsComponent implements OnInit {
  public crumbs = [];
  public mathcPath = MathcPath;
  constructor(private router: Router) {
    this.router.events.subscribe(
      data => {
        if (data instanceof NavigationEnd) {
          this.crumbs = [];
          this.getWay(this.router.url);
        }
      }
    );
  }

  ngOnInit() {
  }
  public getWay(path: string) {
    const arrPath = path.slice(1).split('/');

    arrPath.map(item => {
      this.crumbs.push(item);
      this.crumbs = this.crumbs.filter(crumb => crumb);
    });
  }
}
