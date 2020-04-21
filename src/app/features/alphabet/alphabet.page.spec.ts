import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AlphabetPage } from './alphabet.page';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';

class MockYiddishAlphabetService {
  alphabet$() {
    return of([]);
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
        {provide: AlphabetService, useClass: MockYiddishAlphabetService}
      ]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('alphabet$ should be observable', () => {
    expect(component.alphabet$.subscribe()).toBeTruthy();
  });

  it('slideOptions should be defined', () => {
    expect(component.slideOptions).not.toBeDefined();

    fixture.detectChanges();

    expect(component.slideOptions).toBeDefined();
  });
});
