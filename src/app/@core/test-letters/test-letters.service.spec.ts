import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { YiddishAlphabetService } from '../yiddish-alphabet/yiddish-alphabet.service';
import { YiddishAlphabet } from '../yiddish-alphabet/yiddish-alphabet.model';

describe('TestLettersService', () => {
  let service: TestLettersService;
  let httpTestingController: HttpTestingController;
  let alphabetService: YiddishAlphabetService;
  let alphabetMock: YiddishAlphabet[];
  let req: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YiddishAlphabetService]
    });

    service = TestBed.inject(TestLettersService);
    httpTestingController = TestBed.inject(HttpTestingController);

    alphabetService = TestBed.inject(YiddishAlphabetService);
    alphabetMock = [
      {
        yiddishLetter: 'אַ',
        letterName: 'Pasekh Alef',
        foreignLetter: ['a']
      },
      {
        yiddishLetter: 'אָ',
        letterName: 'Komets Alef',
        foreignLetter: ['o']
      },
      {
        yiddishLetter: 'ב',
        letterName: 'Beys',
        foreignLetter: ['b']
      },
      {
        yiddishLetter: 'בֿ',
        letterName: 'Veys',
        foreignLetter: ['v']
      },
      {
        yiddishLetter: 'ג',
        letterName: 'Giml',
        foreignLetter: ['g']
      },
      {
        yiddishLetter: 'ד',
        letterName: 'Dalet',
        foreignLetter: ['d']
      },
      {
        yiddishLetter: 'ו',
        letterName: 'Vov',
        foreignLetter: ['v', 'u']
      }
    ];

    spyOn(alphabetService, 'alphabet$').and.returnValue(of(alphabetMock));
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an observable TestLettersType1$', () => {
    expect(service.testsType1$()).toBeInstanceOf(Observable);
  });

  it('should return observable TestLettersType1$[]', () => {
    const reqMock = [
      {
        level: 1,
        type: 1,
        test: ['ב']
      }
    ];

    service.testsType1$().subscribe((res) => {
      expect(res.length).toBe(1);

      expect(res[0].yiddishLetter).toEqual('ב');
      expect(res[0].letterName).toEqual('Beys');
      expect(res[0].foreignLetter).toEqual(['b']);
      expect(res[0].possibleLetters).toContain('b');
      expect(res[0].possibleLetters.length).toBe(5);
    });

    req = httpTestingController.expectOne(
      `${environment.mocks}test-levels.json`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(reqMock);
  });

  it('should return observable TestLettersType1$[] with 2 letters', () => {
    const reqMock = [
      {
        level: 1,
        type: 1,
        test: ['ו']
      }
    ];

    service.testsType1$().subscribe((res) => {
      expect(res.length).toBe(1);

      expect(res[0].yiddishLetter).toEqual('ו');
      expect(res[0].letterName).toEqual('Vov');
      expect(res[0].foreignLetter).toEqual(['v', 'u']);
      expect(res[0].possibleLetters).toContain('v');
      expect(res[0].foreignLetter.length).toBe(2);
      expect(res[0].possibleLetters.length).toBe(5);
    });

    req = httpTestingController.expectOne(
      `${environment.mocks}test-levels.json`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(reqMock);
  });
});
