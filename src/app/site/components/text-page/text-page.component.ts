import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextPagesService } from 'src/app/admin/shared/text-pages/text-pages.service';
import { TextPageViewModel } from 'src/app/admin/shared/text-pages/text-pages.model';
import { Title, Meta } from '@angular/platform-browser';
import { replaceMetaTagIfNotEmpty } from 'src/app/admin/shared/helpers/meta-helper';
import { pickPointsMapMarker, officeMapMarker, faqMarkerBegin, faqMarkerDivider, faqMarkerEnd } from 'src/app/consts';

declare const $: any;

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextPageComponent implements OnInit {
  @ViewChild('content_container') contentContainer: ElementRef;

  isLoading: false;
  page: TextPageViewModel;
  pageContent: string;

  yandexMap: any;
  hasPickpointsMap: boolean;
  hasOfficeMap: boolean;

  constructor(
    activateRoute: ActivatedRoute,
    private textPagesService: TextPagesService,
    private titleService: Title,
    private meta: Meta,
  ) {
    activateRoute.params.subscribe(params => {
      params.page && this.loadPage(params.page);
    });
  }

  ngOnInit() {
  }

  loadPage(page: string) {
    let thisVM = this;

    this.textPagesService.getContent(page).subscribe(
      response => {
        thisVM.page = response;
        thisVM.pageContent = this.processPageContent(response.content);
        thisVM.isLoading = false;

        response.titleTag && thisVM.titleService.setTitle(response.titleTag);
        replaceMetaTagIfNotEmpty(thisVM.meta, 'keywords', response.keywordsTag);
        replaceMetaTagIfNotEmpty(thisVM.meta, 'description', response.descriptionTag);
      },
      error => {
        thisVM.isLoading = false;
        thisVM.page = {
          title: '',
          content: 'Ошибка загрузки страницы',
          descriptionTag: '',
          keywordsTag: '',
          titleTag: '',
          sidePages: null
        };
      }
    );
  }

  processPageContent(content: string) {
    var thisComponent = this;
    thisComponent.yandexMap && thisComponent.yandexMap.destroy();

    if (content && content.indexOf(pickPointsMapMarker) >= 0) {
      this.hasPickpointsMap = true;
      content = content.replace(pickPointsMapMarker, '<div id="pickpoints-map-container-target"></div>');
    } else {
      this.hasPickpointsMap = false;
    }

    if (content && content.indexOf(officeMapMarker) >= 0) {
      this.hasOfficeMap = true;
      content = content.replace(officeMapMarker, '<div id="office-map-container-target"></div>');
    } else {
      this.hasOfficeMap = false;
    }

    while (content && content.indexOf(faqMarkerBegin) >= 0) {
      content = content.replace(faqMarkerBegin, '<div class="faq"><div class="faq-header link-button">');
      content = content.replace(faqMarkerDivider, '</div><div class="faq-body collapsed">');
      content = content.replace(faqMarkerEnd, '<p class="faq-collapse link-button">Свернуть</p></div></div>');
    }

    return content;
  }

  onContentContainerClick(event) {
    //обработка нажатий для элементов faq
	//сначала пройдем вверх по дереву, чтобы определить, кнопка какого типа была нажата
    let target = event.target;
    while (target && target.className != 'faq-header link-button' && target.className != 'faq-collapse link-button') {
      target = target.parentElement;
    }

    //если это была кнопка открытия faq
    if (target && target.className == 'faq-header link-button') {
      let header = target;
      let body = header.nextSibling;
      if (body.className.toString().startsWith('faq-body')) {
        header.className = "faq-header";
        body.className = "faq-body";
      }	
    } else
	//если это была кнопка сворачивания faq
	if (target && target.className == 'faq-collapse link-button') {
      let collapseButton = target;
      let body = collapseButton.parentElement;
      let header = body.previousSibling;
      if (body.className.toString().startsWith('faq-body') && header.className.toString().startsWith('faq-header')) {
        header.className = "faq-header link-button";
        body.className = "faq-body collapsed";
      }
    }
  }
}
