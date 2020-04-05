import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { YiddishAlphabetServer, YiddishAlphabetClient } from './yiddish-alphabet.model';
import { ForeignLetters } from './foreign-letters.model';
import { UserSettingsService } from '../user-settings/user-settings.service';

@Injectable({ providedIn: 'root' })
export class YiddishAlphabetService {

  constructor(private http: HttpClient, private userSettingsService: UserSettingsService) {}

  alphabet$(): Observable<YiddishAlphabetClient[]> {
    return this.userSettingsService.language$().pipe(
      mergeMap(lang => {
        return forkJoin({
          yiddish: this.http.get<YiddishAlphabetServer[]>(
            `${environment.mocks}yiddish-alphabet.json`
          ),
          foreign: this.http.get<ForeignLetters[]>(
            `${environment.mocks}foreign-letters/${lang}.json`
          )
        }).pipe(
          map(res =>
            res.yiddish.map(item => ({
              ...item,
              ...res.foreign.find(val => val.yiddishLetter === item.yiddishLetter)
            }))
          )
        );
      })
    )
  }
}
