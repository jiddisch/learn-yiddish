import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlphabetPage } from './alphabet.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AlphabetPage }])
  ],
  declarations: [AlphabetPage]
})
export class AlphabetPageModule {}

