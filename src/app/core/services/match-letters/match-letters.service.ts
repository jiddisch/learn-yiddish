import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestLetters } from './match-letters.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchLettersService {
  private readonly url: string = environment.testLettersUrl;
  private yiddishLetters = environment.yiddishLetters;
  private amountPotentialLetters = environment.amountPotentialLetters;

  constructor(private http: HttpClient) { }

  get getTests$(): Observable<TestLetters[]> {
    return this.http.get<TestLetters[]>(this.url).pipe(
      map((res) => {
        return res.map((r) => {
          const yiddishLettersShuffled = this.shuffleStr2Arr(this.yiddishLetters);
          const lengthIncludedLetters = r.lettersYiddish.length;
          const yiddishPotentialLetters = yiddishLettersShuffled.slice(0, this.amountPotentialLetters - lengthIncludedLetters);
          const yiddishPotentialWithIncludedLetters = yiddishPotentialLetters.concat('ער').join('');
          const yiddishPotentialWithIncludedLettersShuffled = this.shuffleStr2Arr(yiddishPotentialWithIncludedLetters);

          return {...r, possibleLetters: yiddishPotentialWithIncludedLettersShuffled};
        });
        return res;
      })
    );
  }

  shuffleStr2Arr(str: string): string[] {
    return [...str].reduceRight((res, _, __, arr) => [...res, arr.splice(~~(Math.random() * arr.length), 1)[0]], []);
  }
}
