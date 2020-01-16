import { Component, OnInit } from '@angular/core';
import { AlphabetService } from 'src/app/core/core.module';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
})
export class AlphabetPage implements OnInit {
  public alphabet$ = this.alphabetService.alphabet$;

  constructor(private alphabetService: AlphabetService) { }

  ngOnInit() {}

}
