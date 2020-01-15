import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestLetters } from './match-letters.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map  } from 'rxjs/operators';
import { ToolsService } from '../tools/tools.service';

@Injectable({
  providedIn: 'root'
})
export class MatchLettersService {
  private readonly url: string = environment.testLettersUrl;
  private yiddishLetters = environment.yiddishLetters;
  private amountPotentialLetters = environment.amountPotentialLetters;

  constructor(private http: HttpClient, private toolsService: ToolsService) { }

  get getTests$(): Observable<TestLetters[]> {
    return this.http.get<TestLetters[]>(this.url).pipe(
      map((res) => {
        return res.map((r) => {
          const yiddishLettersShuffled = this.toolsService.shuffleStr2Arr(this.yiddishLetters);
          const lengthIncludedLetters = r.lettersYiddish.length;
          const yiddishPotentialLetters = yiddishLettersShuffled.slice(0, this.amountPotentialLetters - lengthIncludedLetters);
          const yiddishPotentialWithIncludedLetters = yiddishPotentialLetters.concat('ער').join('');
          const yiddishPotentialWithIncludedLettersShuffled = this.toolsService.shuffleStr2Arr(yiddishPotentialWithIncludedLetters);

          return {...r, possibleLetters: yiddishPotentialWithIncludedLettersShuffled};
        });
        return res;
      })
    );
  }
}
