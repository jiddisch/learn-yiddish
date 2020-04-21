import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import Swiper, { SwiperOptions } from 'swiper';
import { TestLettersService } from 'src/app/@core/test-letters/test-letters.service';
import { tap } from 'rxjs/operators';
import { TestLetters } from 'src/app/@core/test-letters/test-letters.model';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, width: 0 }),
        animate('1s ease-out', style({ height: 182, width: 172 }))
      ]),
      transition(':leave', [
        style({ height: 182, width: 172 }),
        animate('1s ease-in', style({ height: 0, width: 0 }))
      ])
    ])
  ]
})
export class TestLettersPage {
  data$ = this.testLettersService.data$().pipe(tap(res => {
    this.sliders= res;
    this.possibleLetters = res[0].possibleLetters;
    this.rightLetters = res[0].transcribedLetter;
  }));
  slides: Swiper;
  slideOptions: SwiperOptions;
  sliders: TestLetters[];
  currentSlide = 0;
  isSuccess: string;
  changeSlideSpeed = 200;
  pickedLetters: string[];
  possibleLetters: string[];
  rightLetters: string[];

  constructor(private testLettersService: TestLettersService) {}

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

    setTimeout(() => {
      this.slides = new Swiper('.swiper-container', this.slideOptions);

      this.slides.on('slideChange', () => {
        this.currentSlide = this.slides.activeIndex;
        this.possibleLetters = this.sliders[this.currentSlide].possibleLetters;
        this.rightLetters = this.sliders[this.currentSlide].transcribedLetter;
      });
    }, this.changeSlideSpeed);

  }

  isPicked(pickedLetter: string): void {
    if (this.pickedLetters && this.pickedLetters.includes(pickedLetter)) {
      this.isSuccess = 'success';
    } else {
      this.isSuccess = 'failed';
    }

    if(this.pickedLetters.length === 0 || this.pickedLetters.length === this.rightLetters.length) {
      setTimeout(() => {
        this.isSuccess = '';
      }, this.changeSlideSpeed);
    }
  }

  testLetter(possibleLetter: string): void {
    if (this.rightLetters.includes(possibleLetter)) {
      if (!this.pickedLetters.includes(possibleLetter)) {
        this.pickedLetters.push(possibleLetter);

        if (this.pickedLetters.sort().join() === this.rightLetters.sort().join()) {
          setTimeout(() => {
            this.slides.slideNext();
            this.pickedLetters.length = 0;
          }, this.changeSlideSpeed)
        }
      }
    }
    this.isPicked(possibleLetter);
  }
}
