import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { MessageModel } from '../../../shared/edit-texts/message.model';
import { UpdateMessageGroupRequest } from '../../../shared/edit-texts/message-group.model';
import { MessageService } from 'primeng/api';
import { BlockContext } from './block-context';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EditTextComponent implements OnInit {
  public context: { [key: string]: BlockContext } = {};

  constructor(
    private textService: EditTextService,
    private msg: MessageService,
  ) {
    this.context['employees'] = new BlockContext(MessageGroupEnum.Employees);
    this.context['customers'] = new BlockContext(MessageGroupEnum.Customers);
    this.context['catalogStructure'] = new BlockContext(MessageGroupEnum.CatalogStructure);
    this.context['cardCatalog'] = new BlockContext(MessageGroupEnum.CardCatalog);
    this.context['legalEntities'] = new BlockContext(MessageGroupEnum.LegalEntities);
    this.context['terminals'] = new BlockContext(MessageGroupEnum.Terminals);
    this.context['terminalEmbedded'] = new BlockContext(MessageGroupEnum.TerminalEmbedded);
    this.context['printing'] = new BlockContext(MessageGroupEnum.Printing);
    this.context['сart'] = new BlockContext(MessageGroupEnum.Cart);
    this.context['orders'] = new BlockContext(MessageGroupEnum.Orders);
    this.context['pickupOwnerARM'] = new BlockContext(MessageGroupEnum.PickupOwnerARM);
    this.context['cartAndOrders'] = new BlockContext(MessageGroupEnum.CartAndOrders);
    this.context['cardNumberPrintTemplates'] = new BlockContext(MessageGroupEnum.CardNumberPrintTemplates);
  }

  onToggle(event, key: string) {
    if (!event.collapsed) {
      var context = this.context[key];
      context.isLoading = true;

      this.textService.getTextsGroup(context.messageGroup).subscribe(
        (data: MessageModel[]) => {
          context.messages = {};
          data.forEach((message) => {
            context.messages[message.id] = message.text;
          });

          context.isLoading = false;
          context.isError = false;
        },
        (error) => {
          context.messages = {};

          context.isLoading = false;
          context.isError = true;
        });
    }
  }

  save(key: string) {
    var context = this.context[key];
    var request = new UpdateMessageGroupRequest();
    request.messages = [];
    for (let messageType in context.messages) {
      request.messages.push({ id: messageType, text: context.messages[messageType] });
    }

    this.textService.update(context.messageGroup, request).subscribe(
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