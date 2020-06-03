import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { AlphabetService } from 'src/app/core/alphabet/alphabet.service';
import { environment as env } from './../../../environments/environment';
import { StorageService } from 'src/app/core/storage/storage.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabetPage {
  alphabet$ = this.alphabetService.alphabet$();
  slideOptions: SwiperOptions;
  slidersLength: number;
  slides: Swiper;
  currentSlide: number;

  constructor(
    private alphabetService: AlphabetService,
    private cd: ChangeDetectorRef,
    private storageService: StorageService
  ) { }

  ionViewDidEnter() {
    this.storageService.getItem$<number>('alphabet').subscribe(initSlide => {
      this.currentSlide = initSlide;
      this.cd.detectChanges();

      this.slideOptions = {
        initialSlide: initSlide,
        width: window.innerWidth,
        speed: env.slideOptionsSpeed,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        }
      }

      setTimeout(() => {
        this.slides = new Swiper('.swiper-container-a', this.slideOptions);

        this.slides.on('slideChange', () => {
          this.currentSlide = this.slides.activeIndex;
          this.storageService.setItem$('alphabet', this.currentSlide);
          this.cd.detectChanges();
        });
      }, env.generalDelay);
    });
  }

  ionViewWillLeave() {
    this.slides.destroy(true, true);
    this.cd.detectChanges();
  }

}
