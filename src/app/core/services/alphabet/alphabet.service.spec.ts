import { TestBed } from '@angular/core/testing';
import { MatchLettersService } from './alphabet.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { TestLetters } from './alphabet.model';

describe('MatchLettersService', () => {
  let service: MatchLettersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(MatchLettersService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<TestLetters[]> object from HTTP', () => {
    const testLettersMock: TestLetters[] = [
      {
          id: 0,
          lettersYiddish: "ער",
          lettersEnglish: "er",
          possibleLetters: ["כ", "ע", "י", "ח", "ר"]
      },
      {
          id: 1,
          lettersYiddish: "שע",
          lettersEnglish: "re",
          possibleLetters: ["ב", "ח", "ר", "ע", "י"]
      }
  ]

    service.getTests$.subscribe(testLettersResult => {
      expect(testLettersResult.length).toBe(2);
      expect(testLettersResult[0].id).toBe(0);
      expect(testLettersResult[0].possibleLetters.length).toBe(5);
      expect(testLettersResult[0].possibleLetters).toEqual(jasmine.arrayContaining(['ר', 'ע']));
    });

    const req = httpTestingController.expectOne(environment.testLettersUrl);
    expect(req.request.method).toBe("GET");

    req.flush(testLettersMock);
  });

  it('should shuffle a string to an array', () => {
    const shuffle = service.shuffleStr2Arr('טער');
    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
  })
});
