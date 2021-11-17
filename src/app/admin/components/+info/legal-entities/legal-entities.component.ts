import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { RemoveFromArr } from '../../../shared/helpers/array-helpers';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { LegalEntitiesService } from '../../../../api/services/legal-entities.service';
import { TradeCardsModelsLegalEntitiesLegalEntityBriefModel } from '../../../../api/models/trade-cards-models-legal-entities-legal-entity-brief-model';
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest } from '../../../../api/models/trade-cards-models-legal-entities-get-legal-entities-request';
import { TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter } from '../../../../api/models/trade-cards-models-legal-entities-get-legal-entities-table-filter';

@Component({
  selector: 'legal-entities',
  templateUrl: './legal-entities.component.html',
  styleUrls: ['../../../shared-admin.scss', './legal-entities.component.scss'],
})
export class LegalEntitiesComponent implements OnInit {
  public legalEntities: TradeCardsModelsLegalEntitiesLegalEntityBriefModel[];
  public totalRecords: number;
  public showArchive: boolean = false;
  public filters: any;
  public sort: { field: string, order: number };

  constructor(
    private confirmService: ConfirmationService,
    private msg: MessageService,
    private textService: EditTextService,
    private legalEntitiesService: LegalEntitiesService
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.LegalEntities);
    this.resetFilters();

  }

  ngOnInit() {
  }

  public resetFilters() {
    this.filters = {
      archiveDateFrom: '',
      archiveDateTo: '',
      createDateFrom: '',
      createDateTo: '',
      name: '',
      contactPersonName: '',
      contactPhone: '',
      contactEmail: '',
      terminalsCount: ''
    };

    this.reload();
  }

  public setShowArchive(value: boolean) {
    this.showArchive = value;
    this.reload();
  }

  public reload() {
    const filters = <TradeCardsModelsLegalEntitiesGetLegalEntitiesTableFilter>
      {
        archiveDate: {
          from: this.showArchive ? this.filters.archiveDateFrom : null,
          to: this.showArchive ? this.filters.archiveDateTo : null,
        },
        createDate: {
          from: this.filters.createDateFrom,
          to: this.filters.createDateTo,
        },
        name: this.filters.name,
        contactPersonName: this.filters.contactPersonName,
        contactPhone: this.filters.contactPhone,
        contactEmail: this.filters.contactEmail,
        terminalsCount: this.filters.terminalsCount,
        pickupPointsCount: this.filters.pickupPointsCount
      };
    const sort = this.sort ? {
      column: this.sort.field,
      descending: this.sort.order == 1 ? false : true
    } : null;

    this.legalEntitiesService.getLegalEntities(<TradeCardsModelsLegalEntitiesGetLegalEntitiesRequest>{
      isActive: !this.showArchive, filter: filters, sortOrder: sort
    }).subscribe(
      (data: any) => {
        data.items.forEach(element => {
          element.isActive = !this.showArchive;
        });
        this.legalEntities = data.items;
        this.totalRecords = data.total;
      });
  }

  public archive(id) {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'LegalEntitiesArchiving');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.legalEntitiesService.archiveLegalEntity(id).subscribe(
          () => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Юридическое лицо перенесено в архив' });
            RemoveFromArr(this.legalEntities, id);
          });
      }
    });
  }

  public restore(id) {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'LegalEntitiesRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.legalEntitiesService.restoreLegalEntity(id).subscribe(
          () => {
            RemoveFromArr(this.legalEntities, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Юридическое лицо восстановлено' });
          }
        )
      }
    });
  }

  public search() {
    this.reload();
  }

  public onSort(event, field) {
    this.sort = { field, order: event };
    this.reload();
  }

  public getSortOrder(field: string) {
    return this.sort && this.sort.field == field ? this.sort.order : undefined;
  }
}
