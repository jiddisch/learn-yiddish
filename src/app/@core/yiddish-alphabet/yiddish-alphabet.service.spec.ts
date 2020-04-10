import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { YiddishAlphabetService } from './yiddish-alphabet.service';
import { YiddishAlphabetClient } from './yiddish-alphabet.model';
import { UserSettingsService } from '../user-settings/user-settings.service';
import { of, Observable } from 'rxjs';

class MockUserSettingsService {
  language$ () { return of() };
}

describe('YiddishAlphabetService', () => {
  let service: YiddishAlphabetService;
  let httpTestingController: HttpTestingController;
  let userSettingsSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: UserSettingsService, useClass: MockUserSettingsService }
      ]
    });
    service = TestBed.inject(YiddishAlphabetService);
    httpTestingController = TestBed.inject(HttpTestingController);
    userSettingsSpy = jasmine.createSpyObj('')
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should call the userSettings service', () => {
    const userSettingsService = TestBed.inject(UserSettingsService);
    spyOn(userSettingsService, 'language$').and.returnValue(of('en'));
    service.alphabet$().subscribe();
    expect(userSettingsService.language$).toHaveBeenCalled();
  });

  xit('should return an Observable<TestLetters[]> object from HTTP', () => {
    const testLettersMock: YiddishAlphabetClient[] = [
      {
        letterName: '',
        yiddishLetter: 'ר',
        foreignLetter: ['r']
      },
      {
        letterName: '',
        yiddishLetter: 'ע',
        foreignLetter: ['e']
      }
    ];

    service.alphabet$().subscribe((testLettersResult) => {
      expect(testLettersResult.length).toBe(2);
      // expect(testLettersResult[0].id).toBe(0);
      // expect(testLettersResult[0].possibleLetters.length).toBe(5);
      // expect(testLettersResult[0].possibleLetters).toEqual(jasmine.arrayContaining(['ר', 'ע']));
    });

    const req = httpTestingController.expectOne(
      `${environment.mocks}foreign-letters/en.json`
    );
    expect(req.request.method).toBe('GET');

    req.flush(testLettersMock);
  });

  xit('should shuffle a string to an array', () => {
    // const shuffle = service.shuffleStr2Arr('טער');
    // expect(shuffle).toEqual(jasmine.arrayWxithExactContents(['ט', 'ר', 'ע']));
  });
});
