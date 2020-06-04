import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/storage/storage.service';

@Injectable({ providedIn: 'root' })
export class AlphabetResolver implements Resolve<unknown> {

  constructor(private storageService: StorageService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    return this.storageService.getItem$<number>('alphabet');
  }
}
