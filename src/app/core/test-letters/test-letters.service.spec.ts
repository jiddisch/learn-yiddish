import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';

describe('LettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: TestLettersService = TestBed.inject(TestLettersService);
    expect(service).toBeTruthy();
  });
});
