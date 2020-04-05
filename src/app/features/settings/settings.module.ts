import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsPage
      }
    ])
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
