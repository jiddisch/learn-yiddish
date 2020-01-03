import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  public goToHome(): void {
    this.route.navigate(['/home']);
  }

  public goToAlphabet(): void {
    this.route.navigate(['/alphabet']);
  }

}
