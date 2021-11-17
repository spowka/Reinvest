import { TestBed } from '@angular/core/testing';

import { TerminalsService } from './terminals.service';

describe('TerminalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminalsService = TestBed.get(TerminalsService);
    expect(service).toBeTruthy();
  });
});
