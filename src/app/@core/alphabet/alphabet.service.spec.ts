import { TestBed } from '@angular/core/testing';

import { AlphabetService } from './alphabet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlphabetService', () => {
  let service: AlphabetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AlphabetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
