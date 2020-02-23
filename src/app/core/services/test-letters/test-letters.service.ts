import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { tap, map, mergeMap, filter, switchMap, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AlphabetService } from '../alphabet/alphabet.service';
import { TestLetters } from './test-letters.model';

@Injectable({ providedIn: 'root' })
export class TestLettersService {

  // TODO: get the amount from a UserLevelService
  private amountPotentialLetters = 5;

  constructor(private http: HttpClient, private alphabetService: AlphabetService) { }

  get possibleLetters$(): Observable<TestLetters[]> {

    return this.http.get<string[]>(`${environment.mocks}/test-letters.json`).pipe(
      switchMap(testLetters => {
        console.log(testLetters);

        return this.alphabetService.alphabet$.pipe(

          map(alphabets => {
            
            return alphabets.map(alphabet => ({ yiddishLetters: '', rightAnswer: '', possibleForeignLetters: [''] }))
          })

        )
      })
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

  // private convertYiddishLettersToForeign(): string[] {
  //   const allYiddishLetters = this.getAllYiddishLetters();
  //   return this.alphabet.filter(letter => allYiddishLetters.includes(this.testLetters)).map(l => l.foreignLetter);
  // }

  // private getAllYiddishLetters(): string[] {
  //   return this.alphabet.map(letter => letter.yiddishLetter);
  // }

  // private getAllForeignLetters(): string[] {
  //   return this.alphabet.map(letter => letter.foreignLetter);
  // }

  // private getRandomForeignLettersExcludingParam(foreignLetters: string[]): string[] {
  //   const allForeignLetters = this.getAllForeignLetters();
    
  //   const transform = this.helpers.shuffleArray(allForeignLetters.filter(letter => !foreignLetters.includes(letter)))
  //                       .slice(0, this.amountPotentialLetters - foreignLetters.length)
  //                       .concat(foreignLetters);

  //   return this.helpers.shuffleArray(transform);
  // }

}
