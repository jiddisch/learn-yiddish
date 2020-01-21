import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { NavLink } from '../shared/buttons.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigation: NavLink[] = [
    {
      url: 'home',
      icon: 'home',
      label: 'menu.home'
    },
    {
      url: 'alphabet',
      icon: 'logo-buffer',
      label: 'menu.alphabet'
    },
    {
      url: 'test-letters',
      icon: 'help',
      label: 'menu.testLetters'
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.initializeApp();
    translate.setDefaultLang('en');
    translate.use('en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
