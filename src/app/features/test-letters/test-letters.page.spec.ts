import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestLettersPage } from './test-letters.page';
import { Observable } from 'rxjs';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Swiper from 'swiper';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';

describe('TestLettersPage', () => {
  let fixture: ComponentFixture<TestLettersPage>;
  let component: TestLettersPage;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLettersPage],
      imports: [IonicModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AlphabetService, useClass: AlphabetService }
      ]
    });

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an observable testsType1$', () => {
    expect(component.data$).toBeInstanceOf(Observable);
  });

  it('slides need to be initilize after 300ms', fakeAsync(() => {
    expect(component.slides).toBeUndefined();
    component.ionViewWillEnter();
    expect(component.slides).toBeUndefined();
    tick(300);
    expect(component.slides).toBeInstanceOf(Swiper);
  }));

  it('should have a variable slideOptions', () => {
    expect(component.slideOptions).toBeUndefined();
    component.ionViewWillEnter();
    expect(component.slideOptions).toBeDefined();
  });

  xit('testLetter should test match of letters', () => {
    // component.testLetter(['b'], 'b');
    // should call slideNext
    // should set isSuccess to 2
    // should reset isSuccess to 0 after 500ms

    // component.testLetter(['b'], ['v']);
    // should not call slideNext
    // should set isSuccess to 1
    // should reset isSuccess to 0 after 500ms

  });
});

class AlphabetServiceStub {
  matchLettersMock = [
    {
      id: 0,
      yiddishLetter: 'ער',
      foreignLetter: 'er',
      possibleLetters: ['ע', 'ן', 'ר', 'ך', 'ה']
    },
    {
      id: 1,
      yiddishLetter: 'רע',
      foreignLetter: 're',
      possibleLetters: ['ע', 'ן', 'ר', 'ך', 'ה']
    }
  ];

  get getTests$(): Observable<TestLettersPage[]> {
    return; // of(this.matchLettersMock);
  }
}
