import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedTools } from '../../shared/shared-tools'

@Injectable({
  providedIn: 'root'
})
export class GenerateLettersService {

  constructor() { }

  generateLetters(includedLetters: string): string[] {
    const yiddishLetters = 'אאַאָבבּבֿגדהווּוֹװױזחטייִײײַכּכךלמםנןסעפּפֿפףצץקרששׂתּת';
    const yiddishLettersShuffled = SharedTools.shuffle(yiddishLetters);

    const amountPotentialLetters = environment.amountPotentialLetters;
    const lengthIncludedLetters = includedLetters.length;

    const yiddishPotentialLetters = yiddishLettersShuffled.slice(0, amountPotentialLetters - lengthIncludedLetters);
    const yiddishPotentialWithIncludedLetters = yiddishPotentialLetters.concat(includedLetters).join('');
    const yiddishPotentialWithIncludedLettersShuffled = SharedTools.shuffle(yiddishPotentialWithIncludedLetters);

    return yiddishPotentialWithIncludedLettersShuffled;
  }

  

}
