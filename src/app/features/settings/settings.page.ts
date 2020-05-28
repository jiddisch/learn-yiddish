import { Component } from '@angular/core';
import { StorageService } from 'src/app/@core/storage/storage.service';
import { TranslocoService }  from '@ngneat/transloco';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
  lang: string;
  langOptions = [
    { lang: 'en', text: 'English' },
    { lang: 'yi', text: 'ייִדיש' },
    { lang: 'yiLa', text: 'Yiddish' },
    { lang: 'he', text: 'עברית' },
    { lang: 'de', text: 'Deutsch' },
    { lang: 'fr', text: 'Français' }
  ];

  constructor(
    private storageService: StorageService,
    private translocoService: TranslocoService
  ) {}

  ionViewWillEnter() {
    this.storageService.getItem('language').then((defLang: string) => {
      this.lang = defLang || 'en';
    });
  }

  changeLang(e: CustomEvent) {
    this.storageService.setItem('language', e.detail.value).then(() => {
      this.translocoService.setActiveLang(e.detail.value);
    });
  }
}
