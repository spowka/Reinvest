import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { AdminAuthService } from 'src/app/admin/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  protected headers: Headers = new Headers();

  constructor(protected http: HttpClient,
    private authService: AdminAuthService
  ) { }

  public request(method: string,
    url: string,
    data?: any,
    handleError: boolean = true) {
    const httpOptions = { body: data };

    return this.http.request(method, `${environment.API}${url}`, httpOptions)
      .pipe(
        catchError(err => {
          this.createErrorMessage(err);
          return throwError(err);
        })
      );
  }

  public get(url: string, data?: any, handleError: boolean = true) {
    return this.request('GET', url, data, handleError);
  }

  public post(url: string, data: any, handleError: boolean = true) {
    return this.request('POST', url, data, handleError);
  }

  public put(url: string, data: any, handleError: boolean = true) {
    return this.request('PUT', url, data, handleError);
  }

  public delete(url: string, handleError: boolean = true) {
    return this.request('DELETE', url, handleError);
  }

  protected createErrorMessage(err: HttpErrorResponse) {
    console.log(`Server call failes url: ${err.url} with status: ${err.status}`);
    if (err.error) {
      console.log(`Code description: ${err.error.code}, ${err.error.description} `)
    }
  }
}
