import { Component, OnInit } from '@angular/core';
import { MatchLettersService } from 'src/app/core/match-letters/match-letters.service';
import { GenerateLettersService } from 'src/app/core/generate-letters/generate-letters.service';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
})
export class TestLettersPage implements OnInit {
  public tests$ = this.matchLettersService.getTests$;

  constructor(private matchLettersService: MatchLettersService, private generateLettersService: GenerateLettersService) { }

  ngOnInit() {
    const r = this.generateLettersService.generateLetters('טן');
  }

  test(lettersEnglish: string): void {
    // test if lettersEnglish match the input ng-model
  }

}
