import { Component, ViewChild } from '@angular/core';
import { TestLettersService } from 'src/app/core/services/test-letters/test-letters.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { SwiperOptions } from 'swiper';
import { IonSlides } from '@ionic/angular';

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
  @ViewChild('slidesElm', {static: false}) slides: IonSlides;
  tests$ = this.testLettersService.tests$;
  public isSuccess: 0 | 1 | 2;
  public slideOpts: SwiperOptions = {
    width: window.innerWidth,
    speed: 400
  };

  constructor(private testLettersService: TestLettersService) { }

  ionViewWillEnter() {
    this.isSuccess = 0;
  }

  testLetter(rightAnswer: string, possibleLetter: string): void {
    if (rightAnswer === possibleLetter) {
      this.isSuccess = 2;
    } else {
      this.isSuccess = 1;
    }
    setTimeout(() => {
      this.isSuccess = 0;
    }, 500);
  }
}
