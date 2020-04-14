import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YiddishAlphabetService } from './yiddish-alphabet.service';
import { YiddishAlphabetClient } from './yiddish-alphabet.model';
import { UserSettingsService } from '../user-settings/user-settings.service';
import { of, Subscriber, Observable } from 'rxjs';

describe('YiddishAlphabetService', () => {
  let abService: YiddishAlphabetService;
  let uSservice: UserSettingsService;
  // let httpTestingController: HttpTestingController;
  // let userSettingsSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserSettingsService,
      ]
    });
    abService = TestBed.inject(YiddishAlphabetService);
    // httpTestingController = TestBed.inject(HttpTestingController);
    uSservice = TestBed.inject(UserSettingsService);
    spyOn(uSservice, 'language$').and.returnValue(of('en'));
  });

  afterEach(() => {
    // httpTestingController.verify();
  });

  it('should be created', () => {
    expect(abService).toBeTruthy();
  });

  it('should have an data$ observable', () => {
    expect(abService.alphabet$()).toBeInstanceOf (Observable);
  });

  it('should call the userSettings service', () => {

    // spyOn(abService, 'alphabet$').and.returnValue(of());

    // TODO: get mock jsons and merge them with foreign property
    // abService.alphabet$().subscribe();
  });

  xit('should return an Observable<TestLetters[]> object from HTTP', () => {
    // const req = httpTestingController.expectOne(
    //   `${environment.mocks}foreign-letters/en.json`
    // );
    // expect(req.request.method).toBe('GET');

    // req.flush(testLettersMock);
  });


});
