import { TestBed } from '@angular/core/testing';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxWebstorageModule.forRoot()]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
