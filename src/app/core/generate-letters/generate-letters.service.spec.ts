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

  it('should generate an amount of shuffled letters including given letters', () => {
    // Todo: Test with spy
    const generatedLetters = service.generateLetters('ער');

    // Todo: maybe test all step

    expect(generatedLetters.length).toBe(environment.amountPotentialLetters);
  });
});
