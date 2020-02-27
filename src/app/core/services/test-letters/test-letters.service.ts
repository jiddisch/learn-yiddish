import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of, forkJoin } from 'rxjs';
import { tap, map, mergeMap, filter, switchMap, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TestLetters, TestsLevel } from './test-letters.model';
import { YiddishAlphabetService } from '../yiddish-alphabet/yiddish-alphabet.service';
import { Helpers } from 'src/app/shared/helpers/helpers';

@Injectable({ providedIn: 'root' })
export class TestLettersService {

  // TODO: get the amount from a UserLevelService
  private amountOfPossibleLetters = 5;

  constructor(private http: HttpClient, private yiddishAlphabetService: YiddishAlphabetService, private helpers: Helpers) { }

  get tests$(): Observable<any> { // TestLetters[]

    return forkJoin({
      testLetters: this.http.get<TestsLevel[]>(`${environment.mocks}/test-letters.json`).pipe(map(res => res[0].test)),
      alphabet: this.yiddishAlphabetService.alphabet$
    }).pipe(
      switchMap(res => {
        return from(res.alphabet.filter(val => res.testLetters.includes(val.yiddishLetter))).pipe(
          map(item => ({
            ...item, foreignLetter: item.foreignLetter[Math.floor(Math.random() * item.foreignLetter.length)]
          })),
          map(item => {
            const letters = [];
            res.alphabet.map(letter => {
              if (letter.foreignLetter.length > 1) {
                letter.foreignLetter.map(val => (letters.push(val)))
              } else {
                letters.push(letter.foreignLetter.join())
              }
            })
            return {...item, possibleLetters: this.helpers.shuffleArray([...letters.filter(val => !val.includes(item.foreignLetter)).slice(0, this.amountOfPossibleLetters - 1), item.foreignLetter])};
          })
        );
      }),
      toArray()
    );

  }

  // const letters = res.alphabet.map(letter => letter.foreignLetter.join());
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
