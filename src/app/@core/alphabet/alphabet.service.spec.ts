import { AlphabetService } from './alphabet.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Observable } from 'rxjs';

describe('AlphabetService', () => {
  let spectator: SpectatorService<AlphabetService>;
  const createService = createServiceFactory({
    service: AlphabetService,
    imports: [HttpClientTestingModule]
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should have observable alphabet$', () => {
    expect(spectator.service.alphabet$()).toBeInstanceOf(Observable);
  });
});
