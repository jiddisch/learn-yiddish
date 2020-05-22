import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { routes } from 'src/app/app-routing.module';
import { DebugElement } from '@angular/core';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let location: Location;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule,
        SharedModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ]
    });

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    location = TestBed.inject(Location);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('btns variable should exist', () => {
    expect(component.btns).toBeDefined();
  });

  it('clicking on the first button should navigate to the /alphabet page', async( () => {
    const button = debugElement.query(By.css('.alphabet-btn')).nativeElement;
    button.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/alphabet');
    });

  }) );

  it('clicking on the second button should navigate to the /test-letters page', async( () => {
    const button = debugElement.query(By.css('.test-letters-btn')).nativeElement;
    button.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/test-letters');
    });

  }) );
});
