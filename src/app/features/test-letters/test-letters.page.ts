import { Component, OnInit } from '@angular/core';
import { MatchLettersService } from 'src/app/core/services/match-letters/match-letters.service';
import { ToolsService } from 'src/app/core/services/tools/tools.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
})
export class TestLettersPage implements OnInit {
  public tests$ = this.matchLettersService.getTests$;

  constructor(private matchLettersService: MatchLettersService, private toolsService: ToolsService) { }

  ngOnInit() {
    const yiddishLetters = environment.yiddishLetters;
    const yiddishLettersShuffled = this.toolsService.shuffleStr2Arr(yiddishLetters);
    const amountPotentialLetters = environment.amountPotentialLetters;
    const lengthIncludedLetters = 'ער'.length;
    const yiddishPotentialLetters = yiddishLettersShuffled.slice(0, amountPotentialLetters - lengthIncludedLetters);
    const yiddishPotentialWithIncludedLetters = yiddishPotentialLetters.concat('ער').join('');
    const yiddishPotentialWithIncludedLettersShuffled = this.toolsService.shuffleStr2Arr(yiddishPotentialWithIncludedLetters);
  }

  test(lettersEnglish: string): void {
    // test if lettersEnglish match the input ng-model
  }

}
