import { TestBed } from '@angular/core/testing';

import { SiteAuthService } from './auth.service';

describe('SiteAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteAuthService = TestBed.get(SiteAuthService);
    expect(service).toBeTruthy();
  });
});
