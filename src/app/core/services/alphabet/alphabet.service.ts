import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alphabet } from './alphabet.model';

@Injectable({ providedIn: 'root' })
export class AlphabetService {
  // TODO: get the language from a UserSettingsService
  private language = 'en';

  constructor(private http: HttpClient) { }

  get alphabet$(): Observable<Alphabet[]> {
    return this.http.get<Alphabet[]>(`${environment.mocks}alphabet/${this.language}.json`);
  }

}
