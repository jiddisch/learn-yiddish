import { NgModule } from '@angular/core';
import { TestLettersPageRoutingModule } from './test-letters-routing.module';
import { TestLettersPage } from './test-letters.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchLettersService } from 'src/app/core/match-letters/match-letters.service';

@NgModule({
  imports: [
    SharedModule,
    TestLettersPageRoutingModule
  ],
  declarations: [TestLettersPage],
  providers: [MatchLettersService]
})
export class TestLettersPageModule {}
