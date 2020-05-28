import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TestLettersService } from './test-letters/test-letters.service';
import { AlphabetService } from './alphabet/alphabet.service';
import { StorageService } from './storage/storage.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { IconsModule } from './icons.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  imports: [
    IonicModule.forRoot({ hardwareBackButton: false }),
    HttpClientModule,
    NgxWebstorageModule.forRoot({ prefix: 'ly' }),
    IconsModule,
    TranslocoRootModule
  ],
  exports: [
    NgxWebstorageModule,
    IonicModule,
    TranslocoRootModule
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
