import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserSettingsService {
  private _language = 'en';

  constructor() {}

  language$(): Observable<string> {
    return of(this._language);
  }
}
