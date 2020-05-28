import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { AlphabetPage } from './alphabet.page';
import { HttpClientModule } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';
import Swiper from 'swiper';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DebugElement } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getTranslocoModule } from 'src/app/transloco-testing.module';

class MockAlphabetService {
  alphabet$() {
    return of([]);
  }
}

describe('AlphabetPage', () => {
  let fixture: ComponentFixture<AlphabetPage>;
  let component: AlphabetPage;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetPage],
      imports: [SharedModule, HttpClientModule, getTranslocoModule()],
      providers: [{ provide: AlphabetService, useClass: MockAlphabetService }]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('alphabet$ should be instance of Observable', () => {
    expect(component.alphabet$).toBeInstanceOf(Observable);
  });

  it('slideOptions should be defined', () => {
    expect(component.slideOptions).toBeUndefined();
    component.ionViewWillEnter();
    expect(component.slideOptions).toBeDefined();
  });

  it('slideLength should be defined', () => {
    expect(component.slidersLength).toBeUndefined();
    component.alphabet$.subscribe(() => {
      expect(component.slidersLength).not.toBeUndefined();
    });
  });

  it('slides need to be initilize after Xms', fakeAsync(() => {
    expect(component.slides).toBeUndefined();
    component.ionViewDidEnter();
    expect(component.slides).toBeUndefined();
    tick(environment.initialSlidesDelay);
    expect(component.slides).toBeInstanceOf(Swiper);
  }));

  xit('currentSlide should be defined and updated', fakeAsync(() => {
    expect(component.currentSlide).toBe(0);
    component.ionViewDidEnter();
    tick(environment.initialSlidesDelay);
    component.slides.slideTo(1);
    expect(component.currentSlide).toBe(1);
  }));
});
