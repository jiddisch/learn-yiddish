import { TestBed } from '@angular/core/testing';

import { GenerateLettersService } from './generate-letters.service';

describe('GenerateLettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateLettersService = TestBed.get(GenerateLettersService);
    expect(service).toBeTruthy();
  });
});
