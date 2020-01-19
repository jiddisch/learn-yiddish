import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alphabet } from './alphabet.model';
import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class AlphabetService {
  private readonly url = environment.alphabetUrl;

  constructor(private http: HttpClient) { }

  get alphabet$(): Observable<Alphabet[]> {
    return this.http.get<Alphabet[]>(this.url);
  }
  
}
