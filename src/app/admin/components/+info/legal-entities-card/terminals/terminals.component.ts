import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, DialogService, MessageService } from 'primeng/api';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { TerminalService } from '../../../../../api/services/terminal.service';
import { EditTextService } from '../../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../../shared/edit-texts/MessageGroupEnum';
import { RemoveFromArr } from '../../../../shared/helpers/array-helpers';
import { AttachTerminalComponent } from '../attach-terminal/attach-terminal.component';

@Component({
  selector: 'legal-entities-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {
  terminals: any[] = [];
  @Input() public ownerId: string;
  isArchived: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmService: ConfirmationService,
    private textService: EditTextService,
    private msg: MessageService,
    private dialogService: DialogService, private terminalService: TerminalService) {
    this.textService.loadTextsGroup(MessageGroupEnum.LegalEntities);
  }

  ngOnInit() {
    this.getTerminals();
  }

  getTerminals() {
    this.terminalService.getLegalEntityTerminals({
      legalEntityId: this.ownerId,
      model: {
        pageSize: 1000,
        pageIndex: 0
      }
    }).toPromise().then(x => {
      this.terminals = x.terminals;
    }, error => {

    });
  }

  public deleteTerminal(id: string) {
    var msg = this.textService.getText(MessageGroupEnum.LegalEntities, 'TerminalOwnerTerminalDetach');

    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.terminalService.detachTerminal(id).toPromise().then(x => {
          RemoveFromArr(this.terminals, id);
        }, error => {
          this.msg.add({ summary: 'Произошла ошибка при исключении терминала', severity: 'error' });
        });
      },
      reject: () => { }
    });
  }

  public addTerminals() {
    const ref = this.dialogService.open(AttachTerminalComponent, {
      header: 'Прикрепление терминала к юридическому лицу',
      style: { 'max-height': '95%', overflow: 'auto' },
      data: {
        ownerId: this.ownerId,
        attachedTerminalIds: this.terminals && this.terminals.map(t => t.id) || []
      }
    });
    ref.onClose.subscribe((result) => {
      if (result) {
        this.terminals = result;
      }
      // закрыли через крестик
      else {
        this.getTerminals();
      }
    });
  }
}
