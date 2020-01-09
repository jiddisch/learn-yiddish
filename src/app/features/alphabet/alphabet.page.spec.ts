import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AlphabetPage } from './alphabet.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('AlphabetPage', () => {
  let component: AlphabetPage;
  let fixture: ComponentFixture<AlphabetPage>;
  let debugElement: DebugElement;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      declarations: [AlphabetPage],
      imports: [IonicModule, HttpClientTestingModule]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  }) );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be present with content of letters', () => {
    const mockAlphabet = [
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

    const alphabet = of(mockAlphabet);
    component.alphabet$ = alphabet;

    fixture.detectChanges();
    
    const yiddishLetterSpy = debugElement.queryAll(By.css('.letter-yiddish'));
    const letterName = debugElement.queryAll(By.css('.letter-name'));

    expect(yiddishLetterSpy[0].nativeElement.innerText).toEqual('אַ', 'unexpected letter');
    expect(yiddishLetterSpy[1].nativeElement.innerText).toEqual('אָ', 'unexpected letter');
    expect(yiddishLetterSpy.length).toBe(2, 'unexpected length of letters');
    
    expect(letterName[1].nativeElement.innerText).toEqual('Komets Alef', 'unexpected letter name');
  });

});
