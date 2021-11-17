import { TestBed } from '@angular/core/testing';

import { PromoBannersService } from './promo-banners.service';

describe('PromoBannersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromoBannersService = TestBed.get(PromoBannersService);
    expect(service).toBeTruthy();
  });
});
