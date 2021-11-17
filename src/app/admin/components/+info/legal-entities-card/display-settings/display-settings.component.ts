import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { LegalEntitiesService } from '../../../../../api/services/legal-entities.service';
import { ImageEditModel } from '../../../../shared/image/image-edit-model';

@Component({
  selector: 'legal-entities-card-display-settings',
  templateUrl: './display-settings.component.html',
  styleUrls: ['./display-settings.component.scss']
})
export class DisplaySettingsComponent implements OnInit {
  @Input() public ownerId: string;
  @Input() public isArchived: boolean;

  public activeMapIcon: ImageEditModel;
  public inactiveMapIcon: ImageEditModel;


  constructor(sanitizer: DomSanitizer, private legalEntitiesService: LegalEntitiesService, private messageService: MessageService) {
    this.activeMapIcon = new ImageEditModel(sanitizer, '30х30');
    this.inactiveMapIcon = new ImageEditModel(sanitizer, '30х30');
  }

  getDisplaySettings() {
    this.legalEntitiesService.getMapView(this.ownerId).toPromise().then(model => {
      this.isArchived = this.isArchived;
      this.activeMapIcon.url = model.mapIconActive;
      this.inactiveMapIcon.url = model.mapIconInactive;
    });
  }

  // сохранить изменения
  update() {
    this.legalEntitiesService.updateMapView(<LegalEntitiesService.UpdateMapViewParams>{
      id: this.ownerId,
      ActiveMapIcon: this.activeMapIcon.file,
      InactiveMapIcon: this.inactiveMapIcon.file
    }).toPromise().then(x => {
      this.messageService.add({ severity: 'success', summary: 'Успешно', detail: 'Иконки обновлены' });
    }, error=>{
      this.messageService.add({ severity: 'error', summary: 'Ошибка', detail: 'Размер иконок должен быть 30x30' });
    });
  }

  ngOnInit() {
    this.getDisplaySettings();
  }
}
