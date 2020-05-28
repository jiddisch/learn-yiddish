import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavLink } from '../@shared/links.model';
import { StorageService } from '../@core/storage/storage.service';
import { TranslocoService }  from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: menu on the right if lang = rtl

  navigation: NavLink[] = [
    {
      url: '/home',
      icon: 'home',
      label: 'home',
      class: 'home-item'
    },
    {
      url: '/alphabet',
      icon: 'font',
      label: 'alphabet',
      class: 'alphabet-item'
    },
    {
      url: '/test-letters',
      icon: 'question',
      label: 'testLetters',
      class: 'test-letters-item'
    },
    {
      url: '/settings',
      icon: 'cog',
      label: 'settings',
      class: 'settings-item'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    private translocoService: TranslocoService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storageService.getItem('language').then((defLang: string) => {
        this.translocoService.setActiveLang(defLang || 'en');
      });
      this.translocoService.setFallbackLangForMissingTranslation({fallbackLang: 'en'});
    });
  }

}
