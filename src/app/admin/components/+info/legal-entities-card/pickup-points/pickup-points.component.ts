import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { EditTextService } from '../../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../../shared/edit-texts/MessageGroupEnum';
import { Table, TableService } from 'primeng/table';
import { PickupPointsService } from '../../../../shared/pickup-points/pickup-points.service';
import { PickupPointBriefModel, PickupPointVM } from '../../../../shared/pickup-points/pickup-points.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';

@Component({
  selector: 'app-pickup-points',
  templateUrl: './pickup-points.component.html',
  styleUrls: ['../../../../shared-admin.scss', './pickup-points.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [Table, TableService],
})
export class PickupPointsComponent implements OnInit {
  @Input() public ownerId: string;

  public pickupPoints: PickupPointVM[];
  public showArchive: boolean = false;
  archiveMode: any;

  constructor(
    private textService: EditTextService,
    private pickupPointsService: PickupPointsService,
    private confirmService: ConfirmationService,
    private msg: MessageService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.LegalEntities);
  }

  ngOnInit() {
    this.reload();
  }

  public setShowArchive(value: boolean) {
    this.showArchive = value;
    this.reload();
  }

  public reload() {
    const type = this.showArchive ? 'archive' : 'active';

    this.pickupPointsService.getPoints(type, this.ownerId).subscribe(
      (data: PickupPointBriefModel[]) => {
        this.pickupPoints = data.map(t => new PickupPointVM(t));
      });
  }

  public archive(id) {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'PickupPointArchiving');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.pickupPointsService.archivePoint(id).subscribe(
          () => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'ПС перенесен в архив' });
            this.reload();
          });
      }
    });
  }

  public restore(id) {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'PickupPointRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.pickupPointsService.restorePoint(id).subscribe(
          () => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Собственник ПС восстановлен' });
            this.reload();
          }
        )
      }
    });
  }

  public add(addToTail: boolean) {
    var node = new PickupPointVM();

    if (addToTail) {
      this.pickupPoints = this.pickupPoints.concat([node]);
    } else {
      this.pickupPoints = [node].concat(this.pickupPoints);
    }
    this.startEdit(node);
  }

  public startEdit(row: PickupPointVM) {
    row.isExpanded = true;
  }
  public cancelEdit(row: PickupPointVM) {
    if (row.id) {
      row.isExpanded = false;
    } else {
      this.reload();
    }
  }
}
