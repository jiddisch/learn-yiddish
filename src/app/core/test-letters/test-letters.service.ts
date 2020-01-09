import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestLetters } from './test-letters.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestLettersService {
  readonly url: string = environment.testLettersUrl;

  constructor(private http: HttpClient) { }

  get getTests$(): Observable<TestLetters[]> {
    return this.http.get<TestLetters[]>(this.url);
  }
}
