import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CatalogService } from 'src/app/admin/shared/catalog/catalog.service';
import { GetCatalogResponse, GetCatalogTopLevelsResponse } from 'src/app/admin/shared/catalog/catalog.model';
import { ContentService } from 'src/app/admin/shared/content/content.service';
import { Banner } from 'src/app/admin/shared/content/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  selectedSubject: GetCatalogResponse;
  topThemes: any[];
  topSeries: any[];
  topSets: any[];
  banners: Banner[];

  constructor(
    private catalogService: CatalogService,
    private contentService: ContentService,
  ) {
    this.loadData();
  }

  ngOnInit() {
  }

  private loadData() {
    this.catalogService.getTop().subscribe(
      (response: GetCatalogTopLevelsResponse) => {
        var topLevels = response.topLevels;
        this.topThemes = topLevels.filter((level) => level.levelType == 'Theme');
        this.topSeries = topLevels.filter((level) => level.levelType == 'Series');
        this.topSets = topLevels.filter((level) => level.levelType == 'Set');
      }
    );
    this.contentService.getBanners().subscribe(
      (response: Banner[]) => {
        this.banners = response;
      },
      error => {
        console.log(error);
        this.banners = null;
      }
    );
  }

  public selectSubject(subject: any) {
    this.selectedSubject = null;

    this.catalogService.getCatalog(subject.id).subscribe(
      (response: GetCatalogResponse) => {
        this.selectedSubject = response;
      }
    );
  }
}
