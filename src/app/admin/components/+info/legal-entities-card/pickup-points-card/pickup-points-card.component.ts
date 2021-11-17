import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, ConfirmationService } from "primeng/api";
import { EditTextService } from '../../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../../shared/edit-texts/MessageGroupEnum';
import { FormService } from '../../../../shared/form/form-service';
import { PickupPointsService } from '../../../../shared/pickup-points/pickup-points.service';
import { PickupPointModel, PickupPointOwnerModel } from '../../../../shared/pickup-points/pickup-points.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText, defaultLatitude, defaultLongitude, defaultMapCenter } from 'src/app/consts';
import { loadScript } from '../../../../shared/helpers/script-helper';
import { GeoService } from '../../../../shared/geo-service/geo.service';
import { LegalEntitiesService } from '../../../../../api/services/legal-entities.service';
import { TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel } from '../../../../../api/models/trade-cards-models-legal-entities-get-legal-entity-map-view-model';

declare const ymaps: any;
let ymapsLoaded: boolean = false;

@Component({
  selector: 'app-pickup-points-card',
  templateUrl: './pickup-points-card.component.html',
  styleUrls: ['../../../../shared-admin.scss', './pickup-points-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PickupPointsCardComponent implements OnInit {
  @Input() public pickupPointId: string;
  @Input() public pickupPointOwnerId: string;
  @Input() public mapElementId: string;
  @Input() public isArchived: boolean;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  public form: FormGroup;
  public header: string = 'Новый пункт самовывоза';

  private hasSaveAttempt: boolean;
  private yandexMap: any;
  private _latitude: number = defaultLatitude;
  private _longitude: number = defaultLongitude;
  private _manualCoordinates: boolean = false;
  private _icon: string;

  constructor(
    private formBuilder: FormBuilder,
    private pickupPointsService: PickupPointsService,
    private legalEntitiesService: LegalEntitiesService,
    private textService: EditTextService,
    private msg: MessageService,
    private activatedRoute: ActivatedRoute,
    private confirmService: ConfirmationService,
    private formService: FormService,
    private geoService: GeoService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.LegalEntities);

    this._buildForm(new PickupPointModel());
    this.isArchived = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.yandexMap) {
      this.yandexMap.destroy();
    }
  }

  public initMap() {
    var thisComponent = this;
    if (this.mapElementId) {
      if (ymapsLoaded) {
        createMap();
      } else {
        this.geoService.getYandexApiKey().subscribe(
          (data: any) => {
            const yandexApiKey = data.key;
            loadScript(`https://api-maps.yandex.ru/2.1/?apikey=${yandexApiKey}&lang=ru_RU`, (ev) => {
              ymapsLoaded = true;
              createMap();
            });
          });
      }
    }

    function createMap() {
      ymaps.ready(() => {
        if (thisComponent.yandexMap) {
          thisComponent.yandexMap.destroy();
        }

        thisComponent.yandexMap = new ymaps.Map(thisComponent.mapElementId,
          { center: defaultMapCenter, zoom: 10 },
          { searchControlProvider: 'yandex#search' }
        );
        thisComponent.yandexMap.container.getElement().style.width = '100%';
        thisComponent.yandexMap.container.fitToViewport();
        thisComponent.updateMark();
      });
    }
  }

  public searchAddress(resetManualCoordinates: boolean) {
    const address = this.form.controls.address.value;
    if (address) {
      this.geoService.search(address).subscribe(
        data => {
          this.setCoords(data.latitude, data.longitude);
          this.updateMark();
          if (resetManualCoordinates) {
            this._manualCoordinates = false;
          }
        },
        error => {
          this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось выполнить поиск' });
        }
      );
    }
  }

  setCoords(latitude: number, longitude: number) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public updateMark() {
    if (this.yandexMap) {
      this.yandexMap.geoObjects.removeAll();

      if (this._latitude && this._longitude) {
        let mark = new ymaps.GeoObject({
          geometry: { type: "Point", coordinates: [this._latitude, this._longitude] },
          properties: {}
        }, { draggable: !this.isArchived, iconImageHref: this._icon, iconLayout: 'default#image' });

        var thisComponent = this;
        mark.events.add('dragend', function (e) {
          thisComponent._manualCoordinates = true;
          var coords = e.get('target').geometry.getCoordinates();
          thisComponent.setCoords(coords[0], coords[1]);
        });

        this.yandexMap.geoObjects.add(mark);
        this.yandexMap.setCenter([this._latitude, this._longitude], 18, { checkZoomRange: true, duration: 1000 });
      }
    }
  }

  public addressChanged() {
    if (!this._manualCoordinates) {
      this.searchAddress(false);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pickupPointOwnerId && changes.pickupPointOwnerId.currentValue) {
      this.legalEntitiesService.getMapView(changes.pickupPointOwnerId.currentValue).subscribe(
        (data: TradeCardsModelsLegalEntitiesGetLegalEntityMapViewModel) => {
          this._icon = data.mapIconActive;
          this.updateMark();
        },
        error => {
          this._icon = null;
          this.updateMark();
        }
      )
    }
    if (changes.pickupPointId && changes.pickupPointId.currentValue) {
      this._load(changes.pickupPointId.currentValue);
    }
    if (changes.mapElementId && this.mapElementId) {
      this.initMap();
    }
  }

  private _buildForm(model: PickupPointModel) {
    this.form = this.formBuilder.group({
      name: [model.name, Validators.required],
      address: [model.address, Validators.required],
      phones: [model.phones],
      schedule: [model.schedule],
      comment: [model.comment],
      isAvailable: [model.isAvailable],
      isOffice: [model.isOffice],
      employeeEmail: [model.employeeEmail, Validators.compose([Validators.required, Validators.email])],
      employeePassword: [model.employeePassword, Validators.required],
    });
  }

  private _load(id: string) {
    this.pickupPointsService.getPoint(id).subscribe(
      (data: PickupPointModel) => {
        this.header = data.name;
        this.setCoords(data.latitude, data.longitude);
        this._manualCoordinates = data.manualCoordinates;
        this._buildForm(data);
        this.updateMark();
      }
    )
  }

  public save() {
    this.hasSaveAttempt = true;

    if (this.form.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = FormService.getFormData(this.form);
      formData.append('ownerId', this.pickupPointOwnerId);
      formData.append('latitude', this._latitude.toString());
      formData.append('longitude', this._longitude.toString());
      formData.append('manualCoordinates', this._manualCoordinates.toString());

      this.pickupPointsService.savePoint(this.pickupPointId, formData).subscribe(
        (response: any) => {
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
          this.onSave.emit();
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        });
    }
  }

  public restore() {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'PickupPointsOwnerRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.pickupPointsService.restorePoint(this.pickupPointId).subscribe(
          data => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Собственник ПС восстановлен' });
            this.onSave.emit();
          }
        )
      }
    });
  }

  public cancel() {
    this.onCancel.emit();
  }

  public sendRegData() {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'PickupPointSendingRegData');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.pickupPointsService.sendRegData(this.pickupPointId).subscribe(
          data => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Регистрационные данные отправлены' });
          },
          error => {
            this.formService.showServerErrors(this.msg, error);
          }
        )
      },
      reject: () => { console.log('cancel') }
    });
  }

  get f() { return this.form.controls; }

  public hasError(control: any) {
    if (this.isArchived || !control)
      return false;
    else
      return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }
}
