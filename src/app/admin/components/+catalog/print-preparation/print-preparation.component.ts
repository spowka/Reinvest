import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, SelectItem, ConfirmationService } from 'primeng/api';
import { PrintingService } from '../../../shared/printing/printing.service';
import { PrintPreparationModel, PreparationOrder, PreparationPrinterVM, PreparationCard } from '../../../shared/printing/printing.model';
import { FormService } from '../../../shared/form/form-service';
import { Router } from '@angular/router';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { getStatusLabel } from '../orders/order-statuses';

@Component({
  selector: 'app-print-preparation',
  templateUrl: './print-preparation.component.html',
  styleUrls: ['../../../shared-admin.scss', './print-preparation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrintPreparationComponent implements OnInit {
  public orders: PreparationOrder[];
  public printers: PreparationPrinterVM[];
  public orderPrinterItemsWithEmptyRow: SelectItem[];
  public orderPrinterItems: SelectItem[];
  public cardPrinterItems: SelectItem[];
  public printersVisible: boolean;
  public showPrintError: boolean;

  canUpdateData = true;

  private _timer: NodeJS.Timer = null;

  constructor(
    private msg: MessageService,
    private formService: FormService,
    private printingService: PrintingService,
    private router: Router,
    private textService: EditTextService,
    private confirmService: ConfirmationService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Printing);

    this.printersVisible = true;

    this.printingService.getPrintPreparation().subscribe(
      (response: PrintPreparationModel) => {
        this.printers = response.printers.map(t => ({ ...t, isSelected: t.isReady }));
        this.updatePrinters();

        this.orders = response.orders;
        this.updateOrderPrinters();
      },
      error => {
        console.log(error);
      }
    );
  }

  togglePrinters() { this.printersVisible = !this.printersVisible; }

  orderPrinterChanged(order: PreparationOrder) {
    if (order.printer) {
      order.cards.forEach(t => t.printer = order.printer);
    }
  }

  hasErrors(): boolean {
    var result = this.orders.some(order => order.cards.some(card => !card.printer && !order.printer && this.canSelectPrinter(card)));
    return result;
  }

  cancelPrint() {
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: DefaultConfirmationTitle,
      message: 'Закрыть сессию печати?',
      accept: () => {
        this.printingService.cancelSession().subscribe(
          () => {
            this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Печать отменена' });
            this.router.navigate(['/admin/main/orders']);
          },
          error => {
            console.log(error);
            this.formService.showServerErrors(this.msg, error);
          }
        );
      }
    });
  }

  print() {
    if (this.hasErrors()) {
      this.showPrintError = true;
      this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Выберите принтеры для всех карточек' });
    } else {
      this.showPrintError = false;
      var msg = this.textService.getText(MessageGroupEnum.Printing, 'PrintingStart');
      this.confirmService.confirm({
        ...Consts.Confirmation,
        header: msg.title || DefaultConfirmationTitle,
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          var orders = this.orders.map(order => ({
            id: order.id,
            printer: order.printer,
            cards: order.cards.map(card => ({
              id: card.id,
              printer: card.printer
            }))
          }));
          var printers = this.printers.filter(t => t.isSelected).map(printer => (printer.id));

          this.printingService.print({ orders, printers }).subscribe(
            () => {
              this.msg.add({ severity: 'success', summary: 'Успех', detail: 'Заказы отправлены на печать' });
              this.router.navigate(['/admin/main/print-process']);
            },
            error => {
              console.log(error);
              this.formService.showServerErrors(this.msg, error);
            }
          );
        }
      });
    }
  }

  isPrinterUsedChanged() {
    this.updatePrinters();
    this.updateOrderPrinters();
  }

  getOrderPrinterItems(order: any) {
    return order.printer ? this.orderPrinterItems : this.orderPrinterItemsWithEmptyRow;
  }

  ngOnInit() {
    this._timer = setInterval(() => {
      if (this.canUpdateData) {
        this.updatePrinterStatuses();
      }
    }, 3000);
  }

  ngOnDestroy() {
    this._timer && clearInterval(this._timer);
  }

  updateOrderPrinters() {
    let firstAvailablePrinter = this.printers.find(t => t.isReady && t.isSelected);
    let firstAvailablePrinterId = firstAvailablePrinter ? firstAvailablePrinter.id : null;
    let printers = this.printers;

    this.orders.forEach(order => {
      let orderPrinter = printers.find(t => t.id == order.printer);

      if (!orderPrinter || !orderPrinter.isSelected)
        order.printer = firstAvailablePrinterId;

      order.cards.forEach(card => {
        let cardPrinter = printers.find(t => t.id == card.printer);
        if (!cardPrinter || !cardPrinter.isSelected)
          card.printer = order.printer;
      });
    });
  }

  updatePrinters() {
    const emptyRow: SelectItem = { value: '', label: '---' };
    this.orderPrinterItems = this.printers.filter(t => t.isSelected).map(t => ({ value: t.id, label: t.name }));
    this.orderPrinterItemsWithEmptyRow = [emptyRow].concat(this.orderPrinterItems);

    this.cardPrinterItems = this.printers.filter(t => t.isSelected).map(t => ({ value: t.id, label: t.name }));
  }

  updatePrinterStatuses() {
    this.canUpdateData = false;
    this.printingService.getPrintPreparation().subscribe(
      response => {
        response.printers.forEach(printer => {
          let currentPrinter = this.printers.find(t => t.id == printer.id);
          currentPrinter.status = printer.status;
          currentPrinter.isReady = printer.isReady;

          if (!currentPrinter.isReady && currentPrinter.isSelected) {
            currentPrinter.isSelected = false;
            this.updatePrinters();
            this.updateOrderPrinters();
          }
        });
        this.canUpdateData = true;
      },
      error => {
        console.log(error);
        this.canUpdateData = true;
      }
    );
  }

  getCardStatusClass(card: PreparationCard) {
    switch (card.status) {
      case "Completed": return "card-completed";
      case "Error": return "card-error";
      case "Rejected": return "card-rejected";
      default: return null;
    }
  }

  canSelectPrinter(card: PreparationCard) {
    switch (card.status) {
      case "Waiting": return true;
      case "Preparing": return true;
      default: return false;
    }
  }

  getStatusLabel(status: string) {
    return getStatusLabel(status);
  }
}