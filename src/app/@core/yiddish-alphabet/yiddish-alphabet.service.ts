import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, tap } from 'rxjs/operators';
import { YiddishAlphabet } from './yiddish-alphabet.model';
import { ForeignLetters } from './foreign-letters.model';
import { UserSettingsService } from '../user-settings/user-settings.service';

@Injectable({ providedIn: 'root' })
export class YiddishAlphabetService {
  constructor(
    private http: HttpClient,
    private userSettingsService: UserSettingsService
  ) {}

  alphabet$(): Observable<YiddishAlphabet[]> {
    return this.userSettingsService.language$().pipe(
      mergeMap((lang) => {
        return forkJoin({
          yiddish: this.http.get<YiddishAlphabet[]>(
            `${environment.mocks}yiddish-alphabet.json`
          ),
          foreign: this.http.get<ForeignLetters[]>(
            `${environment.mocks}foreign-letters/${lang}.json`
          )
        }).pipe(
          map((res) => {
            return res.yiddish.map((item) => ({
              ...item,
              ...res.foreign.find(
                (val) => val.yiddishLetter === item.yiddishLetter
              )
            }));
          })
        );
      })
    );
  }
}
