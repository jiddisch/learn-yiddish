import { ComponentFixture, fakeAsync, async, TestBed, tick } from '@angular/core/testing';
import { Platform, NavController, IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';
import { getTranslocoModule } from '../transloco-testing.module';
import { StorageService } from '../core/storage/storage.service';
import { of } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { LocalStorageService } from 'ngx-webstorage';
import { BrowserModule, By } from '@angular/platform-browser';
import { mockProvider } from '@ngneat/spectator';
import { TranslocoRootModule } from '../transloco-root.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let location: Location;
  let platform: Platform;
  let statusBar: StatusBar;
  let splashScreen: SplashScreen;
  let storageService: StorageService;
  let translocoService: TranslocoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        BrowserModule,
        FontAwesomeTestingModule,
        RouterTestingModule.withRoutes(routes),
        getTranslocoModule(),
        TranslocoRootModule
      ],
      providers: [
        Platform,
        mockProvider(StatusBar),
        mockProvider(SplashScreen),
        mockProvider(LocalStorageService),
        NavController,
        mockProvider(TranslocoService)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    platform = TestBed.inject(Platform);
    statusBar = TestBed.inject(StatusBar);
    splashScreen = TestBed.inject(SplashScreen);
    storageService = TestBed.inject(StorageService);
    translocoService = TestBed.inject(TranslocoService);
    location = TestBed.inject(Location);

    spyOn(platform, 'ready').and.returnValue(Promise.resolve(''));
    spyOn(storageService, 'getItem$').and.returnValue(of('en'));

    component = fixture.componentInstance;
    component.navigation = [{
      url: '/home',
      icon: 'home',
      label: 'home',
      class: 'home-item'
    }];

    fixture.detectChanges();

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the app', async () => {
    component.initializeApp();
    expect(platform.ready).toHaveBeenCalled();
    await platform.ready();
    expect(statusBar.styleDefault).toHaveBeenCalled();
    expect(splashScreen.hide).toHaveBeenCalled();
    expect(storageService.getItem$).toHaveBeenCalled();
    fixture.whenStable();
    expect(translocoService.setActiveLang).toHaveBeenCalledWith('en');
  });

  it('clicking on a menu-item should navigate to the url', () => {
    const menuItem = fixture.debugElement.query(By.css('home-item')).nativeElement;
    console.log(menuItem);
    menuItem.click();
    fixture.detectChanges();
    expect(location.path()).toBe('/home');
  });

  xit('menu should get the right class', () => {
    // expect(spectator.query('ion-menu ion-item')).toHaveClass('home-item');
  });

  xit('menu should display the right label', () => {
    // expect(spectator.query('ion-menu ion-item ion-label')).toHaveText('Home');
  });

  xit('menu should get the right icon', () => {
    // expect(spectator.query('ion-menu ion-item fa-icon')).toHaveAttribute('ng-reflect-icon', 'fas,home');
  });
});
