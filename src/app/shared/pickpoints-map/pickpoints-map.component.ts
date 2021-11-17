import {Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Output, EventEmitter, OnDestroy} from '@angular/core';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { PickupPointOrderModel } from 'src/app/admin/shared/order/order.model';
import { GeoService } from 'src/app/admin/shared/geo-service/geo.service';
import { initYandexMap, getYmaps } from 'src/app/site/shared/ymaps-loader/ymaps-loader';

@Component({
  selector: 'app-pickpoints-map',
  templateUrl: './pickpoints-map.component.html',
  styleUrls: ['./pickpoints-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PickpointsMapComponent implements OnInit, OnDestroy {
  @Output() onSelectionChange = new EventEmitter<PickupPointOrderModel>();

  pickpoints: PickupPointOrderModel[];
  selectedPickpoint: PickupPointOrderModel;
  yandexMap: any;

  constructor(
    private orderService: OrderService,
    private geoService: GeoService,
    private cdr: ChangeDetectorRef,
  ) {
    this.orderService.getPickpoints().subscribe(
      data => {
        this.pickpoints = data;
        this.setSelectedPickpoint(null);

        this.updateMarks();
      }
    );
  }

  setSelectedPickpoint(pickpoint: PickupPointOrderModel) {
    this.selectedPickpoint = pickpoint;
    this.onSelectionChange.next(pickpoint);
  }

  ngOnInit() {
    this.initMap();
  }

  ngOnDestroy() {
    this.destroyMap();
  }

  initMap() {

    initYandexMap(this.geoService, 'map', map => {
      this.destroyMap();

      this.yandexMap = map;
      this.updateMarks();

      if (this.selectedPickpoint) {
        this.yandexMap.setCenter([this.selectedPickpoint.latitude, this.selectedPickpoint.longitude]);
      }
    });
  }

  destroyMap() {
    if (this.yandexMap) {
      this.yandexMap.destroy();
    }
  }


  getPickPointIcon(pickpoint: PickupPointOrderModel): string {
    const isSelected = pickpoint == this.selectedPickpoint;
    return isSelected ? pickpoint.activeIcon : pickpoint.inactiveIcon;
  }

  selectPickpoint(pickpoint: PickupPointOrderModel) {
    this.setSelectedPickpoint(pickpoint);

    const bounds = this.yandexMap.getBounds();
    const isMarkInBounds = pickpoint.latitude > bounds[0][0] && pickpoint.latitude < bounds[1][0] &&
      pickpoint.longitude > bounds[0][1] && pickpoint.longitude < bounds[1][1];

    if (!isMarkInBounds) {
      this.yandexMap.setCenter([pickpoint.latitude, pickpoint.longitude]);
    }

    this.yandexMap.geoObjects.each(mark => {
      mark.options.set({ iconImageHref: this.getPickPointIcon(mark.pickpoint) });
    });
  }

  updateMarks() {
    if (this.yandexMap && this.pickpoints) {
      const ymaps = getYmaps();
      this.yandexMap.geoObjects.removeAll();

      this.pickpoints.forEach(pickpoint => {
        const mark = new ymaps.Placemark(
          [
            pickpoint.latitude,
            pickpoint.longitude
          ],
          {},
          {
            iconLayout: 'default#image',
            ...[this.getPickPointIcon(pickpoint) ? { iconImageHref: this.getPickPointIcon(pickpoint) } : {}]
          });

        mark.events.add('click', e => {
          this.selectPickpoint(pickpoint);
          this.cdr.detectChanges();
          e.preventDefault();
        });

        mark.pickpoint = pickpoint;
        this.yandexMap.geoObjects.add(mark);
      });
    }
  }
}
