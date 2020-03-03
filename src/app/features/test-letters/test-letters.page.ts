import { Component } from '@angular/core';
import { TestLettersService } from 'src/app/core/services/test-letters/test-letters.service';
import { animate, style, transition, trigger } from '@angular/animations';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(
        ':enter', [
          style({ height: 0, width: 0 }),
          animate('1s ease-out',
            style({ height: 182, width: 172 }))
        ]
      ),
      transition(
        ':leave', [
          style({ height: 182, width: 172 }),
          animate('1s ease-in',
            style({ height: 0, width: 0 }))
        ]
      )
    ]
    )
  ]
})
export class TestLettersPage {
  tests$ = this.testLettersService.tests$;
  public isSuccess: 0 | 1 | 2;
  slides: Swiper;
  slideOptions: SwiperOptions;

  constructor(private testLettersService: TestLettersService) { }

  ionViewWillEnter() {
    this.isSuccess = 0;

    this.slideOptions = {
      width: window.innerWidth,
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    };

    setTimeout(() => {
      this.slides = new Swiper('.swiper-container', this.slideOptions);
    }, 100);
  }

  testLetter(rightAnswer: string, possibleLetter: string): void {
    if (rightAnswer === possibleLetter) {
      this.isSuccess = 2;
      this.slides.slideNext();
    } else {
      this.isSuccess = 1;
    }
    setTimeout(() => {
      this.isSuccess = 0;
    }, 500);
  }
}
