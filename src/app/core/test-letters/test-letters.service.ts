import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { TestLetter } from './test-letters.model';
import { Helpers } from 'src/app/shared/helpers/helpers';

@Injectable({ providedIn: 'root' })
export class TestLettersService {
  private amountOfPossibleLetters = env.amountOfPossibleLetters;

  constructor(private http: HttpClient) { }

  data$(): Observable<TestLetter[]> {
    return this.http
      .get<TestLetter[]>(`${env.mocks}alphabet.json`)
      .pipe(
        map((res) => {
          const allLetters = Helpers.flatArray(
            res.map((letter) => letter.transcribedLetter)
          );

          const result = res.map((item) => {
            Helpers.shuffleArray(allLetters);

            const otherLetters = [...allLetters
              .filter((val) => !item.transcribedLetter.includes(val))
              .slice(0, this.amountOfPossibleLetters - item.transcribedLetter.length)];

            const possibleLetters = Helpers.shuffleArray([
              ...otherLetters,
              ...item.transcribedLetter
            ]);

            return { ...item, possibleLetters };
          });


          return result;
        })
      );
  }
}
