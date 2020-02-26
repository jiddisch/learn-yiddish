import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { NavLink } from '../shared/links.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
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
      icon: 'logo-buffer',
      label: 'menu.alphabet',
      class: 'alphabet-item'
    },
    {
      url: '/test-letters',
      icon: 'help',
      label: 'menu.testLetters',
      class: 'test-letters-item'
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService) {
      this.initializeApp();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.use('en');
    });
  }

}
