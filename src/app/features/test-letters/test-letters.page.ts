import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { TestLettersService } from 'src/app/core/test-letters/test-letters.service';
import { tap } from 'rxjs/operators';
import { TestLetter } from 'src/app/core/test-letters/test-letters.model';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestLettersPage {
  data$ = this.testLettersService.data$().pipe(
    tap((res) => {
      this.sliders = res;
    })
  );
  slides: Swiper;
  slideOptions: SwiperOptions;
  sliders: TestLetter[];
  currentSlide: number;
  isSuccess: string;
  changeSlideSpeed = 200;
  pickedLetters: string[];
  possibleLetters: string[];
  rightLetters: string[];
  selectedIndex: number;

  constructor(private testLettersService: TestLettersService, private cd: ChangeDetectorRef) {}

  ionViewWillEnter() {
    this.pickedLetters = [];
    this.slideOptions = {
      width: window.innerWidth,
      speed: 400,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      }
    };
  }

  ionViewDidEnter() {
      setTimeout(() => {
        this.slides = new Swiper('.swiper-container', this.slideOptions);

        this.slides.on('slideChange', () => {
          this.currentSlide = this.slides.activeIndex + 1;
          this.possibleLetters = this.sliders[this.currentSlide].possibleLetters;
          this.rightLetters = this.sliders[this.currentSlide].transcribedLetter;
          this.cd.detectChanges();
        });
      }, environment.initialSlidesDelay);
  }

  isPicked(pickedLetter: string): void {
    if (this.pickedLetters && this.pickedLetters.includes(pickedLetter)) {
      this.isSuccess = 'success';
    } else {
      this.isSuccess = 'failed';
    }

    if (
      this.pickedLetters.length === 0 ||
      this.pickedLetters.length === this.rightLetters.length
    ) {
      setTimeout(() => {
        this.isSuccess = '';
        this.cd.detectChanges();
      }, environment.initialSlidesDelay);
    }
  }

  testLetter(test: TestLetter, pickedLetter: string): void {
    // if (test.transcribedLetter.includes(possibleLetter)) {
    //   if (!this.pickedLetters.includes(possibleLetter)) {
    //     this.pickedLetters.push(possibleLetter);

    //     if (
    //       this.pickedLetters.sort().join() === this.rightLetters.sort().join()
    //     ) {
    //       setTimeout(() => {
    //         this.slides.slideNext();
    //         this.pickedLetters.length = 0;
    //       }, environment.initialSlidesDelay);
    //     }
    //   }
    // }
    // this.isPicked(possibleLetter);
  }

  ionViewWillLeave() {
    this.currentSlide = 0;
    this.cd.detectChanges();
    this.slides.destroy(true, true);
  }
}
