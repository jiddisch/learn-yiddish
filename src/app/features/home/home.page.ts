import { Component } from '@angular/core';
import { NavLink } from 'src/app/@shared/links.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  // TODO: on RTL put the button on right

  btns: NavLink[] = [
    {
      url: '/alphabet',
      label: 'startStudyAlphabetButton',
      class: 'alphabet-btn'
    },
    {
      url: '/test-letters',
      label: 'goTotestLettersButton',
      class: 'test-letters-btn'
    }
  ];

  constructor() { }

}

