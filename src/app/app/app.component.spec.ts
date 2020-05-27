import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Platform, NavController, IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageService } from '../@core/storage/storage.service';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { MyTranslateTestingModule } from '../tests/my-translate-testing/my-translate-testing.module';
import { routes } from '../app-routing.module';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

class NavControllerMock {
  navigateRoot = () => {};
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let spectator: Spectator<AppComponent>;
  let statusBarSpy, splashScreenSpy, platformSpy, platformReadySpy, storageServiceSpy, translateServiceSpy;
  let component: AppComponent;
  let location: Location;
  let debugElement: DebugElement;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [ MyTranslateTestingModule, IonicModule, FontAwesomeTestingModule, RouterTestingModule.withRoutes(routes) ],
    providers: [ { provide: StatusBar, useValue: statusBarSpy }, { provide: SplashScreen, useValue: splashScreenSpy }, { provide: Platform, useValue: platformSpy }, { provide: TranslateService, useValue: translateServiceSpy }, { provide: StorageService, useValue: storageServiceSpy }, { provide: NavController, useClass: NavControllerMock } ]
  });

  beforeEach(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    storageServiceSpy = jasmine.createSpyObj('StorageService', { getItem: 'en' });
    translateServiceSpy = jasmine.createSpyObj('TranslateService', [ 'setDefaultLang' ]);

    spectator = createComponent();
    fixture = spectator.fixture;
    component = fixture.debugElement.componentInstance;
    debugElement = spectator.debugElement;
    location = TestBed.inject(Location);
  });

  xit('should create the app', () => {
    expect(component).toBeTruthy();
  });

  xit('should initialize the app', async () => {
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
    expect(translateServiceSpy.setDefaultLang).toHaveBeenCalled();
  });

  xit('navigation should exist', () => {
    expect(component.navigation).not.toBeUndefined();
  });

  xit('clicking on a menu-item should navigate to the url', async(() => {
    fixture.detectChanges();
    const menuItem = debugElement.query(By.css('.home-item')).nativeElement;
    console.log(menuItem);

    menuItem.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
});
