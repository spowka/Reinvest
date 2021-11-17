import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';
import { replaceMetaTag, getMetaTagByName } from './admin/shared/helpers/meta-helper';
import { ApiConfiguration } from './api/api-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title: string;
  keywords: string;
  description: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    api: ApiConfiguration 
  ) {
    this.title = titleService.getTitle();
    this.keywords = this.getMetaTagContentByName('keywords');
    this.description = this.getMetaTagContentByName('description');

    api.rootUrl = environment.API.replace('/api', '');

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.update();
      }
    });
  }

  getMetaTagContentByName(tagName: string) {
    let tag = getMetaTagByName(this.meta, tagName);
    return tag && tag.content || '';
  }

  update() {
    this.titleService.setTitle(this.title);
    replaceMetaTag(this.meta, 'keywords', this.keywords);
    replaceMetaTag(this.meta, 'description', this.description);
  }
}
