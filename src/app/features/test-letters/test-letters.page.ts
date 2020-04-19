import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import Swiper, { SwiperOptions } from 'swiper';
import { TestLettersService } from 'src/app/@core/test-letters/test-letters.service';
import { tap } from 'rxjs/operators';
import { TestLettersType1 } from 'src/app/@core/test-letters/test-letters.model';

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
  testsType1$ = this.testLettersService.testsType1$().pipe(tap(res => {
    this.sliders= res;
    this.possibleLetters = res[0].possibleLetters;
    this.rightLetters = res[0].foreignLetter;
  }));
  isSuccess: 0 | 1 | 2;
  slides: Swiper;
  slideOptions: SwiperOptions;
  sliders: TestLettersType1[];

  pickedLetters: string[];
  possibleLetters: string[];
  rightLetters: string[];

  constructor(private testLettersService: TestLettersService) {}

  ionViewWillEnter() {
    this.isSuccess = 0;
    this.pickedLetters = [];

    this.slideOptions = {
      width: window.innerWidth,
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };

    setTimeout(() => {
      this.slides = new Swiper('.swiper-container', this.slideOptions);

      this.slides.on('slideChange', () => {
        const i = this.slides.activeIndex;
        this.possibleLetters = this.sliders[i].possibleLetters;
        this.rightLetters = this.sliders[i].foreignLetter;
      });
    }, 300);

  }

  isPicked(pickedLetter: string): boolean {
    return this.pickedLetters && this.pickedLetters.includes(pickedLetter);
  }

  testLetter(possibleLetter: string): void {
    if (this.rightLetters.includes(possibleLetter)) {
      if (!this.pickedLetters.includes(possibleLetter)) {
        this.pickedLetters.push(possibleLetter);

        if (this.pickedLetters.sort().join() === this.rightLetters.sort().join()) {
          this.isSuccess = 2;
          this.slides.slideNext();
          this.pickedLetters.length = 0;
        } else {
          this.isSuccess = 1;
        }
      } else {
        this.pickedLetters = this.pickedLetters.filter(val => val !== possibleLetter);
      }
    } else {
      this.isSuccess = 1;
    }

    setTimeout(() => {
      this.isSuccess = 0;
    }, 500);
  }
}
