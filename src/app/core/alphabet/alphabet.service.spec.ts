import { TestBed, getTestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlphabetService } from './alphabet.service';

describe('AlphabetService', () => {
  let injector: TestBed;
  let service: AlphabetService;
  let httpMock: HttpTestingController;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    injector = getTestBed();
    service = injector.get(AlphabetService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<AlphabetService[]>', () => {
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

    service.alphabet.subscribe(alphabet => {
      expect(alphabet.length).toBe(2);
      expect(alphabet).toEqual(mockAlphabet);
    });

    const req = httpMock.expectOne(`../../../assets/datasets/alphabet.json`);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlphabet);

  });

});
