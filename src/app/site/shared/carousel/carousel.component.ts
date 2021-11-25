import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, Input, Inject } from '@angular/core';
import { CarouselItem } from './CarouselItem';

@Component({
  selector: 'rs-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  @Input() isMultiple: boolean = true;

  @Input() set items(value: CarouselItem[]) {
    this.allItems = value;
    if (value && value.length) {

      this.slideConfig = {
        dots: this.isMultiple,
        arrows: false,
        autoplay: this.isMultiple,
        autoplaySpeed: value[0].showSeconds * 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    }
  }

  private allItems: CarouselItem[];
  public slideConfig;

  get items() {
    return this.allItems;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document

  ) { }

  ngOnInit() { }

  hrefInfo(item: CarouselItem) {
    let href = item.link;
    this.document.location.href = href;
  }
}
