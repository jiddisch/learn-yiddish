import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlphabetService } from './alphabet.service';
import { environment } from 'src/environments/environment';

describe('AlphabetService', () => {
  let service: AlphabetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(AlphabetService);
    httpMock = TestBed.get(HttpTestingController);
    
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<AlphabetService[]> object from HTTP', () => {
    const mockAlphabet = [
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
    ]

    service.alphabet$.subscribe(alphabet => {
      expect(alphabet.length).toBe(2);
      expect(alphabet).toEqual(mockAlphabet);
    });

    const req = httpMock.expectOne(environment.alphabetUrl);
    expect(req.request.method).toBe("GET");

    req.flush(mockAlphabet);    

  });

});
