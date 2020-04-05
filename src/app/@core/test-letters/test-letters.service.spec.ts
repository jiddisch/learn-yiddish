import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TestLettersService = TestBed.inject(TestLettersService);
    expect(service).toBeTruthy();
  });
});
