/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsEmployeeGetEmployeesResponse } from '../models/trade-cards-models-employee-get-employees-response';
import { TradeCardsModelsEmployeeGetEmployeesRequest } from '../models/trade-cards-models-employee-get-employees-request';
import { TradeCardsModelsEmployeeGetEmployeeResponse } from '../models/trade-cards-models-employee-get-employee-response';
import { TradeCardsModelsItemIdResponse } from '../models/trade-cards-models-item-id-response';
import { TradeCardsModelsEmployeeUpdateEmployeeRequest } from '../models/trade-cards-models-employee-update-employee-request';
import { TradeCardsModelsAccountRegisterEmployeeRequest } from '../models/trade-cards-models-account-register-employee-request';
@Injectable({
  providedIn: 'root',
})
class EmployeeService extends __BaseService {
  static readonly getEmployeesPath = '/api/employee/query';
  static readonly getEmployeePath = '/api/employee/{id}';
  static readonly updateEmployeePath = '/api/employee/{id}';
  static readonly deleteEmployeePath = '/api/employee/{id}';
  static readonly registerEmployeePath = '/api/employee';
  static readonly archiveEmployeePath = '/api/employee/{id}/archive';
  static readonly restoreEmployeePath = '/api/employee/{id}/restore';
  static readonly sendRegDataPath = '/api/employee/{id}/sendregdata';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Получение страницы списка сотрудников
   * @param model Данные запроса
   * @return Success
   */
  getEmployeesResponse(model?: TradeCardsModelsEmployeeGetEmployeesRequest): __Observable<__StrictHttpResponse<TradeCardsModelsEmployeeGetEmployeesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsEmployeeGetEmployeesResponse>;
      })
    );
  }
  /**
   * Получение страницы списка сотрудников
   * @param model Данные запроса
   * @return Success
   */
  getEmployees(model?: TradeCardsModelsEmployeeGetEmployeesRequest): __Observable<TradeCardsModelsEmployeeGetEmployeesResponse> {
    return this.getEmployeesResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsEmployeeGetEmployeesResponse)
    );
  }

  /**
   * Получение данных сотрудника
   * @param id Идентификатор сотрудника
   * @return Success
   */
  getEmployeeResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsEmployeeGetEmployeeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/employee/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsEmployeeGetEmployeeResponse>;
      })
    );
  }
  /**
   * Получение данных сотрудника
   * @param id Идентификатор сотрудника
   * @return Success
   */
  getEmployee(id: string): __Observable<TradeCardsModelsEmployeeGetEmployeeResponse> {
    return this.getEmployeeResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsEmployeeGetEmployeeResponse)
    );
  }

  /**
   * Обновление данных сотрудника
   * @param params The `EmployeeService.UpdateEmployeeParams` containing the following parameters:
   *
   * - `id`: Идентификатор сотрудника
   *
   * - `model`: Обновленные данные сотрудника
   *
   * @return Success
   */
  updateEmployeeResponse(params: EmployeeService.UpdateEmployeeParams): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.model;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/employee/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Обновление данных сотрудника
   * @param params The `EmployeeService.UpdateEmployeeParams` containing the following parameters:
   *
   * - `id`: Идентификатор сотрудника
   *
   * - `model`: Обновленные данные сотрудника
   *
   * @return Success
   */
  updateEmployee(params: EmployeeService.UpdateEmployeeParams): __Observable<TradeCardsModelsItemIdResponse> {
    return this.updateEmployeeResponse(params).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Удаление данных сотрудника
   * @param id Идентификатор пользователя
   * @return Success
   */
  deleteEmployeeResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/employee/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Удаление данных сотрудника
   * @param id Идентификатор пользователя
   * @return Success
   */
  deleteEmployee(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.deleteEmployeeResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Регистрация сотрудника
   * @param model Данные для регистрации
   * @return Success
   */
  registerEmployeeResponse(model?: TradeCardsModelsAccountRegisterEmployeeRequest): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Регистрация сотрудника
   * @param model Данные для регистрации
   * @return Success
   */
  registerEmployee(model?: TradeCardsModelsAccountRegisterEmployeeRequest): __Observable<TradeCardsModelsItemIdResponse> {
    return this.registerEmployeeResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправка данных сотрудника в архив
   * @param id Идентификатор сотрудника
   * @return Success
   */
  archiveEmployeeResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/${encodeURIComponent(id)}/archive`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Отправка данных сотрудника в архив
   * @param id Идентификатор сотрудника
   * @return Success
   */
  archiveEmployee(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.archiveEmployeeResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Восстановление данных сотрудника из архива
   * @param id Идентификатор сотрудника
   * @return Success
   */
  restoreEmployeeResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/${encodeURIComponent(id)}/restore`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Восстановление данных сотрудника из архива
   * @param id Идентификатор сотрудника
   * @return Success
   */
  restoreEmployee(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.restoreEmployeeResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }

  /**
   * Отправить рег. данные сотрудника
   * @param id Идентификатор сотрудника
   * @return Success
   */
  sendRegDataResponse(id: string): __Observable<__StrictHttpResponse<TradeCardsModelsItemIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/employee/${encodeURIComponent(id)}/sendregdata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsItemIdResponse>;
      })
    );
  }
  /**
   * Отправить рег. данные сотрудника
   * @param id Идентификатор сотрудника
   * @return Success
   */
  sendRegData(id: string): __Observable<TradeCardsModelsItemIdResponse> {
    return this.sendRegDataResponse(id).pipe(
      __map(_r => _r.body as TradeCardsModelsItemIdResponse)
    );
  }
}

module EmployeeService {

  /**
   * Parameters for UpdateEmployee
   */
  export interface UpdateEmployeeParams {

    /**
     * Идентификатор сотрудника
     */
    id: string;

    /**
     * Обновленные данные сотрудника
     */
    model?: TradeCardsModelsEmployeeUpdateEmployeeRequest;
  }
}

export { EmployeeService }
