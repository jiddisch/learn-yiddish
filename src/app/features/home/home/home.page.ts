import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit {
  btns: any[];

  constructor() {}

  ngOnInit(): void {
    this.btns = [
      {
        url: '/alphabet',
        label: 'home.startStudyAlphabetButton'
      },
      {
        url: '/test-letters',
        label: 'home.goTotestLettersButton'
      }
    ]
  }
}
