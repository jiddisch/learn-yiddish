import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StorageService } from 'src/app/@core/storage/storage.service';
import { TranslocoService }  from '@ngneat/transloco';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    private translocoService: TranslocoService,
    private cd: ChangeDetectorRef
  ) {}

  ionViewWillEnter() {
    this.storageService.getItem$('language').subscribe((defLang: string) => {
      this.lang = defLang || 'en';
      this.cd.detectChanges();
    });
  }

  changeLang(e: CustomEvent) {
    this.storageService.setItem$('language', e.detail.value).subscribe(() => {
      this.translocoService.setActiveLang(e.detail.value);
    });
  }
}
