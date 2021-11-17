import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchResponse } from './geo.model';

@Injectable({
    providedIn: 'root'
})
export class GeoService {
    private prefix = '/geo';

    constructor(private http: HttpClient) { }

    public getYandexApiKey() {
        return this.http.get(environment.API + this.prefix + `/yandex-api-key`, {})
            .pipe(
                catchError(err => {
                    console.log(err)
                    return throwError(err);
                })
            );
    }

    public search(address: string) {
        return this.http.get<SearchResponse>(environment.API + this.prefix + `/search/${address}`, {})
            .pipe(
                catchError(err => {
                    console.log(err)
                    return throwError(err);
                })
            );
    }

    public getOfficeCoords() {
        return this.http.get<SearchResponse>(environment.API + this.prefix + `/office-address`, {})
            .pipe(
                catchError(err => {
                    console.log(err)
                    return throwError(err);
                })
            );
    }
}
