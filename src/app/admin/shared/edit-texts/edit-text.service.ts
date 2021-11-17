import { Injectable } from '@angular/core';
import { AdminAuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { MessageGroupEnum } from './MessageGroupEnum';
import { MessageTypeEnum } from './MessageTypeEnum';
import { MessageModel } from './message.model';
import { UpdateMessageGroupRequest } from './message-group.model';

@Injectable({
    providedIn: 'root'
})
export class EditTextService {
    private prefix = '/message';
    private cache: { [id: number]: MessageModel[] } = {};

    constructor(private http: HttpClient, private auth: AdminAuthService) {
    }

    public getTextsGroup(id: MessageGroupEnum) {
        var cache = this.cache;
        return this.http.get<MessageModel>(environment.API + this.prefix + `/${id}/group`, {})
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                }),
                map((data: any) => {
                    cache[id] = data;
                    return data.messages;
                })
            );
    }
    
    public loadTextsGroup(id: MessageGroupEnum, onLoad: (data: any) => void = null): void {
        var cache = this.cache;
        this.http.get(environment.API + this.prefix + `/${id}/group`, {})
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            ).subscribe((data: any) => {
                cache[id] = data.messages;
                if (onLoad)
                    onLoad(data);
            });
    }
    public getText(group: MessageGroupEnum, type: MessageTypeEnum) {
        var messages = this.cache[group];
        var foundMessages = messages && messages.filter((m) => m.id == type);
        return foundMessages[0] || { id: type, title: 'Подтверждение', text: '' };
    }
    public getAll() {
        return this.http.get(environment.API + this.prefix, {})
            .pipe(
                catchError(err => {
                    console.log(err)
                    return throwError(err);
                }),
                map((data: any) => data.groups)
            );
    }
    public update(id: MessageGroupEnum, request: UpdateMessageGroupRequest) {
        return this.http.put(environment.API + this.prefix + `/${id}`, request, {})
            .pipe(
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
