import { TestBed } from '@angular/core/testing';
import { Helpers } from './helpers';

describe('ToolsService', () => {
  let service: Helpers;

  beforeEach(() => {
    service = TestBed.get(Helpers);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should shuffle a string to an array', () => {
    const shuffle = service.shuffleStr2Arr('טער');
    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
  });
});
