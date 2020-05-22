import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../@shared/shared.module';
import { StorageService } from '../@core/storage/storage.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';

class NavControllerMock {
  navigateRoot = () => {};
}

describe('AppComponent', () => {
  let statusBarSpy, splashScreenSpy, platformSpy, platformReadySpy;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let location: Location;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        SharedModule,
        TranslateModule.forRoot(),
        NgxWebstorageModule.forRoot(),
        FontAwesomeTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        TranslateService,
        StorageService,
        { provide: NavController, useClass: NavControllerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    debugElement = fixture.debugElement;
    location = TestBed.inject(Location);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  xit('should initialize the app', async () => {
    const translateService = fixture.debugElement.injector.get(TranslateService);
    spyOn(translateService, 'setDefaultLang');
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
    expect(translateService.setDefaultLang).toHaveBeenCalled();
  });

  it('navigation should exist', () => {
    expect(component.navigation).not.toBeUndefined();
  });

  xit('clicking on a menu-item should navigate to the url', async( () => {
    fixture.detectChanges();
    const menuItem = debugElement.query(By.css('.home-item')).nativeElement;
    console.log(menuItem);

    menuItem.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });

  }) );

});
