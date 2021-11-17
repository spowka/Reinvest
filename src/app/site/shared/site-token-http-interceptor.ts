import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteAuthService as ClientAuthService } from './auth-service/auth.service';
import { AdminAuthService as AdminAuthService } from '../../admin/shared/auth/auth.service';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class SiteTokenHttpInterceptor implements HttpInterceptor {
    constructor(
        private clientAuth: ClientAuthService,
        private adminAuth: AdminAuthService,
        private router: Router,
    ) {
    }

    intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
        let isAdmin = this.router.url.startsWith('/admin') || request.headers.has("admin");
        let token = isAdmin ? this.adminAuth.getToken() : this.clientAuth.getToken();

        let hasAuthHeader = request.headers.keys().includes('Authorization');
        if (token && !hasAuthHeader) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }

        return newRequest.handle(request);
    }
}