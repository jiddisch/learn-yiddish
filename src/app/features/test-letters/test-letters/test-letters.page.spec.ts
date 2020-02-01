import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestLettersPage } from './test-letters.page';
import { MatchLettersService } from 'src/app/core/services/alphabet/alphabet.service';
import { Observable, of } from 'rxjs';
import { TestLetters } from 'src/app/core/services/alphabet/alphabet.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

describe('TestLettersPage', () => {
  let fixture: ComponentFixture<TestLettersPage>;
  let component: TestLettersPage;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLettersPage],
      imports: [IonicModule],
      providers: [
        { provide: MatchLettersService, useClass: MatchLettersServiceStub }
      ]
    });

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The slider should contain with a list of TestLetters', () => {
      
      fixture.detectChanges();

      const yiddishLetters = debugElement.queryAll(By.css('.letters-yiddish'));

      expect(yiddishLetters.length).toBe(2, 'unexpected length of letters');
      expect(yiddishLetters[0].nativeElement.innerText).toEqual('ער', 'unexpected letter');
      expect(yiddishLetters[1].nativeElement.innerText).toEqual('רע', 'unexpected letter');
    });

    it('get an amount of possible letters', fakeAsync(() => {
      component.tests$.subscribe(res => {
        fixture.detectChanges();
        const possibleEnglishLettersElms = debugElement.queryAll(By.css('.letter'));
        expect(possibleEnglishLettersElms.length).toBe(environment.amountPotentialLetters * res.length);
      });
      flush();
    }));
});

class MatchLettersServiceStub {
  matchLettersMock = [
    {
      id: 0,
      lettersYiddish: 'ער',
      lettersEnglish: 'er',
      possibleLetters: ['ע', 'ן', 'ר', 'ך', 'ה']
    },
    {
      id: 1,
      lettersYiddish: 'רע',
      lettersEnglish: 're',
      possibleLetters: ['ע', 'ן', 'ר', 'ך', 'ה']
    }
  ];

  get getTests$(): Observable<TestLetters[]> {
    return of(this.matchLettersMock);
  }
}