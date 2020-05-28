import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/@core/storage/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
  lang: string;
  langOptions = [
    { lang: 'en', text: 'English' },
    { lang: 'yi-he', text: 'ייִדיש' },
    { lang: 'yi-la', text: 'Yiddish' }
  ];

  constructor(
    private translate: TranslateService,
    private storageService: StorageService
  ) {}

  ionViewWillEnter() {
    this.storageService.getItem('language').then((defLang: string) => {
      this.lang = defLang;
    });
  }

  changeLang(e: CustomEvent) {
    this.storageService.setItem('language', e.detail.value).then(() => {
      this.translate.use(e.detail.value);
    });
  }
}
