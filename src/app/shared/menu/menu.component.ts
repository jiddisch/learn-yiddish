import { Component } from '@angular/core';
import { NavLink } from '../links.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  navigation: NavLink[] = [
    {
      url: '/home',
      icon: 'home',
      label: 'menu.home',
      class: 'home-item'
    },
    {
      url: '/alphabet',
      icon: 'logo-buffer',
      label: 'menu.alphabet',
      class: 'alphabet-item'
    },
    {
      url: '/test-letters',
      icon: 'help',
      label: 'menu.testLetters',
      class: 'test-letters-item'
    }
  ]
  
}
