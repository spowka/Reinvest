import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { EmployeeEditModel, RegisterEmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private prefix = '/employee';

  constructor(private http: HttpClient, private auth: AdminAuthService) { }

  public getEmployees(type: string, filters?: any, sort?: any) {
    return this.http.post(environment.API + this.prefix + '/query', {
      'isActive': type === 'active',
      'pageSize': 50,
      'pageIndex': 0,
      'filter': filters ? filters : '',
      'sortOrder': sort ? sort : ''
    }, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public registerEmployee(user: RegisterEmployeeModel) {
    return this.http.post(environment.API + this.prefix, user, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        }),
        map((data: any) => data.id)
      );
  }

  public getEmployee(id: string) {
    console.log(environment.API + `Manage/GetCustomer/${id}`)
    return this.http.get(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public archiveEmployee(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/archive`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public deleteEmployee(id: string) {
    return this.http.delete(environment.API + this.prefix + `/${id}`, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public restoreEmployee(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/restore`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public sendEmployeeRegData(id: string) {
    return this.http.post(environment.API + this.prefix + `/${id}/sendregdata`, {}, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  public updateInfoEmployee(id: string, info: EmployeeEditModel) {
    return this.http.put(environment.API + this.prefix + `/${id}`, info, {})
      .pipe(
        catchError(err => {
          console.log(err)
          return throwError(err);
        })
      );
  }
}
