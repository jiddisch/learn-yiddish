import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule, TranslateModule.forRoot()],
      providers: [TranslateService]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the langOptions variable', () => {
    expect(component.langOptions).toBeTruthy();
  });

  it('changeLang function should change translation', () => {
    const event = new CustomEvent('ionChange', {detail: {value: 'yi-he'}});
    const service = fixture.debugElement.injector.get(TranslateService);
    spyOn(service, 'use');

    component.changeLang(event);
    expect(service.use).toHaveBeenCalledWith(event.detail.value);
  });
});
