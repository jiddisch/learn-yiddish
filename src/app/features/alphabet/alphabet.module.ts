import { NgModule } from '@angular/core';
import { AlphabetPageRoutingModule } from './alphabet-routing.module';
import { AlphabetPage } from './alphabet/alphabet.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    AlphabetPageRoutingModule,
    SharedModule
  ],
  declarations: [AlphabetPage]
})
export class AlphabetPageModule {}

