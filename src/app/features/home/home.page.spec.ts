import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { TranslateService } from '@ngx-translate/core';

describe('HomePage', () => {
  const ENGLISH_LANGUAGE = 'en';
  const YIDDISH_LANGUAGE = 'yi';
  const ENGLISH_TRANSLATIONS = require('../../../assets/i18n/en.json');
  const YIDDISH_TRANSLATIONS = require('../../../assets/i18n/yi.json');
  const TRANSLATIONS = {
    [ENGLISH_LANGUAGE]: ENGLISH_TRANSLATIONS,
    [YIDDISH_LANGUAGE]: YIDDISH_TRANSLATIONS
  };

  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
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

  it('should be able to navigate to `/alphabet`',
    fakeAsync(() => {
      router = TestBed.get(Router);
      const navigateSpy = spyOn(router, 'navigate');

      component.goToAlphabet();
      expect(navigateSpy).toHaveBeenCalledWith(['/alphabet']);
    })
  );

  it('should render English button text', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('.go-to-alphabet-btn').textContent).toContain(ENGLISH_TRANSLATIONS.startStudyAlphabetButton);
  });

  describe('with Yiddish translations', () => {
    beforeEach(inject([TranslateService], (translateService: TranslateService) => {
      translateService.use(YIDDISH_LANGUAGE);
      fixture.detectChanges();
    }));

    it('should render Yiddish button text', () => {
      fixture.detectChanges();
      expect(compiled.querySelector('.go-to-alphabet-btn').textContent).toContain(YIDDISH_TRANSLATIONS.startStudyAlphabetButton);
    });
  });
});
