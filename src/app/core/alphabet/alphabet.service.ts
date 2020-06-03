import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alphabet } from './alphabet.model';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  constructor(private http: HttpClient) { }

  alphabet$(): Observable<Alphabet[]> {
    return this.http.get<Alphabet[]>(`${env.mocks}alphabet.json`);
  }
}
