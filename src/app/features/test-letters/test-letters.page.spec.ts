import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestLettersPage } from './test-letters.page';
import { MatchLettersService } from 'src/app/core/services/match-letters/match-letters.service';
import { Observable, of } from 'rxjs';
import { TestLetters } from 'src/app/core/services/match-letters/match-letters.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestLettersPage', () => {
  let fixture: ComponentFixture<TestLettersPage>;
  let component: TestLettersPage;
  let debugElement: DebugElement;
  let service: MatchLettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLettersPage],
      imports: [IonicModule],
      providers: [
        {provide: MatchLettersService, useClass: MatchLettersServiceStub}
      ]
    });

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The slider should contain with a list of TestLetters', async(() => {
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    service = TestBed.get(MatchLettersService);

    // check the component
    service.getTests$.subscribe((testLetters) => {      
      expect(testLetters.length).toBe(2);
      expect(testLetters[0].id).toEqual(0);
      expect(testLetters[0].lettersYiddish).toEqual('ער');
      expect(testLetters[1].lettersYiddish).toEqual('רע');
      expect(testLetters[1].lettersEnglish).toEqual('re');
    });

    // check the dom
    const yiddishLetters = debugElement.queryAll(By.css('.letters-yiddish'));

    expect(yiddishLetters.length).toBe(2, 'unexpected length of letters');
    expect(yiddishLetters[0].nativeElement.innerText).toEqual('ער', 'unexpected letter');
    expect(yiddishLetters[1].nativeElement.innerText).toEqual('רע', 'unexpected letter');
  }));
  
});

class MatchLettersServiceStub {
  matchLettersMock = [
    {
        "id": 0,
        "lettersYiddish": "ער",
        "lettersEnglish": "er"
    },
    {
        "id": 1,
        "lettersYiddish": "רע",
        "lettersEnglish": "re"
    }
];

  get getTests$(): Observable<TestLetters[]> {
    return of(this.matchLettersMock);
  }
}