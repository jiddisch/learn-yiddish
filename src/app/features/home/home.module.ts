import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: HomePage }]),
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
