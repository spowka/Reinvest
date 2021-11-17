import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse } from '../../../../api/models/trade-cards-models-legal-entities-tabs-response-legal-entity-basic-info-response';
import { LegalEntitiesService } from '../../../../api/services/legal-entities.service';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { TradeCardsModelsLegalEntitiesTabsRequestUpdateLegalEntityBasicInfoRequest } from '../../../../api/models/trade-cards-models-legal-entities-tabs-request-update-legal-entity-basic-info-request';

@Component({
  selector: 'legal-entities-card',
  templateUrl: './legal-entities-card.component.html',
  styleUrls: ['../../../shared-admin.scss', '././legal-entities-card.component.scss'],
})
export class LegalEntitiesCardComponent implements OnInit {
  tabIndex: number = 0;
  basicInfo: TradeCardsModelsLegalEntitiesTabsResponseLegalEntityBasicInfoResponse = {};
  id: string;

  constructor(private legalEntitiesService: LegalEntitiesService, public activatedRoute: ActivatedRoute, private router: Router,
    private textService: EditTextService, private confirmService: ConfirmationService, private messageService: MessageService) {

    this.textService.loadTextsGroup(MessageGroupEnum.LegalEntities);

    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id) {
      this.getBasicDetailsData();
    }
    else {
      this.router.navigateByUrl('/legal-entities');
    }
  }

  // Получение данных для вкладки 'Базовое описание'
  getBasicDetailsData() {
    this.legalEntitiesService.getLegalEntityBasicInfo(this.id).subscribe(x => {
      this.basicInfo = x;
    });
  }

  // отправка регистрационных данных на почту
  public sendRegData() {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'LegalEntitiesSendingRegData');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.legalEntitiesService.sendRegData(this.id).subscribe(
          data => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: 'Регистрационные данные отправлены' });
          }
        )
      }
    });
  }

  // обновление данных
  update() {
    this.legalEntitiesService.updateLegalEntityBasicInfo(<LegalEntitiesService.UpdateLegalEntityBasicInfoParams>{
      id: this.id,
      model: <TradeCardsModelsLegalEntitiesTabsRequestUpdateLegalEntityBasicInfoRequest>{
        contactEmail: this.basicInfo.contactEmail,
        contactPersonName: this.basicInfo.contactPersonName,
        contactPhone: this.basicInfo.contactPhone,
        email: this.basicInfo.email,
        name: this.basicInfo.name,
        officeAddress: this.basicInfo.officeAddress,
        password: this.basicInfo.password
      }
    }).toPromise().then(response => {
      this.messageService.add(<Message>{
        severity: 'success',
        detail: 'Данные успешно обновлены'
      });
    }, error => {
      this.messageService.add(<Message>{
        severity: 'error',
        summary: 'Ошибка',
        detail: error
      });
    });
  }

  ngOnInit() {
  }

  getActiveTabName() {
    switch (this.tabIndex) {
      case 0:
        return 'Базовое описание';
      case 1:
        return 'Пункты самовывоза';
      case 2:
        return 'Настройки отображения ПС';
      case 3:
        return 'Терминалы';
    }
  }

}
