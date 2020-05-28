import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { }

  getItem<T>(key: string): Promise<T> {
    return Promise.resolve(this.localStorageService.retrieve(key));
  }

  setItem(value: string, attribute: any): Promise<void> {
    return Promise.resolve(this.localStorageService.store(value, attribute));
  }

}
