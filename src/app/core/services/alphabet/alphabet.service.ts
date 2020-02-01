import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alphabet } from 'src/app/shared/letters.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AlphabetService {
  // TODO: get the language from a UserSettingsService
  private language = 'en';

  constructor(private http: HttpClient) { }

  get alphabet$(): Observable<Alphabet[]> {
    let url: string;

    switch(this.language) {
      case 'en': {
        url = `${environment.mocks}alphabet/${this.language}.json`;
      }
    }

    return this.http.get<Alphabet[]>(url);
  }

}
