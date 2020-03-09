import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { YiddishAlphabetService } from 'src/app/core/yiddish-alphabet/yiddish-alphabet.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss']
})
export class AlphabetPage implements OnInit {
  public alphabet$ = this.alphabetService.alphabet$;
  slideOptions: SwiperOptions;

  constructor(private alphabetService: YiddishAlphabetService) {}

  ngOnInit(): void {
    this.slideOptions = {
      width: window.innerWidth,
      speed: 400,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      }
    };

    setTimeout(() => {
      new Swiper('.swiper-container', this.slideOptions);
    }, 200);
  }
}
