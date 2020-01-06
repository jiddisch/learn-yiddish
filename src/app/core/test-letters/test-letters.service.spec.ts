import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestLettersService', () => {
  let service: TestLettersService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    service = TestBed.get(TestLettersService);
    expect(service).toBeTruthy();
  });
});
