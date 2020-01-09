import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('TestLettersService', () => {
  let service: TestLettersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.get(TestLettersService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<TestLettersService[]>', () => {
    const testLetters = [
      {
          "id": 0,
          "lettersYiddish": "ער",
          "lettersEnglish": "er"
      },
      {
          "id": 1,
          "lettersYiddish": "רע",
          "lettersEnglish": "re"
      }
  ]

    service.getTests$.subscribe(testLetters => {
      expect(testLetters.length).toBe(2);
      expect(testLetters).toEqual(testLetters);
    });

    const req = httpMock.expectOne(environment.testLettersUrl);
    expect(req.request.method).toBe("GET");

    req.flush(testLetters);

  });

});
