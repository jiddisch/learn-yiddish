import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { TestLettersService } from 'src/app/core/test-letters/test-letters.service';
import { TestLetter } from 'src/app/core/test-letters/test-letters.model';
import { environment } from './../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

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
  rightLetters = [];
  selectedIndex: number;

  constructor(private testLettersService: TestLettersService, private cd: ChangeDetectorRef) { }

  ionViewWillEnter() {
    this.slideOptions = {
      width: window.innerWidth,
      speed: environment.slideOptionsSpeed,
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
    }, environment.generalDelay);
  }

  testLetter(test: TestLetter, pickedLetter: string): void {
    if (test.transcribedLetter.includes(pickedLetter)) {
      this.isSuccess = 'success';

      if(test.transcribedLetter.length === 1) {
        setTimeout(() => {
          this.isSuccess = '';
          this.cd.detectChanges();
          this.slides.slideNext()
        }, environment.generalDelay);
      } else {
        if (this.rightLetters.length === test.transcribedLetter.length) {
          setTimeout(() => {
            this.isSuccess = '';
            this.cd.detectChanges();
            this.slides.slideNext();
          }, environment.generalDelay);
        } else {
          this.rightLetters.push(pickedLetter);
        }
      }
    } else {
      this.isSuccess = 'failed';

      setTimeout(() => {
        this.isSuccess = '';
        this.cd.detectChanges();
      }, environment.generalDelay);
    }
  }

  ionViewWillLeave() {
    this.currentSlide = 0;
    this.slides.destroy(true, true);
    this.cd.detectChanges();
  }
}
