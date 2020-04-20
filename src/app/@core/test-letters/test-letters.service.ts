import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TestLetters } from './test-letters.model';
import { Helpers } from 'src/app/@shared/helpers/helpers';

@Injectable({ providedIn: 'root' })
export class TestLettersService {
  // TODO: get the amount from a UserLevelService
  private amountOfPossibleLetters = 5;

  constructor(private http: HttpClient, private helpers: Helpers) {}

  data$(): Observable<TestLetters[]> {
    return this.http.get<TestLetters[]>(`${environment.mocks}alphabet.json`).pipe(
      map(res => {
        return res.map(item => {
          const allLetters = [];
          res.map((letter) => {
            if (letter.transcribedLetter.length > 1) {
              letter.transcribedLetter.map((val) => allLetters.push(val));
            } else {
              allLetters.push(letter.transcribedLetter.join());
            }
          });
          this.helpers.shuffleArray(allLetters);

          return {
            ...item,
            possibleLetters:
              item.transcribedLetter.length > 1
                ? this.helpers.shuffleArray([
                    ...allLetters
                      .filter((val) => !val.includes(item.transcribedLetter))
                      .slice(
                        0,
                        this.amountOfPossibleLetters -
                          item.transcribedLetter.length
                      ),
                    item.transcribedLetter[0],
                    item.transcribedLetter[1]
                  ])
                : this.helpers.shuffleArray([
                    ...allLetters
                      .filter((val) => !val.includes(item.transcribedLetter))
                      .slice(
                        0,
                        this.amountOfPossibleLetters -
                          item.transcribedLetter.length
                      ),
                    item.transcribedLetter[0]
                  ])
          };
        })
      }),
      map((res) => this.helpers.shuffleArray(res))
    );
  }
}
