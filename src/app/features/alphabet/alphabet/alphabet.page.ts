import { Component } from '@angular/core';
import { LettersService } from 'src/app/core/core.module';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
})
export class AlphabetPage {
  public alphabet$ = this.lettersService.alphabetAssociated$;

  constructor(private lettersService: LettersService) { }

}
