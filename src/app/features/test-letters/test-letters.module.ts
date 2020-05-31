import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TestLettersPage } from './test-letters.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TestLettersPage },
    ])
  ],
  declarations: [TestLettersPage],
  providers: []
})
export class TestLettersPageModule {}
