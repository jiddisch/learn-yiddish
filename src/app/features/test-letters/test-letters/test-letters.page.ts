import { Component, OnInit } from '@angular/core';
import { TestLettersService } from 'src/app/core/services/test-letters/test-letters.service';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
})
export class TestLettersPage implements OnInit {
  tests$ = this.testLettersService.possibleLetters$;
  possibleLetters = this.testLettersService.possibleLetters$;

  constructor(private testLettersService: TestLettersService) { }

  ngOnInit() { }

  test(lettersEnglish: string): void {
    // test if lettersEnglish match the input ng-model
  }

}
