import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestLettersPage } from './test-letters.page';

const routes: Routes = [
  {
    path: '',
    component: TestLettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestLettersPageRoutingModule {}
