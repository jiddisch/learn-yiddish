import { TestBed } from '@angular/core/testing';
import { MatchLettersService } from './match-letters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('MatchLettersService', () => {
  let service: MatchLettersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(MatchLettersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<MatchLettersService[]> object from HTTP', () => {
    const testLetters = [
      {
          id: 0,
          lettersYiddish: "ער",
          lettersEnglish: "er",
          possibleLetters: ["כ", "ע", "י", "ח", "ר"]
      },
      {
          id: 1,
          lettersYiddish: "רע",
          lettersEnglish: "re",
          possibleLetters: ["ב", "ח", "ר", "ע", "י"]
      }
  ]

    service.getTests$.subscribe(testLettersResult => {
      console.log(testLettersResult[0].possibleLetters);
      
      expect(testLettersResult.length).toBe(2);
      expect(testLettersResult).toEqual(testLetters);
    });

    const req = httpMock.expectOne(environment.testLettersUrl);
    expect(req.request.method).toBe("GET");

    req.flush(testLetters);
  });

  it('should shuffle a string to an array', () => {
    const shuffle = service.shuffleStr2Arr('טער');
    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
  })
});
