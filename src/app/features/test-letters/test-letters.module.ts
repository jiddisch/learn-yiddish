import { NgModule } from '@angular/core';
import { TestLettersPageRoutingModule } from './test-letters-routing.module';
import { TestLettersPage } from './test-letters/test-letters.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TestLettersPageRoutingModule
  ],
  declarations: [TestLettersPage],
  providers: []
})
export class TestLettersPageModule {}
