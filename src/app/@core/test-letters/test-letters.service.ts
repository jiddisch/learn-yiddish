import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, forkJoin } from 'rxjs';
import { map, switchMap, toArray, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TestsLevels, TestLettersType1 } from './test-letters.model';
import { YiddishAlphabetService } from '../yiddish-alphabet/yiddish-alphabet.service';
import { Helpers } from 'src/app/@shared/helpers/helpers';

@Injectable({ providedIn: 'root' })
export class TestLettersService {
  // TODO: get the amount from a UserLevelService
  private amountOfPossibleLetters = 5;

  constructor(
    private http: HttpClient,
    private yiddishAlphabetService: YiddishAlphabetService,
    private helpers: Helpers
  ) {}

  // TODO: get type and level of the game
  testsType1$(): Observable<TestLettersType1[]> {
    return forkJoin({
      testLetters: this.http
        .get<TestsLevels[]>(`${environment.mocks}test-levels.json`)
        .pipe(map((res) => {
          return res[0].test;
        })),
      alphabet: this.yiddishAlphabetService.alphabet$()
    }).pipe(
      switchMap((res) => {
        return from(
          res.alphabet.filter((val) =>
            res.testLetters.includes(val.yiddishLetter)
          )
        ).pipe(
          map((item) => ({
            ...item,
            foreignLetter:
              item.foreignLetter
          })),
          map((item) => {
            const letters = [];
            res.alphabet.map((letter) => {
              if (letter.foreignLetter.length > 1) {
                letter.foreignLetter.map((val) => letters.push(val));
              } else {
                letters.push(letter.foreignLetter.join());
              }
            });
            return {
              ...item,
              possibleLetters: this.helpers.shuffleArray([
                ...letters
                  .filter((val) => !val.includes(item.foreignLetter))
                  .slice(0, this.amountOfPossibleLetters - 1),
                item.foreignLetter
              ])
            };
          })
        );
      }),
      toArray(),
      map((res) => this.helpers.shuffleArray(res)),
      tap(res => {
        console.log(res);
      })
    );
  }
}
