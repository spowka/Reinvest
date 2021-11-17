import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { MessageTypeEnum } from "./MessageTypeEnum";
import { EmailTemplateModel } from './email-template.model';

@Injectable({
    providedIn: 'root'
})
export class EmailTemplatesService {
    private prefix = '/email-template';
    private cache: { [id: number]: EmailTemplateModel } = {};

    constructor(private http: HttpClient, private auth: AdminAuthService) {
    }
    public loadEmailTemplate(id: MessageTypeEnum) {
        var cache = this.cache;
        var request = this.http.get(environment.API + this.prefix + `/${id}`, {})
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                }),
                map((data: EmailTemplateModel) => {
                    cache[id] = data;
                    return data;
                })
            );
        return request;
    }
    public getText(id: MessageTypeEnum) {
        var template = this.cache[id];
        return template.message;
    }
    public update(id: MessageTypeEnum, data: EmailTemplateModel) {
        return this.http.put(environment.API + this.prefix + `/${id}`, data, {})
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }

    public getKeyWords(): { key: string; description: string; }[] {
        return [
            { key: '{{email}}', description: 'Адрес электронной почты' },
            { key: '{{name}}', description: 'ФИО' },
            { key: '{{link}}', description: 'Ссылка (на восстановление пароля)' },
            { key: '{{password}}', description: 'Пароль' },
        ];
    }
}
