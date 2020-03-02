import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { TestLettersService } from './services/test-letters/test-letters.service';
import { Helpers } from '../shared/helpers/helpers';
import { YiddishAlphabetService } from './services/yiddish-alphabet/yiddish-alphabet.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [

    // angular
    IonicModule.forRoot({hardwareBackButton: false}),
    HttpClientModule,

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  exports: [TranslateModule],
  providers: [TestLettersService, YiddishAlphabetService, Helpers]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
