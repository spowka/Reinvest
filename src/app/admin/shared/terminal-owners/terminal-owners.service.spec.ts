import { TestBed } from '@angular/core/testing';

import { TerminalOwnersService } from './terminal-owners.service';

describe('TerminalOwnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminalOwnersService = TestBed.get(TerminalOwnersService);
    expect(service).toBeTruthy();
  });
});
