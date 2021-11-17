import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { PickupPointOrderModel } from 'src/app/admin/shared/order/order.model';
import { GeoService } from 'src/app/admin/shared/geo-service/geo.service';
import { initYandexMap, getYmaps } from 'src/app/site/shared/ymaps-loader/ymaps-loader';
import { SearchResponse } from 'src/app/admin/shared/geo-service/geo.model';

@Component({
  selector: 'app-office-map',
  templateUrl: './office-map.component.html',
  styleUrls: ['./office-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OfficeMapComponent implements OnInit {
  @Output() onSelectionChange = new EventEmitter<PickupPointOrderModel>();

  officeCoords: SearchResponse;
  yandexMap: any;

  constructor(
    private orderService: OrderService,
    private geoService: GeoService,
    private cdr: ChangeDetectorRef,
  ) {
    this.geoService.getOfficeCoords().subscribe(
      response => {
        this.officeCoords = response;
        this.updateMarks();
      }
    );
  }

  ngOnInit() {
    this.initMap();
  }

  ngOnDestroy() {
    this.yandexMap && this.yandexMap.destroy();
  }

  initMap() {
    var thisComponent = this;

    initYandexMap(this.geoService, 'map', map => {
      thisComponent.yandexMap && thisComponent.yandexMap.destroy();

      thisComponent.yandexMap = map;
      thisComponent.updateMarks();

      if (thisComponent.officeCoords) {
        thisComponent.yandexMap.setCenter([thisComponent.officeCoords.latitude, thisComponent.officeCoords.longitude]);
      }
    });
  }

  updateMarks() {
    if (this.yandexMap && this.officeCoords) {
      let thisComponent = this;
      let ymaps = getYmaps();
      this.yandexMap.geoObjects.removeAll();

      let mark = new ymaps.Placemark([this.officeCoords.latitude, this.officeCoords.longitude], {},
        { iconLayout: 'default#image', iconImageHref: '/assets/images/office_icon.png' });
      // mark.events.add('click', function (e) {
      //   thisComponent.cdr.detectChanges();
      //   e.preventDefault();
      // });
      this.yandexMap.geoObjects.add(mark);
    }
  }
}
