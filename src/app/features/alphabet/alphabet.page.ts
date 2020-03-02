import { Component, ViewChild } from '@angular/core';
import { YiddishAlphabetService } from 'src/app/core/services/yiddish-alphabet/yiddish-alphabet.service';
import { IonSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss']
})
export class AlphabetPage {
  @ViewChild('slidesElm', {static: false}) slides: IonSlides;
  public alphabet$ = this.alphabetService.alphabet$;
  public slideOpts: SwiperOptions = {
    width: window.innerWidth,
    speed: 400
  };

  constructor(private alphabetService: YiddishAlphabetService) { }

}
