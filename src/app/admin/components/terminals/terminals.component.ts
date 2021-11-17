import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { EditTextService } from '../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../shared/edit-texts/MessageGroupEnum';
import { RemoveFromArr } from '../../shared/helpers/array-helpers';
import { TerminalsService } from '../../shared/terminals/terminals.service';
import { TerminalBrief } from '../../shared/terminals/terminals.model';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['../../shared-admin.scss', './terminals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerminalsComponent implements OnInit {
  public terminals: TerminalBrief[];
  public totalRecords: number;
  public showArchive: boolean = false;
  public filters: any;
  public sort: { field: string, order: number };

  constructor(
    private confirmService: ConfirmationService,
    private msg: MessageService,
    private textService: EditTextService,
    private terminalsService: TerminalsService
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Terminals);
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
      inventoryNumber: '',
      connectId: '',
      terminalOwner: '',
    };

    this.reload();
  }

  public setShowArchive(value: boolean) {
    this.showArchive = value;
    this.reload();
  }

  public reload() {
    const type = this.showArchive ? 'archive' : 'active';
    const filters =
    {
      archiveDate: {
        from: this.showArchive ? this.filters.archiveDateFrom : null,
        to: this.showArchive ? this.filters.archiveDateTo : null,
      },
      createDate: {
        from: this.filters.createDateFrom,
        to: this.filters.createDateTo,
      },
      inventoryNumber: this.filters.inventoryNumber,
      connectId: this.filters.connectId,
      terminalOwner: this.filters.terminalOwner,
    };
    const sort = this.sort ? {
      column: this.sort.field,
      descending: this.sort.order == 1 ? false : true
    } : null;

    this.terminalsService.getTerminals(type, filters, sort).subscribe(
      (data: any) => {
        data.terminals.forEach(element => {
          element.isActive = !this.showArchive;
        });
        this.terminals = data.terminals;
        this.totalRecords = data.total;
      });
  }

  public archiveTerminal(row) {
    if (row.terminalOwner) {
      var msg = this.textService.getText(MessageGroupEnum.Terminals, 'TerminalHasOwner');
      this.confirmService.confirm({
        ...Consts.Alert,
        header: 'Архивирование невозможно',
        message: msg.text || 'Нельзя отправить в архив терминал, привязанный к собственнику.',
        acceptLabel: 'Понятно',
      });
    } else {
      var msg = this.textService.getText(MessageGroupEnum.Terminals, 'TerminalArchiving');
      this.confirmService.confirm({
        ...Consts.Confirmation,
        header: msg.title || DefaultConfirmationTitle,
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          this.terminalsService.archiveTerminal(row.id).subscribe(
            () => {
              this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Терминал перенесен в архив' });
              RemoveFromArr(this.terminals, row.id);
            });
        }
      });
    }
  }

  public deleteTerminal(id) {
    var msg = this.textService.getText(MessageGroupEnum.Terminals, 'TerminalDeleting');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.terminalsService.deleteTerminal(id).subscribe(
          () => {
            RemoveFromArr(this.terminals, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Терминал удален' });
          });
      }
    });
  }

  public restoreTerminal(id) {
    var msg = this.textService.getText(MessageGroupEnum.Terminals, 'TerminalRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.terminalsService.restoreTerminal(id).subscribe(
          () => {
            RemoveFromArr(this.terminals, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Терминал восстановлен' });
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
