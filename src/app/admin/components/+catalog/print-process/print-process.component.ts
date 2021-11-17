import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, SelectItem, DialogService, ConfirmationService } from 'primeng/api';
import { PrintingService } from '../../../shared/printing/printing.service';
import { FormService } from '../../../shared/form/form-service';
import { Router } from '@angular/router';
import { PrintProcessModel, PrintingPrinter, PrintingCard, PreparationCard } from '../../../shared/printing/printing.model';
import { ChangeCardStatusComponent } from './change-card-status/change-card-status.component';
import { Consts, DefaultConfirmationText } from 'src/app/consts';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { getStatusLabel } from '../orders/order-statuses';

@Component({
  selector: 'app-print-process',
  templateUrl: './print-process.component.html',
  styleUrls: ['../../../shared-admin.scss', './print-process.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrintProcessComponent implements OnInit {
  printersVisible: boolean;
  printerItems: SelectItem[];
  processInfo: PrintProcessModel;
  printingForceShutdownDelayedMessage: string = "Сессия печати будет автоматически закрыта, как только все принтеры завершат текущие задания";

  canUpdateData = true;
  loading = false;
  timer: NodeJS.Timer = null;

  constructor(
    private msg: MessageService,
    private formService: FormService,
    private printingService: PrintingService,
    private router: Router,
    private dialogService: DialogService,
    private confirmService: ConfirmationService,
    private textService: EditTextService,
  ) {
    this.printersVisible = true;
    this.updateData();
    this.textService.loadTextsGroup(MessageGroupEnum.Printing, data => {
      this.printingForceShutdownDelayedMessage = this.textService.getText(MessageGroupEnum.Printing, 'PrintingForceShutdownDelayedMessage').text;
    });
  }

  isPrinterUsedChanged() {
    let printerIds = this.processInfo.printers.filter(t => t.isSelected).map(t => (t.id));
    this.printingService.editPrintProcessSelectedPrinters(printerIds).subscribe(
      response => { },
      error => {
        this.formService.showServerErrors(this.msg, error);
      }
    );
  }

  updatePrinters() {
    this.printerItems = [{ value: '', label: '' }]
      .concat(this.processInfo.printers.filter(t => t.isSelected).map(t => ({ value: t.id, label: t.name })));
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      if (this.canUpdateData && !this.loading) {
        this.updateData();
      }
    }, 3000);
  }

  ngOnDestroy() {
    this.timer && clearInterval(this.timer);
  }

  pauseRefresh() {
    this.canUpdateData = false;
  }
  resumeRefresh() {
    this.canUpdateData = true;
  }

  updateData() {
    this.loading = true;
    this.printingService.getPrintProcess().subscribe(
      response => {
        this.loading = false;

        //если в списке есть карты в статусе Preparing и для них были выбраны принтеры, надо восстановить выбор
        //(он не хранится на сервере)
        if (this.processInfo) {
          response.orders.forEach(order => order.cards.forEach(card => {
            if (card.status == 'Preparing') {
              let oldOrder = this.processInfo.orders.find(t => t.id == order.id);
              let oldCard = oldOrder && oldOrder.cards.find(oldCard => oldCard.id == card.id);
              if (oldCard) {
                card.printerId = oldCard.printerId;
              }
            }
          }));
        }

        this.processInfo = response;
        this.updatePrinters();
      },
      error => {
        this.loading = false;
        console.log(error);
        this.router.navigate(['/admin/main/orders']);
      }
    );
  }

  togglePrinters() { this.printersVisible = !this.printersVisible; }

  stopPrinter(printer: PrintingPrinter) {
    if (printer.canStop) {
      var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingStopPrinter');
      this.confirmService.confirm({
        ...Consts.Confirmation,
        header: 'Остановка печати',
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          this.printingService.stopPrinter(printer.id).subscribe(
            (response) => {
              this.msg.add({ severity: 'success', summary: 'Успех', detail: `Принтер ${printer.name} остановлен` });
              this.updateData();
            },
            error => {
              this.formService.showServerErrors(this.msg, error);
              this.updateData();
            }
          );
        }
      });
    }
  }

  stopAllPrinters() {
    if (this.processInfo.canStopAll) {
      var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingStopAllPrinters');
      this.confirmService.confirm({
        ...Consts.Confirmation,
        header: 'Остановка печати на всех принтерах',
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          this.printingService.stopAllPrinters().subscribe(
            (response) => {
              this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Все принтеры остановлены' });
              this.updateData();
            },
            error => {
              this.formService.showServerErrors(this.msg, error);
              this.updateData();
            }
          );
        }
      });
    }
  }

  reject(card) {
    var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingReject');
    this._openModal('Заявление брака', {
      title: 'Карточка забракована?',
      message: msg.text || DefaultConfirmationText,
      commentLabel: 'Укажите причину брака',
    }, (data) => {
      if (data) {
        this.printingService.rejectCard(card.id, data.comment).subscribe(
          (response) => {
            this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Карточка забракована' });
            this.updateData();
          },
          error => {
            this.formService.showServerErrors(this.msg, error);
            this.updateData();
          }
        );
      }
    });
  }

  cancel(card) {
    var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingCancel');
    this._openModal('Отмена печати карточки', {
      title: 'Отменить печать карточки?',
      message: msg.text || DefaultConfirmationText,
      commentLabel: 'Укажите причину отмены',
    }, (data) => {
      if (data) {
        this.printingService.cancelCard(card.id, data.comment).subscribe(
          (response) => {
            this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Карточка отменена' });
            this.updateData();
          },
          error => {
            this.formService.showServerErrors(this.msg, error);
            this.updateData();
          }
        );
      }
    });
  }

  reprint(card) {
    if (card.printerId) {
      this.printingService.reprintCard(card.id, card.printerId).subscribe(
        (response) => {
          this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Карточка отправлена на повторную печать' });
          this.updateData();
        },
        error => {
          this.formService.showServerErrors(this.msg, error);
          this.updateData();
        }
      );
    }
  }

  //штатное завершение работы, когда все карточки напечатаны
  completePrint() {
    if (this.processInfo.canFinish) {
      var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingComplete');
      this.confirmService.confirm({
        ...Consts.Confirmation,
        header: 'Завершение процесса печати',
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          this.printingService.finishSession().subscribe(
            (response) => {
              this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Сессия печати завершена' });
              this.router.navigate(['/admin/main/orders']);
            },
            error => {
              this.formService.showServerErrors(this.msg, error);
              this.updateData();
            }
          );
        }
      });
    }
  }

  //принудительное завершение работы
  forceShutdown() {
    //кнопка недоступна, если доступно штатное завершение
    if (!this.processInfo.canFinish) {
      var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingForceShutdownMessage');
      this.confirmService.confirm({
        ...Consts.Confirmation,
        header: 'Экстренное завершение процесса печати',
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          this.printingService.forceShutdownSession().subscribe(
            response => {
              if (response.isImmediate) {
                this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Сессия печати завершена' });
                this.router.navigate(['/admin/main/orders']);
              } else {
                this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Запланировано завершение сессии печати' });
                this.updateData();
              }
            },
            error => {
              this.formService.showServerErrors(this.msg, error);
              this.updateData();
            }
          );
        }
      });
    }
  }

  getCardStatusClass(card: PrintingCard): string {
    switch (card.status) {
      case "Completed": return "card-completed";
      case "Printing": return "card-printing";
      case "Error": return "card-error";
      case "Rejected": return "card-rejected";
      default: return null;
    }
  }

  private _openModal(header: string, data: any, onClose) {
    const ref = this.dialogService.open(ChangeCardStatusComponent, {
      header,
      style: { 'max-height': '95%', overflow: 'auto' },
      data
    });
    ref.onClose.subscribe(onClose);
  }

  getStatusLabel(status: string) {
    return getStatusLabel(status);
  }

  canReject() {
    return !this.processInfo.forceShutdownRequested;
  }
  canCancel() {
    return !this.processInfo.forceShutdownRequested;
  }
  canReprint(card) {
    return !this.processInfo.forceShutdownRequested && card.printerId;
  }
}
