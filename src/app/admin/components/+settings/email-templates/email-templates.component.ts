import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmailTemplatesService } from '../../../shared/email-templates/email-templates.service';
import { MessageTypeEnum } from '../../../shared/email-templates/MessageTypeEnum';
import { EmailTemplateModel } from '../../../shared/email-templates/email-template.model';

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EmailTemplatesComponent implements OnInit {
  public context: { [key: string]: BlockContext } = {};
  public keyWords: { key: string; description: string; }[] = [];

  constructor(
    private emailTemplatesService: EmailTemplatesService,
    private msg: MessageService,
  ) {
    this.keyWords = this.emailTemplatesService.getKeyWords();
    this.context['CustomerRegData'] = new BlockContext(MessageTypeEnum.CustomerRegData);
    this.context['CustomerRegistrationSuccess'] = new BlockContext(MessageTypeEnum.CustomerRegistrationSuccess);
    this.context['EmployeeRegData'] = new BlockContext(MessageTypeEnum.EmployeeRegData);
    this.context['NewPassword'] = new BlockContext(MessageTypeEnum.NewPassword);
    this.context['PasswordRestoreLink'] = new BlockContext(MessageTypeEnum.PasswordRestoreLink);
    this.context['TerminalOwnerRegData'] = new BlockContext(MessageTypeEnum.TerminalOwnerRegData);
    this.context['PickupPointRegData'] = new BlockContext(MessageTypeEnum.PickupPointRegData);
    this.context['CustomerCreatedByOrderSuccess'] = new BlockContext(MessageTypeEnum.CustomerCreatedByOrderSuccess);
  }

  onToggle(event, key: string) {
    if (!event.collapsed) {
      var context = this.context[key];
      context.isLoading = true;

      this.emailTemplatesService.loadEmailTemplate(context.messageType).subscribe(
        (data: EmailTemplateModel) => {
          context.message = data.message;

          context.isLoading = false;
          context.isError = false;
        },
        (error) => {
          context.message = '';

          context.isLoading = false;
          context.isError = true;
        });
    }
  }

  save(key: string) {
    var context = this.context[key];
    var request = new EmailTemplateModel();
    request.message = context.message;

    this.emailTemplatesService.update(context.messageType, request).subscribe(
      data => {
        this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Данные сохранены' });
      },
      error => {
        this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Ошибка сохранения' });
      });
  }

  ngOnInit() {
  }
}

class BlockContext {
  isLoading: boolean = true;
  isError: boolean = false;

  message: string;

  constructor(
    public messageType: MessageTypeEnum
  ) {
  }

  public showError(): boolean {
    return !this.isLoading && this.isError;
  }
  public showContent(): boolean {
    return !this.isLoading && !this.isError;
  }
}