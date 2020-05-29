import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { SettingsPage } from './settings.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StorageService } from 'src/app/core/storage/storage.service';
import { getTranslocoModule } from 'src/app/transloco-testing.module';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule, NgxWebstorageModule.forRoot(), getTranslocoModule()],
      providers: [StorageService]
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

  xit('changeLang function should change translation', () => {
    // const event = new CustomEvent('ionChange', {detail: {value: 'yi'}});
    // const service = fixture.debugElement.get();
    // spyOn(service, 'use');

    // component.changeLang(event);
    // expect(service.use).toHaveBeenCalledWith(event.detail.value);
  });
});
