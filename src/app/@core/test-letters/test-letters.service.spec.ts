import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlphabetService } from '../alphabet/alphabet.service';
import { Alphabet } from '../alphabet/alphabet.model';

describe('TestLettersService', () => {
  let service: TestLettersService;
  let httpTestingController: HttpTestingController;
  let alphabetService: AlphabetService;
  let alphabetMock: Alphabet[];
  let req: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlphabetService]
    });

    service = TestBed.inject(TestLettersService);
    httpTestingController = TestBed.inject(HttpTestingController);

    alphabetService = TestBed.inject(AlphabetService);
    alphabetMock = [
      {
        yiddishLetter: 'אַ',
        letterName: 'Pasekh Alef',
        transcribedLetter: ['a'],
        transcribedLetterName: ''
      },
      {
        yiddishLetter: 'אָ',
        letterName: 'Komets Alef',
        transcribedLetter: ['o'],
        transcribedLetterName: ''
      },
      {
        yiddishLetter: 'ב',
        letterName: 'Beys',
        transcribedLetter: ['b'],
        transcribedLetterName: ''
      },
      {
        yiddishLetter: 'בֿ',
        letterName: 'Veys',
        transcribedLetter: ['v'],
        transcribedLetterName: ''
      },
      {
        yiddishLetter: 'ג',
        letterName: 'Giml',
        transcribedLetter: ['g'],
        transcribedLetterName: ''
      },
      {
        yiddishLetter: 'ד',
        letterName: 'Dalet',
        transcribedLetter: ['d'],
        transcribedLetterName: ''
      },
      {
        yiddishLetter: 'ו',
        letterName: 'Vov',
        transcribedLetter: ['v', 'u'],
        transcribedLetterName: ''
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
    expect(service.data$()).toBeInstanceOf(Observable);
  });

  it('should return observable TestLettersType1$[]', () => {
    const reqMock = [
      {
        level: 1,
        type: 1,
        test: ['ב']
      }
    ];

    service.data$().subscribe((res) => {
      expect(res.length).toBe(1);

      expect(res[0].yiddishLetter).toEqual('ב');
      expect(res[0].letterName).toEqual('Beys');
      expect(res[0].transcribedLetter).toEqual(['b']);
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

    service.data$().subscribe((res) => {
      expect(res.length).toBe(1);

      expect(res[0].yiddishLetter).toEqual('ו');
      expect(res[0].letterName).toEqual('Vov');
      expect(res[0].transcribedLetter).toEqual(['v', 'u']);
      expect(res[0].possibleLetters).toContain('v');
      expect(res[0].transcribedLetter.length).toBe(2);
      expect(res[0].possibleLetters.length).toBe(5);
    });

    req = httpTestingController.expectOne(
      `${environment.mocks}test-levels.json`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(reqMock);
  });
});
