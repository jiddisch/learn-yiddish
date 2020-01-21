import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlphabetAssociated } from 'src/app/shared/letters.model';

@Injectable({ providedIn: 'root' })
export class LettersService {
  language: string;

  constructor(private http: HttpClient) {
    this.language = 'en'
  }

  /**
   * Gets alphabet
   */
  get alphabet$(): Observable<string> {
    let url: string;

    switch(this.language) {
      case 'en': {
        url = `${environment.mocks}alphabet/${this.language}.json`;
      }
    }

    return this.http.get<string>(url);
  }


  /**
   * Gets alphabet associated
   */
  get alphabetAssociated$(): Observable<AlphabetAssociated[]> {
    let url: string;

    switch(this.language) {
      case 'en': {
        url = `${environment.mocks}alphabet-associated/${this.language}.json`;
      }
    }

    return this.http.get<AlphabetAssociated[]>(url);
  }
}
