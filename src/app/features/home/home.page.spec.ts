import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { TranslateService } from '@ngx-translate/core';

describe('HomePage', () => {
  
  const ENGLISH_LANGUAGE = 'en';
  const YIDDISH_HE_LANGUAGE = 'yi-he';
  const YIDDISH_LA_LANGUAGE = 'yi-la';
  
  const ENGLISH_TRANSLATIONS = require('../../../assets/i18n/en.json');
  const YIDDISH_HE_TRANSLATIONS = require('../../../assets/i18n/yi-he.json');
  const YIDDISH_LA_TRANSLATIONS = require('../../../assets/i18n/yi-la.json');
  
  const TRANSLATIONS = {
    [ENGLISH_LANGUAGE]: ENGLISH_TRANSLATIONS,
    [YIDDISH_HE_LANGUAGE]: YIDDISH_HE_TRANSLATIONS,
    [YIDDISH_LA_LANGUAGE]: YIDDISH_LA_TRANSLATIONS
  };

  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes([]),
        TranslateTestingModule.withTranslations(TRANSLATIONS)
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to navigate',
    fakeAsync(() => {
      router = TestBed.get(Router);
      const navigateSpy = spyOn(router, 'navigate');

      component.goToPage('/home');
      expect(navigateSpy).toHaveBeenCalledWith(['/home']);

      component.goToPage('/test-letters');
      expect(navigateSpy).toHaveBeenCalledWith(['/test-letters']);
    })
  );

  it('should render English button text', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('.go-to-alphabet-btn').textContent).toContain(ENGLISH_TRANSLATIONS.startStudyAlphabetButton);
  });

  describe('with Yiddish Hebrew translations', () => {
    beforeEach(inject([TranslateService], (translateService: TranslateService) => {
      translateService.use(YIDDISH_HE_LANGUAGE);
      fixture.detectChanges();
    }));

    it('should render Yiddish button text', () => {
      fixture.detectChanges();
      expect(compiled.querySelector('.go-to-alphabet-btn').textContent).toContain(YIDDISH_HE_TRANSLATIONS.startStudyAlphabetButton);
    });

  });

  describe('with Yiddish Latin translations', () => {
    beforeEach(inject([TranslateService], (translateService: TranslateService) => {
      translateService.use(YIDDISH_LA_LANGUAGE);
      fixture.detectChanges();
    }));

    it('should render Yiddish button text', () => {
      fixture.detectChanges();
      expect(compiled.querySelector('.go-to-alphabet-btn').textContent).toContain(YIDDISH_LA_TRANSLATIONS.startStudyAlphabetButton);
    });

  });
  
});
