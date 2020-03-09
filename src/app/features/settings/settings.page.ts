import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
  langOptions = [
    { lang: 'en', text: 'English' },
    { lang: 'yi-he', text: 'יידיש' },
    { lang: 'yi-la', text: 'Yiddish' }
  ];

  constructor(private translate: TranslateService) {}

  changeLang(e) {
    this.translate.use(e.detail.value);
  }
}
