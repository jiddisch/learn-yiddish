import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateLettersService {

  constructor() { }

  generateLetters(includedLetters: string): string[] {
    const yiddishLetters = 'אאַאָבבּבֿגדהווּוֹװױזחטייִײײַכּכךלמםנןסעפּפֿפףצץקרששׂתּת';
    const yiddishLettersShuffled = this.shuffle(yiddishLetters);

    const amountPotentialLetters = environment.amountPotentialLetters;
    const lengthIncludedLetters = includedLetters.length;

    const yiddishPotentialLetters = yiddishLettersShuffled.slice(0, amountPotentialLetters - lengthIncludedLetters);
    const yiddishPotentialWithIncludedLetters = yiddishPotentialLetters.concat(includedLetters).join('');
    const yiddishPotentialWithIncludedLettersShuffled = this.shuffle(yiddishPotentialWithIncludedLetters);

    return yiddishPotentialWithIncludedLettersShuffled;
  }

  shuffle(str: string): string[] {
    return [...str].reduceRight((res, _, __, arr) => [...res, arr.splice(~~(Math.random() * arr.length), 1)[0]], []);
  }

}
