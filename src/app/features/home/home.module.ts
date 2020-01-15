import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlphabetService } from 'src/app/core/services/alphabet/alphabet.service';

@NgModule({
  imports: [
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage],
  providers: [AlphabetService]
})
export class HomePageModule { }
