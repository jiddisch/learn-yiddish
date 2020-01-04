import { NgModule } from '@angular/core';
import { TestLettersPageRoutingModule } from './test-letters-routing.module';
import { TestLettersPage } from './test-letters.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestLettersService } from 'src/app/core/test-letters/test-letters.service';

@NgModule({
  imports: [
    SharedModule,
    TestLettersPageRoutingModule
  ],
  declarations: [TestLettersPage],
  providers: [TestLettersService]
})
export class TestLettersPageModule {}
