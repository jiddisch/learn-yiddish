import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { TestLettersService } from './test-letters/test-letters.service';
import { environment } from 'src/environments/environment';
import { AlphabetService } from './alphabet/alphabet.service';
import { StorageService } from './storage/storage.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { IconsModule } from './icons.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    IonicModule.forRoot({ hardwareBackButton: false }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxWebstorageModule.forRoot({ prefix: 'ly' }),
    IconsModule
  ],
  exports: [
    TranslateModule,
    NgxWebstorageModule,
    IonicModule,
  ],
  providers: [
    TestLettersService,
    AlphabetService,
    StorageService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
