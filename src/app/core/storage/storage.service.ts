import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { }

  getItem$<T>(key: string): Observable<T> {
    return from(Promise.resolve(this.localStorageService.retrieve(key)));
  }

  setItem$(value: string, attribute: any): Observable<void> {
    return from(Promise.resolve(this.localStorageService.store(value, attribute)));
  }

}
