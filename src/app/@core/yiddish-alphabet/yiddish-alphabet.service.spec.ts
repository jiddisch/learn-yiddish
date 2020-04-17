import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { YiddishAlphabetService } from './yiddish-alphabet.service';
import { UserSettingsService } from '../user-settings/user-settings.service';
import { of, Subscriber, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('YiddishAlphabetService', () => {
  let abService: YiddishAlphabetService;
  let uSservice: UserSettingsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserSettingsService]
    });
    abService = TestBed.inject(YiddishAlphabetService);
    httpTestingController = TestBed.inject(HttpTestingController);
    uSservice = TestBed.inject(UserSettingsService);
    spyOn(uSservice, 'language$').and.returnValue(of('en'));
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(abService).toBeTruthy();
  });

  it('should have a alphabet$ observable', () => {
    expect(abService.alphabet$()).toBeInstanceOf(Observable);
  });

  it('should call the userSettings service', () => {
    const req1Mock = [
      {
        yiddishLetter: 'אַ',
        letterName: 'Pasekh Alef'
      },
      {
        yiddishLetter: 'אָ',
        letterName: 'Komets Alef'
      },
      {
        yiddishLetter: 'ב',
        letterName: 'Beys'
      }
    ];
    const req2Mock = [
      {
        yiddishLetter: 'אַ',
        foreignLetter: ['a']
      },
      {
        yiddishLetter: 'אָ',
        foreignLetter: ['o']
      },
      {
        yiddishLetter: 'ב',
        foreignLetter: ['b']
      }
    ];

    abService.alphabet$().subscribe((res) => {
      expect(res.length).toBe(3);

      expect(res[0]).toEqual(
        jasmine.objectContaining({
          yiddishLetter: 'אַ',
          letterName: 'Pasekh Alef',
          foreignLetter: ['a']
        })
      );

      expect(res[2]).toEqual(
        jasmine.objectContaining({
          yiddishLetter: 'ב',
          letterName: 'Beys',
          foreignLetter: ['b']
        })
      );

      expect(res[2].foreignLetter[0]).toEqual('b');
    });

    const req1 = httpTestingController.expectOne(
      `${environment.mocks}yiddish-alphabet.json`
    );
    const req2 = httpTestingController.expectOne(
      `${environment.mocks}foreign-letters/en.json`
    );

    expect(req1.request.method).toEqual('GET');
    expect(req2.request.method).toEqual('GET');

    req1.flush(req1Mock);
    req2.flush(req2Mock);
  });
});
