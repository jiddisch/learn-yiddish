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

  private yiddishLetters = environment.yiddishLetters;
  private amountPotentialLetters = environment.amountPotentialLetters;

  private yiddishLettersShuffled = this.toolsService.shuffleStr2Arr(this.yiddishLetters);
  private lengthIncludedLetters = 'ער'.length;
  private yiddishPotentialLetters = this.yiddishLettersShuffled.slice(0, this.amountPotentialLetters - this.lengthIncludedLetters);
  private yiddishPotentialWithIncludedLetters = this.yiddishPotentialLetters.concat('ער').join('');
  private yiddishPotentialWithIncludedLettersShuffled = this.toolsService.shuffleStr2Arr(this.yiddishPotentialWithIncludedLetters);

  constructor(private matchLettersService: MatchLettersService, private toolsService: ToolsService) { }

  ngOnInit() { }

  test(lettersEnglish: string): void {
    // test if lettersEnglish match the input ng-model
  }

}
