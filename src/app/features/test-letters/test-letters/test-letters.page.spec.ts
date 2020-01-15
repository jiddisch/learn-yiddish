import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestLettersPage } from './test-letters.page';
import { MatchLettersService } from 'src/app/core/services/match-letters/match-letters.service';
import { Observable, of } from 'rxjs';
import { TestLetters } from 'src/app/core/services/match-letters/match-letters.model';
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The slider should contain with a list of TestLetters', () => {
      debugElement = fixture.debugElement;
      fixture.detectChanges();

      const yiddishLetters = debugElement.queryAll(By.css('.letters-yiddish'));

      expect(yiddishLetters.length).toBe(2, 'unexpected length of letters');
      expect(yiddishLetters[0].nativeElement.innerText).toEqual('ער', 'unexpected letter');
      expect(yiddishLetters[1].nativeElement.innerText).toEqual('רע', 'unexpected letter');
    });

    it('get an amount of possible letters', fakeAsync(() => {
      const possibleEnglishLettersElms = debugElement.queryAll(By.css('.letter'));
      
      component.tests$.subscribe(res => {
        expect(possibleEnglishLettersElms.length).toBe(environment.amountPotentialLetters * res.length);
      });
      
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