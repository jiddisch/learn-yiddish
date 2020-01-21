import { NgModule } from '@angular/core';
import { TestLettersPage } from './test-letters/test-letters.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: TestLettersPage }])
  ],
  declarations: [TestLettersPage],
  providers: []
})
export class TestLettersPageModule {}
