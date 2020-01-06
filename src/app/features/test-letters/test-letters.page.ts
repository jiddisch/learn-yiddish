import { Component, OnInit } from '@angular/core';
import { TestLettersService } from 'src/app/core/test-letters/test-letters.service';
import { GenerateLettersService } from 'src/app/core/generate-letters/generate-letters.service';

@Component({
  selector: 'app-test-letters',
  templateUrl: './test-letters.page.html',
  styleUrls: ['./test-letters.page.scss'],
})
export class TestLettersPage implements OnInit {
  public tests$ = this.testLettersService.getTests$;

  constructor(private testLettersService: TestLettersService, private generateLettersService: GenerateLettersService) { }

  ngOnInit() {
    const r = this.generateLettersService.generateLetters('טן');
    console.log(r);
    
  }

  test(lettersEnglish: string): void {
    // test if lettersEnglish match the input ng-model
  }

}
