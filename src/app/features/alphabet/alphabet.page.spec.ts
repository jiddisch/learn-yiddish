import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AlphabetPage } from './alphabet.page';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { YiddishAlphabetService } from 'src/app/@core/yiddish-alphabet/yiddish-alphabet.service';
import { YiddishAlphabetClient } from 'src/app/@core/yiddish-alphabet/yiddish-alphabet.model';

class AlphabetServiceStub {
  alphabetMock: YiddishAlphabetClient[] = [
    {
      yiddishLetter: 'אַ',
      letterName: 'Pasekh Alef',
      foreignLetter: ['a']
    },
    {
      yiddishLetter: 'אָ',
      letterName: 'Komets Alef',
      foreignLetter: ['o']
    }
  ];

  get alphabet$(): Observable<YiddishAlphabetClient[]> {
    return of(this.alphabetMock);
  }
}

describe('AlphabetPage', () => {
  let fixture: ComponentFixture<AlphabetPage>;
  let component: AlphabetPage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule, HttpClientModule],
      providers: [
        { provide: YiddishAlphabetService, useClass: AlphabetServiceStub }
      ]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('slideOptions should be defined', () => {
    component.alphabet$.subscribe(res => {
      expect(res.length).toBe(2);
      // expect(res[0].yiddishLetters).toEqual('אַ');
      // expect(res[1].yiddishLetters).toEqual('אָ');
      // expect(res[1].textContent).toEqual('Komets Alef');
    });

    expect(component.slideOptions).not.toBeDefined();
    fixture.detectChanges();
    expect(component.slideOptions).toBeDefined();
  });

});

