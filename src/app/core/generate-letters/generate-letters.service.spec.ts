import { TestBed } from '@angular/core/testing';

import { GenerateLettersService } from './generate-letters.service';
import { environment } from 'src/environments/environment';

describe('GenerateLettersService', () => {
  let service: GenerateLettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(GenerateLettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shuffle words of a string and return a shuffles array', () => {
    const shuffle = service.shuffle('טער');

    expect(shuffle).toEqual(jasmine.arrayWithExactContents(['ט', 'ר', 'ע']));
})

  it('should generate an amount of shuffled letters including given letters', () => {
    // Todo: skip the real shuffle function?
    const generatedLetters = service.generateLetters('ער');

    
    expect(generatedLetters.length).toBe(environment.amountPotentialLetters);
  });
});
