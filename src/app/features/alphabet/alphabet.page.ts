import { Component } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss']
})
export class AlphabetPage {
  alphabet$ = this.alphabetService.alphabet$().pipe(
    tap(res => {
      this.slidersLength = res.length;
    })
  );
  slideOptions: SwiperOptions;
  pickedLetters: string[];
  slidersLength: number;
  slides: Swiper;
  currentSlide = 0;

  constructor(private alphabetService: AlphabetService) {}

  ionViewWillEnter(): void {
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
      });
    }, 400);
  }
}
