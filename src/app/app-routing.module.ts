import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'alphabet',
    loadChildren: () =>
      import('./features/alphabet/alphabet.module').then(
        m => m.AlphabetPageModule
      )
  },
  {
    path: 'test-letters',
    loadChildren: () =>
      import('./features/test-letters/test-letters.module').then(
        m => m.TestLettersPageModule
      )
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        m => m.SettingsPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
