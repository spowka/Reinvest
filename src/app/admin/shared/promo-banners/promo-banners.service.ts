import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromoBannersService {
  private prefix = '/promo-banner';

  constructor(
    private backend: BackendService,
    protected http: HttpClient,
    private auth: SiteAuthService
  ) {
  }

  public getAll() {
    return this.backend.get(`${this.prefix}`);
  }

  public save(formData: FormData) {
    return this.backend.post(`${this.prefix}`, formData);
  }
}
