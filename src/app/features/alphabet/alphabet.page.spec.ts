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

class MockAlphabetService {
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
      imports: [SharedModule, HttpClientModule],
      providers: [{ provide: AlphabetService, useClass: MockAlphabetService }]
    });

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
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
    tick(component.changeSlideSpeed);
    expect(component.slides).toBeInstanceOf(Swiper);
    console.log(component.slides);
  }));

  it('changeSlideSpeed has to be defined', () => {
    expect(component.changeSlideSpeed).toBeDefined();
  });

  it('currentSlide should be defined and updated', fakeAsync(() => {
    expect(component.currentSlide).toBe(0);
    component.ionViewDidEnter();
    tick(component.changeSlideSpeed);
    component.slides.slideTo(1);
    expect(component.currentSlide).toBe(1);
  }));
});
