import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import {
  DialogService,
  MessageService,
  ConfirmationService,
} from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";
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

@Component({
  selector: "app-card-number-print-templates",
  templateUrl: "./card-number-print-templates.component.html",
  styleUrls: [
    "../../../shared-admin.scss",
    "./card-number-print-templates.component.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardNumberPrintTemplatesComponent implements OnInit, OnDestroy {
  tab = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private msg: MessageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params.tab) {
        this.tab = params.tab;
      } else {
        this.setTab('list');
      }
    });
  }

  ngOnDestroy() { }

  public setTab(tabName: string) {
    this.router.navigate([`/admin/main/card-number-print-templates/${tabName}`]);
  }
}
