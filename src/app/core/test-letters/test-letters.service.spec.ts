import { TestBed } from '@angular/core/testing';

import { TestLettersService } from './test-letters.service';

describe('TestLettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLettersService = TestBed.get(TestLettersService);
    expect(service).toBeTruthy();
  });
});
