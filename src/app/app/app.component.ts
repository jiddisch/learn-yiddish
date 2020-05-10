import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { NavLink } from '../@shared/links.model';
import { StorageService } from '../@core/storage/storage.service';

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
      label: 'menu.home',
      class: 'home-item'
    },
    {
      url: '/alphabet',
      icon: 'font',
      label: 'menu.alphabet',
      class: 'alphabet-item'
    },
    {
      url: '/test-letters',
      icon: 'question',
      label: 'menu.testLetters',
      class: 'test-letters-item'
    },
    {
      url: '/settings',
      icon: 'cog',
      label: 'menu.settings',
      class: 'settings-item'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private navController: NavController,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang(this.storageService.getItem('language') || 'en');
    });
  }

  route(url: string): void {
    this.navController.navigateRoot(url);
  }
}
