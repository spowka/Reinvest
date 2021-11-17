import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class PrintersService {
    private prefix = '/printer';

    constructor(
        private http: HttpClient,
        private auth: AdminAuthService
    ) {
    }

    public getPrinters() {
        return this.http.get(environment.API + this.prefix)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    public updatePrinter(id: string, data: FormData) {
        return this.http.put(environment.API + this.prefix + `/${id}`, data)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    public doTestPrint(id: string) {
        return this.http.post(environment.API + this.prefix + `/${id}/print`, {})
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

	// получить информацию о статусе тестовой печати для заданного принтера
	// если taskId задан, то вернется инфа о запрошенной задаче
	// если taskId не задан, то вернется инфа о задаче, которая выполняется в данный момент (если таковая есть)
    public getTestPrintStatus(printerId: string, taskId: string = null) {
        var url = taskId ? `${environment.API}${this.prefix}/${printerId}/test-print/${taskId}` :
            `${environment.API}${this.prefix}/${printerId}/test-print`;
        return this.http.get(url)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
