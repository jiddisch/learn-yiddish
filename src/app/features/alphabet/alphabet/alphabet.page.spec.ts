import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AlphabetPage } from './alphabet.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import { AlphabetService } from 'src/app/core/services/alphabet/alphabet.service';
import { Alphabet } from 'src/app/core/services/alphabet/alphabet.model';

describe('AlphabetPage', () => {
  let fixture: ComponentFixture<AlphabetPage>;
  let component: AlphabetPage;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetPage],
      imports: [IonicModule],
      providers: [
        {provide: AlphabetService, useClass: AlphabetServiceMock}
      ]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The slider should be present with a list of letters', () => {
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    
    const yiddishLetter = debugElement.queryAll(By.css('.letter-yiddish'));
    const letterName = debugElement.queryAll(By.css('.letter-name'));

    expect(yiddishLetter.length).toBe(2, 'unexpected length of letters');
    expect(yiddishLetter[0].nativeElement.innerText).toEqual('אַ', 'unexpected letter');
    expect(yiddishLetter[1].nativeElement.innerText).toEqual('אָ', 'unexpected letter');
    expect(letterName[1].nativeElement.innerText).toEqual('Komets Alef', 'unexpected letter name');
  });
});

class AlphabetServiceMock {
  alphabetMock: Alphabet[] = [
    {
      letterYiddish: "אַ",
      letterEnglish: "a",
      letterName: "Pasekh Alef"
    },
    {
      letterYiddish: "אָ",
      letterEnglish: "o",
      letterName: "Komets Alef"
    }
  ];
  
  get alphabet$(): Observable<Alphabet[]> {
    return of(this.alphabetMock);
  }
}