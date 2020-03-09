import { TestBed } from '@angular/core/testing';

import { LettersService } from './test-letters.service';

describe('LettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LettersService = TestBed.get(LettersService);
    expect(service).toBeTruthy();
  });
});
