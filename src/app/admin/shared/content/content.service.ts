import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private prefix = '/content';

  constructor(
    private backend: BackendService,
    protected http: HttpClient,
    private auth: SiteAuthService
  ) {
  }

  public getBanners() {
    return this.backend.get(`${this.prefix}/promo-banners`);
  }
}
