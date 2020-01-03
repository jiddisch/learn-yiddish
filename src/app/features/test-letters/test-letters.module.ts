import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestLettersPageRoutingModule } from './test-letters-routing.module';

import { TestLettersPage } from './test-letters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestLettersPageRoutingModule
  ],
  declarations: [TestLettersPage]
})
export class TestLettersPageModule {}
