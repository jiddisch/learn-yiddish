import { Component, OnInit } from '@angular/core';
import { MatchLettersService } from 'src/app/core/core.module';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
})
export class TestLettersPage implements OnInit {
  public tests$ = this.matchLettersService.getTests$;



  constructor(private matchLettersService: MatchLettersService) { }

  ngOnInit() { }

  test(lettersEnglish: string): void {
    // test if lettersEnglish match the input ng-model
  }

}
