import { ComponentFixture } from '@angular/core/testing';
import { Platform, NavController, IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageService } from '../@core/storage/storage.service';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { MyTranslateTestingModule } from '../tests/my-translate-testing/my-translate-testing.module';
import { routes } from '../app-routing.module';
import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let location: Location;
  let debugElement: DebugElement;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      MyTranslateTestingModule,
      IonicModule,
      FontAwesomeTestingModule,
      RouterTestingModule.withRoutes(routes)
    ],
    providers: [
      mockProvider(Platform, {
        ready: () => Promise.resolve()
      })
    ],
    componentMocks: [StatusBar, SplashScreen, TranslateService, StorageService, NavController]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    debugElement = spectator.debugElement;
    fixture = spectator.fixture;
    location = spectator.inject(Location);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the app', async () => {
    const platform = spectator.inject(Platform, true);
    spyOn(platform, 'ready').and.returnValue(Promise.resolve());
    const statusBar = spectator.inject(StatusBar, true);
    const splashScreen = spectator.inject(SplashScreen, true);
    const translateService = spectator.inject(TranslateService, true);

    expect(platform.ready).toHaveBeenCalled();
    await platform.ready();
    expect(statusBar.styleDefault).toHaveBeenCalled();
    expect(splashScreen.hide).toHaveBeenCalled();
    expect(translateService.setDefaultLang).toHaveBeenCalled();
  });

  it('navigation should exist', () => {
    expect(component.navigation).toBeDefined();
  });

  xit('clicking on a menu-item should navigate to the url', async () => {
    const menuItem = spectator.query('.home-item');

    spectator.click(menuItem);

    await fixture.whenStable();
    expect(location.path()).toBe('/home');
  });
});
