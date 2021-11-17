import { TestBed } from '@angular/core/testing';

import { PickupPointsService } from './pickup-points.service';

describe('PickupPointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PickupPointsService = TestBed.get(PickupPointsService);
    expect(service).toBeTruthy();
  });
});
