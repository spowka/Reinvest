import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CardService } from '../../../../shared/cards/card.service';
import { CardStatusHistoryRow, cardStatuses } from '../../../../shared/cards/card.model';
import { MessageService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { FormService } from '../../../../shared/form/form-service';

@Component({
  selector: 'app-info-card-status-history',
  templateUrl: './card-status-history.component.html',
  styleUrls: ['../../../../shared-admin.scss', './card-status-history.component.scss']
})
export class CardStatusHistoryComponent implements OnInit {
  public isBusy: boolean;
  public cardName: string;
  public data: CardStatusHistoryRow[];
  public cols: any[];

  constructor(
    config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private cardService: CardService,
    private msg: MessageService,
    private formService: FormService,
  ) {
    this.cols = [
      { field: 'date', header: 'Дата' },
      { field: 'userName', header: 'Сотрудник' },
      { field: 'status', header: 'Статус' },
      { field: 'comment', header: 'Комментарий' },
    ];

    this.cardName = config.data.cardName;
    cardService.getStatusHistory(config.data.cardId).subscribe(
      (response: CardStatusHistoryRow[]) => {
        this.data = response;
        this.isBusy = false;
      },
      (error) => {
        this.formService.showServerErrors(this.msg, error);
        this.isBusy = false;
      }
    );
  }

  ngOnInit() {
    this.isBusy = false;
  }

  getStatusText(status: string) {
    var result = cardStatuses.find(t => t.value == status);
    return result && result.label || "";
  }

  closeModal() {
    this.ref.close();
  }
}
