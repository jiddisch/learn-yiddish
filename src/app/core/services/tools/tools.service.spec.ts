import { TestBed } from '@angular/core/testing';
import { ToolsService } from './tools.service';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    service = TestBed.get(ToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shuffle a string to an array', () => {
    const shuffle = service.shuffleStr2Arr('טער');
    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
  })
});
