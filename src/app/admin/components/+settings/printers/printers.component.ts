import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../../shared/form/form-service';
import { PrintersService } from '../../../shared/printers/printers.service';
import { PrinterModel, TestPrintStateModel } from '../../../shared/printers/printers.model';
import { FileEditModel } from '../../../shared/file/file-edit-model';
import { AddFileToForm } from '../../../shared/file/add-file-to-form';
import { PrinterModelVM, TestPrintStateVM, TestPrintVM } from './printers.vm';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['../../../shared-admin.scss', './printers.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PrintersComponent implements OnInit {
  public isLoading = true;
  public printers: PrinterModelVM[];

  constructor(
    private printersService: PrintersService,
    private msg: MessageService,
    public formBuilder: FormBuilder,
    private formService: FormService,
  ) {
    this.reloadPrinters();
  }

  ngOnInit() {
  }

  private reloadPrinters() {
    this.printersService.getPrinters().subscribe(
      (data: PrinterModel[]) => {
        this.printers = data.map(t => new PrinterModelVM(t));
        this.isLoading = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  // свернуть все блоки для указанного принтера
  public collapseForms(row: PrinterModelVM) {
    if (row.editForm) {
      row.editForm = null;
    }

    if (row.testPrintForm) {
      clearInterval(row.testPrintForm.refreshTimer);
      row.testPrintForm = null;
    }
  }

  public commitEdit(row: PrinterModelVM) {
    const formData = FormService.getFormData(row.editForm);
    
    AddFileToForm(formData, 'inProfile', row.editForm.inProfile.file);
    AddFileToForm(formData, 'outProfile', row.editForm.outProfile.file);

    this.isLoading = true;
    this.printersService.updatePrinter(row.id, formData).subscribe(
      () => {
        this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
        this.reloadPrinters();
      },
      error => {
        this.formService.showServerErrors(this.msg, error);
        this.reloadPrinters();
      }
    );
  }

  // открыть блок редактирования настроек принтера
  public openEdit(row: PrinterModelVM) {
    row.editForm = {
      name: row.name,
      inProfile: new FileEditModel(''),
      outProfile: new FileEditModel(''),
    };

    row.editForm.inProfile.url = row.inProfileUrl;
    row.editForm.outProfile.url = row.outProfileUrl;
  }

  // открыть блок тестовой печати
  public openTestPrint(row: PrinterModelVM) {
    row.testPrintForm = new TestPrintVM();

    this.updateTestPrintStatus(this.printersService, row);
    row.testPrintForm.refreshTimer = setInterval(this.updateTestPrintStatus, 5000, this.printersService, row);
  }

  // обновить статус тестовой печати для указанного принтера
  updateTestPrintStatus(printersService: PrintersService, row: PrinterModelVM) {
    printersService.getTestPrintStatus(row.id, row.testPrintForm && row.testPrintForm.taskId).subscribe(
      (data: TestPrintStateModel) => {
        if (row.testPrintForm) {
          row.testPrintForm.isLoading = false;
          row.testPrintForm.taskId = data.taskId;
          row.testPrintForm.canStartTestPrint = data.canStartTestPrint;
          row.testPrintForm.data = new TestPrintStateVM(data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // запустить тестовую печать для указанного принтера
  public doTestPrint(row: PrinterModelVM) {
    if (row.canDoTestPrint && row.testPrintForm.canStartTestPrint) {
      this.printersService.doTestPrint(row.id).subscribe(
        (data: any) => {
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: `Создано задание на тестовую печать для принтера ${row.name}` });
          row.testPrintForm.taskId = data.id;
          this.updateTestPrintStatus(this.printersService, row);
        },
        error => {
          this.formService.showServerErrors(this.msg, error);
          console.log(error);
        }
      );
    }
  }
}