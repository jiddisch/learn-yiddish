import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { AlphabetService } from 'src/app/@core/alphabet/alphabet.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss']
})
export class AlphabetPage implements OnInit {
  alphabet$ = this.alphabetService.alphabet$();
  slideOptions: SwiperOptions;

  constructor(private alphabetService: AlphabetService) {}

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
    }, 400);
  }
}
