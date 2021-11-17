import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MathcPath } from './matchesObjects';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent implements OnInit {
  public crumbs = [];
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
    arrPath.map(item => this.crumbs.push(MathcPath[item]));
  }
}
