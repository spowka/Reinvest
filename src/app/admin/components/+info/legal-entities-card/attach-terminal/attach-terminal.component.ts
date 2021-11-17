import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, MessageService } from "primeng/api";
import { GetTerminalsForAttachRow } from 'src/app/admin/shared/terminals/terminals.model';
import { Terminal } from 'src/app/admin/shared/terminal-owners/terminal-owners.model';
import { FindInArr } from 'src/app/admin/shared/helpers/array-helpers';
import { TerminalService } from '../../../../../api/services/terminal.service';

@Component({
  selector: 'attach-terminal',
  templateUrl: './attach-terminal.component.html',
  styleUrls: ['../../../../shared-admin.scss',
    './attach-terminal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AttachTerminalComponent implements OnInit {
  public isPending = false;

  public ownerId: string;
  public terminals: any[];
  public attachedTerminalIds: string[];
  public searchString: string;

  constructor(
    private ref: DynamicDialogRef,
    config: DynamicDialogConfig,
    private terminalsService: TerminalService,
    private messageService: MessageService
  ) {
    this.ownerId = config.data.ownerId;
    this.attachedTerminalIds = config.data.attachedTerminalIds;

    this._getTerminals();
  }

  private _isAttachedToCurrent(id: string) {
    return this.attachedTerminalIds.includes(id);
  }

  public search() {
    this._getTerminals();
  }

  private _getTerminals() {
    this.terminalsService.getTerminalsForAttach({
      legalEntityId: this.ownerId,
      model: {
        connectId: this.searchString
      }
    }).subscribe(
      (data: GetTerminalsForAttachRow[]) => {
        this.terminals = data.map(terminal => ({
          ...terminal,
          attachedToCurrent: this._isAttachedToCurrent(terminal.id),
          canAttach: !this._isAttachedToCurrent(terminal.id) && terminal.terminalOwnerId == null
        }));
      }, error => {
        console.log(error);
        this.closeModal();
      });
  }

  public attach(row: any) {
       this.terminalsService.attachTerminal( {
      id: row.id,
      model: {legalEntityId: this.ownerId}
    }).toPromise().then(x=>{
      this._getTerminals();
      this.attachedTerminalIds.push(row.id);
    }, error=>{
      this.messageService.add({ summary: 'Произошла ошибка при добавлении терминала', severity: 'error' });
    });
  }

  ngOnInit() {
  }
  
  public closeModal() {
    var result: Terminal[] = this.attachedTerminalIds.map(id => ({
      id, connectId: FindInArr(this.terminals, id).connectId
    }));

    this.ref.close(result);
  }
}