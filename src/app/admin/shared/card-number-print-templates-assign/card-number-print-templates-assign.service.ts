import { Injectable } from "@angular/core";
import { BackendService } from "src/app/shared/backend/backend.service";
import { HttpClient } from "@angular/common/http";
import { CardNumberPrintTemplateCatalogLevel, CardNumberPrintTemplateCatalogLevelBriefModel } from "./card-number-print-templates-assign.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CardNumberPrintTemplatesAssignService {
  private prefix = "/cardNumberPrintTemplateAssign";

  constructor(private backend: BackendService, private http: HttpClient) { }

  getCatalogs() {
    return this.http.get<CardNumberPrintTemplateCatalogLevelBriefModel[]>(
      `${environment.API}${this.prefix}/tree`
    );
  }

  getCatalog(id: string) {
    return this.http.get<CardNumberPrintTemplateCatalogLevel>(
      `${environment.API}${this.prefix}/${id}`
    );
  }

  applyTemplate(id: string, cardNumberPrintTemplateId: string, includeSublevels: boolean) {
    return this.http.post(`${environment.API}${this.prefix}/${id}`, { cardNumberPrintTemplateId, includeSublevels });
  }
}