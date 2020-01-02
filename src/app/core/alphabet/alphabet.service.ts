import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alphabet } from './alphabet.model';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  constructor(private http: HttpClient) { }

  get alphabet(): Observable<Alphabet[]> {
    return this.http.get<Alphabet[]>('../../../assets/datasets/alphabet.json');
  }
}
