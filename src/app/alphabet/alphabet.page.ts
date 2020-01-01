import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.page.html',
  styleUrls: ['./alphabet.page.scss'],
})
export class AlphabetPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public goToHome(): void {
    this.route.navigate(['/home']);
  }

}
