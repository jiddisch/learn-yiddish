import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage],
  providers: []
})
export class HomePageModule { }
