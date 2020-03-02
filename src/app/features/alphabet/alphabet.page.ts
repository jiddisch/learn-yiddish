import { Component, OnInit } from '@angular/core';
import { YiddishAlphabetService } from 'src/app/core/services/yiddish-alphabet/yiddish-alphabet.service';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss']
})
export class AlphabetPage implements OnInit {
  public alphabet$ = this.alphabetService.alphabet$;
  slideOptions: SwiperOptions;

  constructor(private alphabetService: YiddishAlphabetService) { }

  ngOnInit(): void {
    this.slideOptions = {
      width: window.innerWidth,
      speed: 400
    };

    setTimeout(() => {
      new Swiper('.swiper-container', this.slideOptions);
    }, 100);
  }

}
