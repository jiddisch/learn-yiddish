import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: HomePage }]),
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
