import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { }

  getItem(key: string): any {
    return this.localStorageService.retrieve(key);
  }

  setItem(value: string, attribute: any): any {
    return this.localStorageService.store(value, attribute)
  }

}
