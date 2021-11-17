import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TradeCardsModelsLegalEntitiesTabsRequestCreateLegalEntityRequest } from '../../../../api/models/trade-cards-models-legal-entities-tabs-request-create-legal-entity-request';
import { LegalEntitiesService } from '../../../../api/services/legal-entities.service';

@Component({
  selector: 'legal-entities-create',
  templateUrl: './legal-entities-create.component.html',
  styleUrls: ['../../../shared-admin.scss', './legal-entities-create.component.scss'],
})
export class LegalEntitiesCreateComponent implements OnInit {
  basicInfo: TradeCardsModelsLegalEntitiesTabsRequestCreateLegalEntityRequest = {};

  constructor(private legalEntitiesService: LegalEntitiesService, private router: Router, private messageService: MessageService) {

  }

  // создание юр. лица
  create() {
    this.legalEntitiesService.createLegalEntity(this.basicInfo).toPromise().then(x => {
      this.messageService.add({ summary: 'Юр. лицо успешно добавлено', severity: 'success' });
      this.router.navigateByUrl(`/admin/main/legal-entities/${x.id}`);
    }, error => {
      this.messageService.add({ summary: 'Произошла ошибка при сохранении юр. лица. Возможно, почта уже задействована на другом юр.лице', severity: 'error' });
    });
  }

  

  ngOnInit() {
  }

}
