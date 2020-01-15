import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphabetPage } from './alphabet/alphabet.page';

const routes: Routes = [
  {
    path: '',
    component: AlphabetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlphabetPageRoutingModule {}
