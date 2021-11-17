import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../../../shared/employee/employee.service';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { RemoveFromArr } from '../../../shared/helpers/array-helpers';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { Table, TableService } from 'primeng/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['../../../shared-admin.scss', './employees.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [Table, TableService]
})
export class EmployeesComponent implements OnInit {
  public employees: any[];
  public totalRecords: number;
  public showArchive: boolean = false;
  public filters: any;
  public sort: { field: string, order: number };

  constructor(
    private confirmService: ConfirmationService,
    private msg: MessageService,
    private textService: EditTextService,
    private employeeService: EmployeeService
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Employees);
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
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
      firstName: this.filters.firstName,
      lastName: this.filters.lastName,
      email: this.filters.email,
      phoneNumber: this.filters.phoneNumber,
    };
    const sort = this.sort ? {
      column: this.sort.field,
      descending: this.sort.order == 1 ? false : true
    } : null;

    this.employeeService.getEmployees(type, filters, sort).subscribe(
      (data: any) => {
        data.employees.forEach(element => {
          element.isActive = !this.showArchive;
        });
        this.employees = data.employees;
        this.totalRecords = data.total;
      });
  }

  public archiveEmployee(id) {
    var msg = this.textService.getText(MessageGroupEnum.Employees, 'EmployeeArchiving');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.employeeService.archiveEmployee(id).subscribe(
          () => {
            RemoveFromArr(this.employees, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Сотрудник перенесен в архив' });
          });
      }
    });
  }

  public deleteEmployee(id) {
    var msg = this.textService.getText(MessageGroupEnum.Employees, 'EmployeeDeleting');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.employeeService.deleteEmployee(id).subscribe(
          () => {
            RemoveFromArr(this.employees, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Сотрудник удален' });
          });
      }
    });
  }

  public restoreEmployee(id) {
    var msg = this.textService.getText(MessageGroupEnum.Employees, 'EmployeeRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.employeeService.restoreEmployee(id).subscribe(
          () => {
            RemoveFromArr(this.employees, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Сотрудник восстановлен' });
          }
        )
      }
    });
  }

  public onSort(event, field) {
    this.sort = { field, order: event };
    this.reload();
  }

  public getSortOrder(field: string) {
    return this.sort && this.sort.field == field ? this.sort.order : undefined;
  }
}
