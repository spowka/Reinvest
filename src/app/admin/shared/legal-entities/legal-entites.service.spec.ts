import { TestBed } from '@angular/core/testing';

import { LegalEntitiesService } from './legal-entities.service';

describe('LegalEntitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegalEntitiesService = TestBed.get(LegalEntitiesService);
    expect(service).toBeTruthy();
  });
});
