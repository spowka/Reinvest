import { TestBed } from '@angular/core/testing';

import { PPMOrderService } from './ppm-order.service';

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PPMOrderService = TestBed.get(PPMOrderService);
    expect(service).toBeTruthy();
  });
});
