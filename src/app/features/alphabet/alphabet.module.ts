import { NgModule } from '@angular/core';
import { AlphabetPage } from './alphabet/alphabet.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AlphabetPage }])
  ],
  declarations: [AlphabetPage]
})
export class AlphabetPageModule {}

