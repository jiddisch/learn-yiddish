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
import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';

class NavControllerMock {
  navigateRoot = () => {};
}

describe('AppComponent', () => {
  let statusBarSpy, splashScreenSpy, platformSpy, platformReadySpy;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        NgxWebstorageModule.forRoot(),
        FontAwesomeTestingModule
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the app', async () => {
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

  it('should call the navigation with the param url', () => {
    const navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'navigateRoot');

    component.route('home');
    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('home');
  });

  it('should call route by clicking on an item', () => {
    spyOn(component, 'route');
    const item = fixture.debugElement.query(By.css('ion-item')).nativeElement;
    item.click();
    expect(component.route).toHaveBeenCalledWith(component.navigation[0].url);
  });

});
