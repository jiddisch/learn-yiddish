import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { YiddishAlphabet } from './yiddish-alphabet.model';
import { ForeignAlphabet } from './foreign-alphabet.model';

@Injectable({ providedIn: 'root' })
export class YiddishAlphabetService {
  // TODO: get the language from a UserSettingsService
  private language = 'en';

  constructor(private http: HttpClient) {}

  get alphabet$(): Observable<YiddishAlphabet[]> {
    return forkJoin({
      yiddish: this.http.get<YiddishAlphabet[]>(
        `${environment.mocks}yiddish-alphabet.json`
      ),
      foreign: this.http.get<ForeignAlphabet[]>(
        `${environment.mocks}foreign-letters/${this.language}.json`
      )
    }).pipe(
      map(res =>
        res.yiddish.map(item => ({
          ...item,
          ...res.foreign.find(val => val.yiddishLetter === item.yiddishLetter)
        }))
      )
    );
  }
}
