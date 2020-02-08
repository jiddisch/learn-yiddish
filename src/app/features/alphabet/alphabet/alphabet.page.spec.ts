import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AlphabetPage } from './alphabet.page';
import { of, Observable } from 'rxjs';
import { AlphabetService } from 'src/app/core/services/alphabet/alphabet.service';
import { TestLetters } from 'src/app/core/services/test-letters/test-letters.model';

describe('AlphabetPage', () => {
  let fixture: ComponentFixture<AlphabetPage>;
  let component: AlphabetPage;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetPage],
      imports: [IonicModule],
      providers: [
        {provide: AlphabetService, useClass: AlphabetServiceStub}
      ]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The slider should be present with a list of letters', () => {
    fixture.detectChanges();
    
    compiled = fixture.nativeElement;
    const yiddishLetters = compiled.querySelectorAll('.letter-yiddish');
    const letterNames = compiled.querySelectorAll('.letter-name');

    component.alphabet$.subscribe(alphabet => {
     // expect(alphabet).toEqual(new AlphabetServiceStub().alphabetMock)
    });
    
    expect(yiddishLetters.length).toBe(2);
    expect(yiddishLetters[0].textContent).toEqual('אַ');
    expect(yiddishLetters[1].textContent).toEqual('אָ');
    expect(letterNames[1].textContent).toEqual('Komets Alef');
  });
});

class AlphabetServiceStub {
  alphabetMock: TestLetters[] = [
    {
      yiddishLetter: "אַ",
      foreignLetter: "aa",
      letterName: "Pasekh Alef"
    },
    {
      yiddishLetter: "אָ",
      foreignLetter: "o",
      letterName: "Komets Alef"
    }
  ];
  
  get alphabet$(): Observable<TestLetters[]> {
    return of(this.alphabetMock);
  }
}
