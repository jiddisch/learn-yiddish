import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavLink } from 'src/app/shared/links.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  // TODO: on RTL put the button on right

  btns: NavLink[] = [
    {
      url: '/alphabet',
      label: 'home.startStudyAlphabetButton',
      class: 'alphabet-btn'
    },
    {
      url: '/test-letters',
      label: 'home.goTotestLettersButton',
      class: 'test-letters-btn'
    }
  ];

  constructor() { }

}

