import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { TestLettersService } from 'src/app/core/test-letters/test-letters.service';
import { TestLetter } from 'src/app/core/test-letters/test-letters.model';
import { environment as env } from './../../../environments/environment';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestLettersPage {
  data$ = this.testLettersService.data$();
  data: [];
  slides: Swiper;
  slideOptions: SwiperOptions;
  currentSlide = 0;
  isSuccess: string;
  pickedLetter: string;
  pickedLetters = [];
  selectedIndex: number;

  constructor(private testLettersService: TestLettersService, private cd: ChangeDetectorRef) { }

  ionViewWillEnter() {
    this.slideOptions = {
      initialSlide: 15,
      width: window.innerWidth,
      speed: env.slideOptionsSpeed,
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
        this.currentSlide = this.slides.activeIndex;
        this.cd.detectChanges();
      });
    }, env.generalDelay);
  }

  testLetter(test: TestLetter, pickedLetter: string): void {
    if (test.transcribedLetter.includes(pickedLetter)) {
      this.isSuccess = 'success';

      if(test.transcribedLetter.length === 1) {
        setTimeout(() => {
          this.isSuccess = '';
          this.cd.detectChanges();
          this.slides.slideNext()
        }, env.generalDelay);
      } else {
        if (this.pickedLetters.length > 0) {
          setTimeout(() => {
            this.isSuccess = '';
            this.pickedLetters = [];
            this.cd.detectChanges();
            this.slides.slideNext();
          }, env.generalDelay);
        } else {
          this.pickedLetters.push(pickedLetter);
        }
      }
    } else {
      this.isSuccess = 'failed';
      this.pickedLetters = [];
      this.cd.detectChanges();

      setTimeout(() => {
        this.isSuccess = '';
        this.cd.detectChanges();
      }, env.generalDelay);
    }
  }

  ionViewWillLeave() {
    this.currentSlide = 0;
    this.slides.destroy(true, true);
    this.cd.detectChanges();
  }
}
