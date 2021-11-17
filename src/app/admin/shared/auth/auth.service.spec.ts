import { TestBed } from '@angular/core/testing';

import { AdminAuthService } from './auth.service';

describe('AdminAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthService = TestBed.get(AdminAuthService);
    expect(service).toBeTruthy();
  });
});
