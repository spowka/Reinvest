import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CustomerModel } from '../../../shared/customer/customer.model';
import { CustomerService } from '../../../shared/customer/customer.service';
import { ConfirmationService, MessageService } from "primeng/api";
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { RemoveFromArr } from '../../../shared/helpers/array-helpers';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['../../../shared-admin.scss', './customers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements OnInit {
  public customers: CustomerModel[];
  public totalRecords: number;
  public showArchive: boolean = false;
  public filters: any;
  public sort: { field: string, order: number };

  constructor(
    private customerService: CustomerService,
    private msg: MessageService,
    private textService: EditTextService,
    private confirmService: ConfirmationService,
    private cdr: ChangeDetectorRef
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Customers);
    this.resetFilters();
  }

  public setShowArchive(value: boolean) {
    this.showArchive = value;
    this.reload();
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

  ngOnInit() { }

  public reload() {
    const type = this.showArchive ? 'archive' : 'active';
    const filters =
    {
      archiveDate: {
        from: this.showArchive ? this.filters.archiveDateFrom : null,
        to: this.showArchive ? this.filters.archiveDateTo : null,
      },
      registrationDate: {
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

    this.customerService.getCustomers(type, filters, sort).subscribe(
      (data: any) => {
        data.customers.forEach(element => {
          element.isActive = !this.showArchive;
        });

        this.customers = data.customers;
        this.totalRecords = data.total;
        this.cdr.detectChanges();
      }
    )
  }

  public archiveCustomer(id) {
    var msg = this.textService.getText(MessageGroupEnum.Customers, 'CustomerArchiving');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.customerService.archiveCustomer(id).subscribe(
          data => {
            RemoveFromArr(this.customers, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Покупатель перенесен в архив' });
          });
      }
    });
  }

  public restoreCustomer(id: string) {
    var msg = this.textService.getText(MessageGroupEnum.Customers, 'CustomerRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.customerService.restoreCustomer(id).subscribe(
          data => {
            RemoveFromArr(this.customers, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Покупатель восстановлен' });
          });
      },
      reject: () => { console.log('cancel') }
    });
  }

  public deleteCustomer(id) {
    var msg = this.textService.getText(MessageGroupEnum.Customers, 'CustomerDeleting');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.customerService.deleteCustomer(id).subscribe(
          data => {
            RemoveFromArr(this.customers, id);
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Покупатель удален' });
          });
      },
      reject: () => { console.log('cancel') }
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
