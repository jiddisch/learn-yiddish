import { TestBed } from '@angular/core/testing';

import { UserSettingsService } from './user-settings.service';
import { Observable } from 'rxjs';

describe('UserSettingsService', () => {
  let service: UserSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an observable language$', () => {
    expect(service.language$()).toBeInstanceOf(Observable);
  });

  it('observer should get the language', () => {
    service.language$().subscribe(res => {
      expect(res).toEqual('en');
    });
  });
});
