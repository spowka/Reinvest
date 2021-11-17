import { Component, OnInit } from '@angular/core';
import { DialogService, ConfirmationService, MessageService } from 'primeng/api';
import { GetCatalogPublishTreeResponse } from '../../../shared/catalog/catalog.model';
import { CatalogService } from '../../../shared/catalog/catalog.service';

@Component({
  selector: 'app-publish-settings',
  templateUrl: './publish-settings.component.html',
  styleUrls: ['./publish-settings.component.scss'],
})
export class PublishSettingsComponent implements OnInit {
  treeValue: any[];
  isLoading: boolean = true;

  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private catalogService: CatalogService,
    private msg: MessageService,
  ) {
    this._getThemes();
  }

  private _getThemes() {
    this.treeValue = null;
    this.isLoading = true;
    this.catalogService.getPublishTree().subscribe(
      (response: GetCatalogPublishTreeResponse) => {
        this.treeValue = response.themes.map(e => ({
          id: e.id,
          name: e.name,
          type: 'theme',
          activeCards: e.activeCards,
          archiveCards: e.archiveCards,
          published: e.isPublished,
          themeTop: e.isPublishedInCatalogTop,
          seriesTop: e.isPublishedInFirstLevelTop,
          setTop: e.isPublishedInSecondLevelTop,
          children: e.children.reduce((p, c) =>
            p.concat([{
              id: c.id,
              series: c.name,
              type: 'series',
              activeCards: c.activeCards,
              archiveCards: c.archiveCards,
              published: c.isPublished,
              themeTop: c.isPublishedInCatalogTop,
              seriesTop: c.isPublishedInFirstLevelTop,
              setTop: c.isPublishedInSecondLevelTop,
              publishedEnabled: function () {
                return this.parent.published;
              }
            }])
              .concat(c.children.map(s => ({
                id: s.id,
                set: s.name,
                type: 'set',
                activeCards: s.activeCards,
                archiveCards: s.archiveCards,
                published: s.isPublished,
                themeTop: s.isPublishedInCatalogTop,
                seriesTop: s.isPublishedInFirstLevelTop,
                setTop: s.isPublishedInSecondLevelTop,
                publishedEnabled: function () {
                  return this.parent.published && this.parent.parent.published;
                }
              }))), [])
        }));

        //set parents for children
        this.treeValue.forEach(theme => {
          var lastSeries = null;
          theme.children && theme.children.forEach(child => {
            if (child.type == 'series') {
              child.parent = theme;
              lastSeries = child;
            } else if (child.type == 'set') {
              child.parent = lastSeries;
            }
          });
        });

        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  public publishedChange(rowData) {
    this.sendRequest(this.catalogService.publish(rowData.id, rowData.published));
  }

  public themeTopChange(rowData) {
    this.sendRequest(this.catalogService.publishInCatalogTop(rowData.id, rowData.themeTop));
  }

  public seriesTopChange(rowData) {
    this.sendRequest(this.catalogService.publishInSeriesTop(rowData.id, rowData.seriesTop));
  }

  public setTopChange(rowData) {
    this.sendRequest(this.catalogService.publishInSetTop(rowData.id, rowData.setTop));
  }

  private sendRequest(request) {
    this.isLoading = true;
    request.subscribe(
      data => {
        this.isLoading = false;
      }, error => {
        this._getThemes();
      }
    );
  }

  ngOnInit() {
  }
}
