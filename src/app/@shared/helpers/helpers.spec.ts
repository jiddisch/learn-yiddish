import { TestBed } from '@angular/core/testing';
import { Helpers } from './helpers';

describe('Helpers', () => {
  let service: Helpers;

  beforeEach(() => {
    service = TestBed.inject(Helpers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shuffle a string to an array', () => {
    const shuffle = service.shuffleStr2Arr('טער');
    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
  });

  it('shuffleStr2Arr', () => {
    const str = 'fgh';
    expect(service.shuffleStr2Arr(str)).toEqual(jasmine.arrayWithExactContents(['f', 'h', 'g']));
  })
});
