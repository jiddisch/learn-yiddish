import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestLetters } from './match-letters.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, mergeMap  } from 'rxjs/operators';
import { Helpers } from 'src/app/shared/helpers/helpers';
import { LettersService } from '../letters/letters.service';

@Injectable({ providedIn: 'root' })
export class MatchLettersService {
  private amountPotentialLetters = environment.amountPotentialLetters;

  constructor(
    private http: HttpClient,
    private helpers: Helpers,
    private lettersService: LettersService) { }

    /*
  get getTests$(): Observable<TestLetters[]> {
    return this.http.get<TestLetters[]>(this.url).pipe(
      map((res) => {
        const result = res.map((r) => {
          const yiddishLettersShuffled = this.helpers.shuffleStr2Arr(this.latinLetters);
          const lengthIncludedLetters = r.lettersYiddish.length;
          const yiddishPotentialLetters = yiddishLettersShuffled.slice(0, this.amountPotentialLetters - lengthIncludedLetters);
          const yiddishPotentialWithIncludedLetters = yiddishPotentialLetters.concat('ER').join('');
          const yiddishPotentialWithIncludedLettersShuffled = this.helpers.shuffleStr2Arr(yiddishPotentialWithIncludedLetters);

          return {...r, possibleLetters: yiddishPotentialWithIncludedLettersShuffled};
        });
        return result;
      })
    );
  }
*/

  /**
   * Get an array of an amount of random foreign letters including the associated letters from the Yiddish string
   * 
   * @param yiddishLetters a string of Yiddish letters
   * @return an array of an amount of random foreign letters including the associated letters from the Yiddish string
   */
  getRandomPossibleLetters(yiddishLetters: string): string[] {
    const foreignLetters = this.convertYiddishLettersToForeign(yiddishLetters);
    const randomForeignLetters = this.getRandomForeignLettersExcludingParam(foreignLetters);
    const shuffledLetters = this.helpers.shuffleArray(randomForeignLetters);
    return shuffledLetters;
  }


  /**
   * Converts yiddish letters to foreign
   * 
   * @param yiddishLetters a string of Yiddish letters
   * @return an array of foreign letters associated to the yiddishLetters
   */
  private convertYiddishLettersToForeign(yiddishLetters: string[]): Observable<string[]> {
    this.lettersService.alphabetAssociated$.pipe(
      map(alphabet => {

      })
    )

    return;
  }


  /**
   * Gets random foreign letters excluding the params letters
   * 
   * @param foreignLetters 
   * @return random foreign letters excluding param 
   */
  private getRandomForeignLettersExcludingParam(foreignLetters: string[]): string[] {
    return;
  }

}
