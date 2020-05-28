import { TranslocoTestingModule, TranslocoConfig } from '@ngneat/transloco';
import en from '../assets/i18n/en.json';
import de from './../assets/i18n/de.json';
import fr from './../assets/i18n/fr.json';
import he from './../assets/i18n/he.json';
import yiLa from './../assets/i18n/yiLa.json';
import yi from './../assets/i18n/yi.json';

export function getTranslocoModule(config: Partial<TranslocoConfig> = {}) {
  return TranslocoTestingModule.withLangs(
    { en, de, fr, he, yiLa, yi },
    {
      availableLangs: ['en', 'de', 'fr', 'he', 'yiLa', 'yi' ],
      defaultLang: 'en',
      ...config
    }
  );
}
