import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AlphabetPage } from './alphabet.page';
import { AlphabetResolver } from 'src/app/core/alphabet/alphabet.resolver';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlphabetPage,
        resolve: { initSlide: AlphabetResolver }
      }
    ])
  ],
  declarations: [AlphabetPage]
})
export class AlphabetPageModule {}
