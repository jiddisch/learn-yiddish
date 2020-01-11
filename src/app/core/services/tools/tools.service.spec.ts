import { TestBed } from '@angular/core/testing';

import { ToolsService } from './tools.service';
import { environment } from 'src/environments/environment';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(ToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shuffle words of a string and return a shuffles array', () => {
    const shuffle = service.shuffleStr2Arr('טער');

    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
  })

});
