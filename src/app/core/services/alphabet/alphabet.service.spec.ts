import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlphabetService } from './alphabet.service';
import { environment } from 'src/environments/environment';

describe('AlphabetService', () => {
  let service: AlphabetService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(AlphabetService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Alphabet[]> object from HTTP', () => {
    const alphabetMock = [
      {
        letterYiddish: "אַ",
        letterEnglish: "a",
        letterName: "Pasekh Alef"
      },
      {
        letterYiddish: "אָ",
        letterEnglish: "o",
        letterName: "Komets Alef"
      }
    ];

    service.alphabet$.subscribe(alphabet => {
      expect(alphabet).toEqual(alphabetMock);
    });

    const req = httpTestingController.expectOne(environment.alphabetUrl);
    expect(req.request.method).toBe("GET");

    req.flush(alphabetMock);
  });
});
