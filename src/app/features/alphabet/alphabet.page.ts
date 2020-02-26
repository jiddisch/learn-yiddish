import { Component } from '@angular/core';
import { YiddishAlphabetService } from 'src/app/core/services/yiddish-alphabet/yiddish-alphabet.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
})
export class AlphabetPage {
  public alphabet$ = this.alphabetService.alphabet$;

  constructor(private alphabetService: YiddishAlphabetService) { }

}
