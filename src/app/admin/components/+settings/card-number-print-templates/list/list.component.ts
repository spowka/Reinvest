import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import {
  DialogService,
  MessageService,
  ConfirmationService,
} from "primeng/api";
import { Router } from "@angular/router";
import {
  Consts,
  DefaultConfirmationTitle,
  DefaultConfirmationText,
} from "src/app/consts";
import {
  CalendarLocale,
  CurrentCalendarLocale,
} from "src/app/shared/calendar-locale";
import { CardNumberPrintTemplatesService } from "src/app/admin/shared/card-number-print-templates/card-number-print-templates.service";
import { CardNumberPrintTemplateBriefModel } from "src/app/admin/shared/card-number-print-templates/card-number-print-templates.model";
import { EditTextService } from "src/app/admin/shared/edit-texts/edit-text.service";
import { MessageGroupEnum } from "src/app/admin/shared/edit-texts/MessageGroupEnum";
import { FormService } from "src/app/admin/shared/form/form-service";
import { ServerErrorHelper } from "src/app/admin/shared/helpers/server-error-helper";

@Component({
  selector: "app-card-number-print-templates-list",
  templateUrl: "./list.component.html",
  styleUrls: [
    "../../../../shared-admin.scss",
    "./list.component.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardNumberPrintTemplatesListComponent implements OnInit, OnDestroy {
  calendarLocale: CalendarLocale;

  isLoading = false;
  pages: CardNumberPrintTemplateBriefModel[] = [];
  filters: any = {};
  sort = { field: "createDate", order: -1 };
  totalRecords = 0;

  constructor(
    private dialogService: DialogService,
    private textService: EditTextService,
    private formService: FormService,
    private cardNumberPrintTemplatesService: CardNumberPrintTemplatesService,
    private msg: MessageService,
    private router: Router,
    private confirmService: ConfirmationService
  ) {
    this.calendarLocale = CurrentCalendarLocale;
    this.textService.loadTextsGroup(MessageGroupEnum.CardNumberPrintTemplates);
  }

  resetFilters() {
    this.filters = {
      createDateFrom: "",
      createDateTo: "",
      name: "",
      assignedCards: "",
    };

    this.reload();
  }

  public reload() {
    const filters = {
      createDate: {
        from: this.filters.createDateFrom,
        to: this.filters.createDateTo,
      },
      name: this.filters.name,
      assignedCards: this.filters.assignedCards,
    };
    const sort = this.sort
      ? {
        column: this.sort.field,
        descending: this.sort.order == 1 ? false : true,
      }
      : null;

    this.cardNumberPrintTemplatesService
      .getAll(filters, sort)
      .subscribe((response) => {
        this.pages = response.items;
        this.totalRecords = response.total;
      });
  }

  ngOnInit() {
    this.resetFilters();
  }

  ngOnDestroy() { }

  edit(row) {
    this.router.navigate([`/admin/main/card-number-print-templates/list/${row.id}`]);
  }

  delete(row) {
    const msg = this.textService.getText(MessageGroupEnum.CardNumberPrintTemplates, 'CardNumberPrintTemplateDelete');

    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.cardNumberPrintTemplatesService
          .delete(row.id)
          .subscribe((response: any) => {
            this.reload();
            this.msg.add({
              severity: "success",
              summary: "Успешно",
              detail: "Шаблон удален",
            });
          }, error => {
            ServerErrorHelper.processErrorModel(error, "EntityDeleteErrorResponse", error => {
              if (error.hasConnectionsWithCatalogs) {
                const errMsg = this.textService.getText(MessageGroupEnum.CardNumberPrintTemplates, 'CardNumberPrintTemplateDeleteError');
                this.msg.add({ severity: 'error', summary: 'Ошибка', detail: errMsg.text });
              } else {
                this.formService.showServerErrors(this.msg, error);
              }
            }) ||
              this.formService.showServerErrors(this.msg, error);
          })
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
