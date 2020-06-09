import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { AlphabetService } from 'src/app/core/alphabet/alphabet.service';
import { environment as env } from './../../../environments/environment';
import { StorageService } from 'src/app/core/storage/storage.service';
import { ActivatedRoute } from '@angular/router';
import Reveal from 'reveal.js';

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
  slides: Reveal;
  currentSlide: number;

  constructor(
    private alphabetService: AlphabetService,
    private cd: ChangeDetectorRef,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.activatedRoute.data.subscribe((res) => {
      this.currentSlide = res.initSlide;
      this.cd.detectChanges();

      this.slideOptions = {
        initialSlide: res.initSlide,
        width: window.innerWidth,
        speed: env.slideOptionsSpeed,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        }
      };

      setTimeout(() => {
        this.slides = new Reveal();
        this.slides.initialize({
          width: window.innerWidth,
          controls: false,
          slideNumber: 'c/t',
          rtl: false, // if hebrew55555
          navigationMode: 'linear',
          shuffle: false, // for test-letters,
          transitionSpeed: 'slow'
        });
        console.log(this.slides);

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
