import { TestBed } from '@angular/core/testing';

import { TextPagesService } from './text-pages.service';

describe('TextPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextPagesService = TestBed.get(TextPagesService);
    expect(service).toBeTruthy();
  });
});
