import { PrinterModel, TestPrintStatus } from '../../../shared/printers/printers.model';
export class PrinterModelVM extends PrinterModel {
  public editForm: any;
  public testPrintForm: TestPrintVM;
  public get title() {
    return this.name || 'Безымянный принтер';
  }
  constructor(src: PrinterModel) {
    super();
    this.id = src.id;
    this.serialHex = src.serialHex;
    this.name = src.name;
    this.status = src.status;
    this.statusDate = src.statusDate;
    this.inProfileUrl = src.inProfileUrl;
    this.outProfileUrl = src.outProfileUrl;
    this.canDoTestPrint = src.canDoTestPrint;
    this.lifeTime = src.lifeTime;
    this.remainingRibbon = src.remainingRibbon;
    this.sublimate = src.sublimate;
    this.hologram = src.hologram;
  }
}

export class TestPrintVM {
  public isLoading: boolean = true;
  public data: TestPrintStateVM;
  public taskId: string;
  public canStartTestPrint: boolean = false;
  public refreshTimer: NodeJS.Timer;

  public get printButtonLabel() {
    return this.data && this.data.status ? 'Напечатать снова' : 'Напечатать';
  }
}

import { TestPrintStateModel } from '../../../shared/printers/printers.model';
export class TestPrintStateVM {
  public status: TestPrintStatus | null;
  public error: string;
  constructor(src: TestPrintStateModel) {
    if (src) {
      this.status = src.status;
      this.error = src.error;
    }
    else {
      status = null;
    }
  }
  public get statusText() {
    switch (this.status) {
      case 'Printing': return 'Идет печать';
      case 'Success': return 'Напечатано';
      case 'Fail': return 'Ошибка';
      case 'Waiting': return 'Ожидает печати';
      default: return '-------';
    }
  }
}
