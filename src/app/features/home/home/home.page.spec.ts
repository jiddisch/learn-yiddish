import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { TranslateService } from '@ngx-translate/core';

describe('HomePage', () => {
  const ENGLISH_LANGUAGE = 'en';
  const YIDDISH_HE_LANGUAGE = 'yi-he';
  const YIDDISH_LA_LANGUAGE = 'yi-la';

  const ENGLISH_TRANSLATIONS = {
    startStudyAlphabetButton: 'Let\'s start studying the alphabet'
  };
  const YIDDISH_HE_TRANSLATIONS = {
    startStudyAlphabetButton: 'לאמיר אנהייבן לערנען דעם אלף-בית'
  };
  const YIDDISH_LA_TRANSLATIONS = {
    startStudyAlphabetButton: 'Lomir onheybn lernen dem alef-beys'
  };

  const TRANSLATIONS = {
    [ENGLISH_LANGUAGE]: ENGLISH_TRANSLATIONS,
    [YIDDISH_HE_LANGUAGE]: YIDDISH_HE_TRANSLATIONS,
    [YIDDISH_LA_LANGUAGE]: YIDDISH_LA_TRANSLATIONS
  };
  
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes([]),
        TranslateTestingModule.withTranslations(TRANSLATIONS)
      ]
    });

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigation', () => {
      xit('clicked on button should be navigate to alphabet page', () => {

      });

      xit('clicked on button should be navigate to test-letters page', () => {

      });
  });

  xdescribe('dom text and translation', () => {

    it('should render Default English button text', () => {
      fixture.detectChanges();
      expect(compiled.querySelectorAll('ion-button')[0].textContent).toContain(ENGLISH_TRANSLATIONS.startStudyAlphabetButton);
    });

    describe('testing Yiddish-Hebrew translations', () => {
      beforeEach(inject ([TranslateService], (translateService: TranslateService) => {
        translateService.use(YIDDISH_HE_LANGUAGE);
      }) );

      it('should render Yiddish button text', () => {
        fixture.detectChanges();
        expect(compiled.querySelectorAll('ion-button')[0].textContent).toContain(YIDDISH_HE_TRANSLATIONS.startStudyAlphabetButton);
      });

    });

    describe('testing Yiddish Latin translations', () => {
      beforeEach(inject([TranslateService], (translateService: TranslateService) => {
        translateService.use(YIDDISH_LA_LANGUAGE);
      }));

      it('should render Yiddish button text', () => {
        fixture.detectChanges();
        expect(compiled.querySelector('.go-to-alphabet-btn').textContent).toContain(YIDDISH_LA_TRANSLATIONS.startStudyAlphabetButton);
      });

    });
  });

});
