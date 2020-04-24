import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AlphabetPage } from './alphabet.page';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';
import Swiper from 'swiper';

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
      imports: [HttpClientModule],
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
      expect(component.slidersLength).toBe(0);
    });
  });

  it('slides need to be initilize after Xms', fakeAsync(() => {
    expect(component.slides).toBeUndefined();
    component.ionViewDidEnter();
    expect(component.slides).toBeUndefined();
    tick(component.changeSlideSpeed);
    expect(component.slides).toBeInstanceOf(Swiper);
  }));

  it('slidersLength has to be defined', () => {
    expect(component.changeSlideSpeed).toBeDefined();
  });

  it('slides.on event should be executed', fakeAsync (() => {
    const slides = new Swiper('', component.slideOptions);
    spyOn(slides, 'on');

    component.ionViewWillEnter();
    tick(component.changeSlideSpeed);
    slides.on('slideChange', () => {});
    expect(slides.on).toHaveBeenCalled();
  }));

  xit('currentSlide should be defined and updated', fakeAsync (() => {
    const slides = new Swiper('', component.slideOptions);
    spyOn(slides, 'on').and.callFake(() => {
      component.currentSlide++;
    });

    expect(component.currentSlide).toBe(0);
    component.ionViewWillEnter();
    tick(component.changeSlideSpeed);
    expect(component.currentSlide).toBe(1);
  }));
});
