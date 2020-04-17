import { TestBed } from '@angular/core/testing';
import { TestLettersService } from './test-letters.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { YiddishAlphabetService } from '../yiddish-alphabet/yiddish-alphabet.service';

describe('TestLettersService', () => {
  let service: TestLettersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YiddishAlphabetService]
    });

    service = TestBed.inject(TestLettersService);
    httpTestingController = TestBed.inject(HttpTestingController);
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

  xit('should return observable TestLettersType1$[]', () => {
    const alphabetService = TestBed.inject(YiddishAlphabetService);
    const alphabetMock = [
      {
        yiddishLetter: 'ב',
        letterName: 'Beys',
        foreignLetter: ['b']
      }
    ];

    spyOn(alphabetService, 'alphabet$').and.returnValue(of(alphabetMock));
    const reqMock = [
      {
        level: 1,
        type: 1,
        test: ['ב']
      }
    ];

    service.testsType1$().subscribe((res) => {
      expect(res.length).toBe(1);

      expect(res[0]).toEqual({
        yiddishLetter: 'ב',
        letterName: 'Beys',
        foreignLetter: ['b'],
        possibleLetters: ['b']
      });
      expect(res[0].possibleLetters.length).toBe(1);
    });

    const req = httpTestingController.expectOne(
      `${environment.mocks}test-levels.json`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(reqMock);
  });
});
