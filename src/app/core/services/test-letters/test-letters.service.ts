import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mergeMap, tap, map, filter } from 'rxjs/operators';
import { AlphabetService } from '../../core.module';
import { Alphabet } from 'src/app/shared/letters.model';
import { Helpers } from 'src/app/shared/shared.module';

@Injectable({ providedIn: 'root' })
export class TestLettersService {

  // TODO: get the amount from a UserLevelService
  private amountPotentialLetters = 5;

  constructor(private http: HttpClient, private alphabetService: AlphabetService, private helpers: Helpers) { }

  get possibleLetters$(): Observable<string[]> {

    from(['hh', 'ff']).pipe(
      tap((res) => {
        console.log(res);
        
      })
    )
    return this.http.get<string[]>(`${environment.mocks}/test-letters.json`).pipe(
      from(testLetters),
      tap(testLetters => {
        console.log(testLetters);
      }),
      // from(testLetters),
      // map(letter => {
      //   console.log(letter);
        
      //   return letter.split('');
      // }),
      // mergeMap(testLetters => {

      //   return this.alphabetService.alphabet$.pipe(
      //     from(alphabet),
      //     filter(letter => testLetters.includes(letter.yiddishLetter)),
      //     map(alphabetFiltered => {

      //       return alphabetFiltered.foreignLetter
      //     }),
      //     mergeMap(letter => {

      //       return of(letter);
      //     })
      //   )
      // })
    );
  }

  /*
      tap((testLetters) => {
        this.testLetters = testLetters;
      }),
      mergeMap(testLetters => {
        return this.alphabetService.alphabet$.pipe(
          filter(letter => this.getAllYiddishLetters().includes(this.testLetters));
        )
      }),

      map(alphabet => {
        this.alphabet = alphabet;
        const foreignLetters = this.convertYiddishLettersToForeign();
        console.log(foreignLetters);
        
        return of(this.getRandomForeignLettersExcludingParam(foreignLetters));
      })
  */

  private convertYiddishLettersToForeign(): string[] {
    const allYiddishLetters = this.getAllYiddishLetters();
    return this.alphabet.filter(letter => allYiddishLetters.includes(this.testLetters)).map(l => l.foreignLetter);
  }

  private getAllYiddishLetters(): string[] {
    return this.alphabet.map(letter => letter.yiddishLetter);
  }

  private getAllForeignLetters(): string[] {
    return this.alphabet.map(letter => letter.foreignLetter);
  }

  private getRandomForeignLettersExcludingParam(foreignLetters: string[]): string[] {
    const allForeignLetters = this.getAllForeignLetters();
    
    const transform = this.helpers.shuffleArray(allForeignLetters.filter(letter => !foreignLetters.includes(letter)))
                        .slice(0, this.amountPotentialLetters - foreignLetters.length)
                        .concat(foreignLetters);

    return this.helpers.shuffleArray(transform);
  }

}
