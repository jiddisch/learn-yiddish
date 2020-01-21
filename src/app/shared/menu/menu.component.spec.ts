import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        TranslateTestingModule.withTranslations({})
      ]
    });

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate while clicking on menu items', () => {
      fixture.detectChanges();
      
      const homeItem = debugElement.query(By.css('.home-item')).nativeElement.getAttribute('ng-reflect-router-link');
      const alphabetItem = debugElement.query(By.css('.alphabet-item')).nativeElement.getAttribute('ng-reflect-router-link');
      const testLettersItem = debugElement.query(By.css('.test-letters-item')).nativeElement.getAttribute('ng-reflect-router-link');

      expect(homeItem).toEqual('/home');
      expect(alphabetItem).toEqual('/alphabet');
      expect(testLettersItem).toEqual('/test-letters');
  });
});
