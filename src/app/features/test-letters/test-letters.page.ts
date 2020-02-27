import { Component } from '@angular/core';
import { TestLettersService } from 'src/app/core/services/test-letters/test-letters.service';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
})
export class TestLettersPage {
  tests$ = this.testLettersService.tests$;

  constructor(private testLettersService: TestLettersService) { }

  testLetter(rightAnswer: string, possibleLetter: string): void {
    if (rightAnswer === possibleLetter) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
