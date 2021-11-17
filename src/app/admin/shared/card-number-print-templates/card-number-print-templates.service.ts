import { Injectable } from "@angular/core";
import { BackendService } from "src/app/shared/backend/backend.service";
import { HttpClient } from "@angular/common/http";
import {
  CardNumberPrintTemplateBriefModel,
  CardNumberPrintTemplateModel,
  FontInfo,
} from "./card-number-print-templates.model";
import { environment } from "src/environments/environment";
import { ItemIdResponse } from "../cards/card.model";
import { GetItemsResponse } from "../get-items-response";

@Injectable({
  providedIn: "root",
})
export class CardNumberPrintTemplatesService {
  private prefix = "/cardNumberPrintTemplate";

  constructor(private backend: BackendService, private http: HttpClient) { }

  getAll(filters?: any, sort?: any) {
    return this.http.post<GetItemsResponse<CardNumberPrintTemplateBriefModel>>(
      `${environment.API}${this.prefix}/query`,
      {
        pageSize: 50,
        pageIndex: 0,
        filter: filters ? filters : "",
        sortOrder: sort ? sort : "",
      }
    );
  }

  getFonts() {
    return this.http.get<FontInfo[]>(
      `${environment.API}${this.prefix}/fonts`
    );
  }

  get(id: string) {
    return this.http.get<CardNumberPrintTemplateModel>(
      `${environment.API}${this.prefix}/${id}`
    );
  }

  saveCardNumberPrintTemplate(id: string, data: FormData) {
    var request = id
      ? this.http.put<ItemIdResponse>(
        `${environment.API}${this.prefix}/${id}`,
        data,
        {}
      )
      : this.http.post<ItemIdResponse>(
        `${environment.API}${this.prefix}`,
        data,
        {}
      );
    return request;
  }

  delete(id: string) {
    return this.http.delete(`${environment.API}${this.prefix}/${id}`);
  }
}
