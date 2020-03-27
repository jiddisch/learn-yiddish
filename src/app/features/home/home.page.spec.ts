import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { TranslateService } from '@ngx-translate/core';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  const ENGLISH_LANGUAGE = 'en';
  const YIDDISH_HE_LANGUAGE = 'yi-he';
  const YIDDISH_LA_LANGUAGE = 'yi-la';

  const ENGLISH_TRANSLATIONS = {
    home: {
      startStudyAlphabetButton: 'Let\'s start studying the alphabet'
    }
  };
  const YIDDISH_HE_TRANSLATIONS = {
    home: {
      startStudyAlphabetButton: 'לאמיר אנהייבן לערנען דעם אלף-בית'
    }
  };
  const YIDDISH_LA_TRANSLATIONS = {
    home: {
      startStudyAlphabetButton: 'Lomir onheybn lernen dem alef-beys'
    }
  };

  const TRANSLATIONS = {
    [ENGLISH_LANGUAGE]: ENGLISH_TRANSLATIONS,
    [YIDDISH_HE_LANGUAGE]: YIDDISH_HE_TRANSLATIONS,
    [YIDDISH_LA_LANGUAGE]: YIDDISH_LA_TRANSLATIONS
  };

  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

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
    debugElement = fixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigation', () => {
    xit('buttons should have the correct router link', () => {
      fixture.detectChanges();
      const alphabetLink = debugElement.query(By.css('.alphabet-btn')).nativeElement.getAttribute('ng-reflect-router-link');
      const testLettersLink = debugElement.query(By.css('.test-letters-btn')).nativeElement.getAttribute('ng-reflect-router-link');

      expect(alphabetLink).toEqual('/alphabet');
      expect(testLettersLink).toEqual('/test-letters');
    });
  }) ;

  describe('chack text of button for all languages', () => {
    let translateService: TranslateService;

    beforeEach(() => {
      translateService = TestBed.get(TranslateService);
    });

    xit('Should render the text in all languages', () => {
      fixture.detectChanges();
      expect(debugElement.query(By.css('.alphabet-btn')).nativeElement.textContent).toContain(ENGLISH_TRANSLATIONS.home.startStudyAlphabetButton);

      translateService.use(YIDDISH_HE_LANGUAGE);
      fixture.detectChanges();
      expect(debugElement.query(By.css('.alphabet-btn')).nativeElement.textContent).toContain(YIDDISH_HE_TRANSLATIONS.home.startStudyAlphabetButton);

      translateService.use(YIDDISH_LA_LANGUAGE);
      fixture.detectChanges();
      expect(debugElement.query(By.css('.alphabet-btn')).nativeElement.textContent).toContain(YIDDISH_LA_TRANSLATIONS.home.startStudyAlphabetButton);

    });

  });
});
