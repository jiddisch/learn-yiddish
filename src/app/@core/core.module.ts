import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Helpers } from '../@shared/helpers/helpers';
import { TestLettersService } from './test-letters/test-letters.service';
import { environment } from 'src/environments/environment';
import { UserSettingsService } from './user-settings/user-settings.service';
import { AlphabetService } from './alphabet/alphabet.service';
import { StorageService } from './storage/storage.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { IconsModule } from './icons.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    // angular
    IonicModule.forRoot({ hardwareBackButton: false }),
    HttpClientModule,

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxWebstorageModule.forRoot({prefix: 'ly'}),
    IconsModule
  ],
  exports: [TranslateModule, NgxWebstorageModule],
  providers: [TestLettersService, AlphabetService, Helpers, UserSettingsService, StorageService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
