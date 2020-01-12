import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [IonicModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to navigate',
    fakeAsync(() => {
      router = TestBed.get(Router);
      const navigateSpy = spyOn(router, 'navigate');

      component.goToPage('/home');
      expect(navigateSpy).toHaveBeenCalledWith(['/home']);

      component.goToPage('/alphabet');
      expect(navigateSpy).toHaveBeenCalledWith(['/alphabet']);

      component.goToPage('/test-letters');
      expect(navigateSpy).toHaveBeenCalledWith(['/test-letters']);
    }));

});
