import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';
import { tap, } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabetPage {
  alphabet$ = this.alphabetService.alphabet$().pipe(
    tap(res => {
      this.slidersLength = res.length;
    })
  );
  slideOptions: SwiperOptions;
  slidersLength: number;
  slides: Swiper;
  currentSlide = 0;

  constructor(private alphabetService: AlphabetService, private cd: ChangeDetectorRef) { }

  ionViewWillEnter(): void {
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
      this.slides = new Swiper('.swiper-container-a', this.slideOptions);

      this.slides.on('slideChange', () => {
        this.currentSlide = this.slides.activeIndex;
        this.cd.detectChanges();
      });
    }, environment.initialSlidesDelay);
  }

  ionViewWillLeave() {
    this.slides = undefined;
  }
}
