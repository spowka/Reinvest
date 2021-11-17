/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsMessageGetEmailTemplateResponse } from '../models/trade-cards-models-message-get-email-template-response';
import { TradeCardsModelsMessageUpdateEmailTemplateRequest } from '../models/trade-cards-models-message-update-email-template-request';
@Injectable({
  providedIn: 'root',
})
class EmailTemplateService extends __BaseService {
  static readonly getEmailTemplatePath = '/api/email-template/{id}';
  static readonly updateMessageGroupPath = '/api/email-template/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение шаблона письма
   * @param id undefined
   * @return Success
   */
  getEmailTemplateResponse(id: 'CustomerRegData' | 'CustomerRegistrationSuccess' | 'EmployeeRegData' | 'NewPassword' | 'PasswordRestoreLink' | 'TerminalOwnerRegData' | 'PickupPointRegData' | 'CustomerCreatedByOrderSuccess'): __Observable<__StrictHttpResponse<TradeCardsModelsMessageGetEmailTemplateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/email-template/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsMessageGetEmailTemplateResponse>;
      })
    );
  }
  /**
   * Получение шаблона письма
   * @param id undefined
   * @return Success
   */
  getEmailTemplate(id: 'CustomerRegData' | 'CustomerRegistrationSuccess' | 'EmployeeRegData' | 'NewPassword' | 'PasswordRestoreLink' | 'TerminalOwnerRegData' | 'PickupPointRegData' | 'CustomerCreatedByOrderSuccess'): __Observable<TradeCardsModelsMessageGetEmailTemplateResponse> {
    return this.getEmailTemplateResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsMessageGetEmailTemplateResponse)
    );
  }

  /**
   * Обновление шаблона письма
   * @param params The `EmailTemplateService.UpdateMessageGroupParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `model`:
   *
   * @return Success
   */
  updateMessageGroupResponse(params: EmailTemplateService.UpdateMessageGroupParams): __Observable<__StrictHttpResponse<TradeCardsModelsMessageGetEmailTemplateResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/email-template/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsMessageGetEmailTemplateResponse>;
      })
    );
  }
  /**
   * Обновление шаблона письма
   * @param params The `EmailTemplateService.UpdateMessageGroupParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `model`:
   *
   * @return Success
   */
  updateMessageGroup(params: EmailTemplateService.UpdateMessageGroupParams): __Observable<TradeCardsModelsMessageGetEmailTemplateResponse> {
    return this.updateMessageGroupResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsMessageGetEmailTemplateResponse)
    );
  }
}

module EmailTemplateService {

  /**
   * Parameters for UpdateMessageGroup
   */
  export interface UpdateMessageGroupParams {
    id: 'CustomerRegData' | 'CustomerRegistrationSuccess' | 'EmployeeRegData' | 'NewPassword' | 'PasswordRestoreLink' | 'TerminalOwnerRegData' | 'PickupPointRegData' | 'CustomerCreatedByOrderSuccess';
    model?: TradeCardsModelsMessageUpdateEmailTemplateRequest;
  }
}

export { EmailTemplateService }
