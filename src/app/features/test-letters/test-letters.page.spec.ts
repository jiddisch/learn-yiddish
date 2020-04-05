import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestLettersPage } from './test-letters.page';
import { Observable, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { YiddishAlphabetService } from 'src/app/@core/yiddish-alphabet/yiddish-alphabet.service';

describe('TestLettersPage', () => {
  let fixture: ComponentFixture<TestLettersPage>;
  let component: TestLettersPage;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLettersPage],
      imports: [IonicModule],
      providers: [
        { provide: YiddishAlphabetService, useClass: YiddishAlphabetService }
      ]
    });

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('The slider should contain with a list of TestLetters', () => {
    fixture.detectChanges();

    const yiddishLetters = debugElement.queryAll(By.css('.letters-yiddish'));

    expect(yiddishLetters.length).toBe(2, 'unexpected length of letters');
    expect(yiddishLetters[0].nativeElement.innerText).toEqual(
      'ער',
      'unexpected letter'
    );
    expect(yiddishLetters[1].nativeElement.innerText).toEqual(
      'רע',
      'unexpected letter'
    );
  });

  xit('get an amount of possible letters', fakeAsync(() => {
    component.testsType1$.subscribe(res => {
      fixture.detectChanges();
      const possibleEnglishLettersElms = debugElement.queryAll(
        By.css('.letter')
      );
      expect(possibleEnglishLettersElms.length).toBe(5 * res.length);
    });
    flush();
  }));
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
    return; //of(this.matchLettersMock);
  }
}
