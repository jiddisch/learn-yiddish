import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestLetters } from './test-letters.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestLettersService {
  readonly url: string = '../../../assets/datasets/test-letters.json';

  constructor(private http: HttpClient) { }

  get getTestsS(): Observable<TestLetters[]> {
    return this.http.get<TestLetters[]>(this.url);
  }
}
