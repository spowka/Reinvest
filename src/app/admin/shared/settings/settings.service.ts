import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { ServiceSettingsResponse, ConfigParamName, ParamResponse, SocialSettingsResponse, TestPrintSettingsResponse } from './settings.model';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private _prefix = '/settings';

    constructor(
        private http: HttpClient,
        private auth: AdminAuthService
    ) {
    }

    getServiceSettings() {
        return this.http.get<ServiceSettingsResponse>(environment.API + this._prefix + `/service`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    setServiceSettings(model: ServiceSettingsResponse) {
        return this.http.post(environment.API + this._prefix + `/service`, model)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    getTestPrintSettings() {
        return this.http.get<TestPrintSettingsResponse>(environment.API + this._prefix + `/test-print`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    setTestPrintSettings(data: FormData) {
        return this.http.post(environment.API + this._prefix + `/test-print`, data)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    getParam(name: ConfigParamName) {
        return this.http.get<ParamResponse>(environment.API + this._prefix + `/${name}`)
            .pipe(catchError(err => {
                console.log(err)
                return throwError(err);
            }));
    }

    getSocialSettings() {
        return this.http.get<SocialSettingsResponse>(`${environment.API}${this._prefix}/social`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}