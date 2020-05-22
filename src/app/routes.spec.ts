import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('Router', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', async( () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }) );

  it('navigate to "home" redirects you to /home', async( () => {
    router.navigate(['home']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }) );

  it('navigate to "alphabet" redirects you to /alphabet', async( () => {
    router.navigate(['alphabet']).then(() => {
      expect(location.path()).toBe('/alphabet');
    });
  }) );

  it('navigate to "test-letters" redirects you to /test-letters', async( () => {
    router.navigate(['test-letters']).then(() => {
      expect(location.path()).toBe('/test-letters');
    });
  }) );

  it('navigate to "settings" redirects you to /settings', async( () => {
    router.navigate(['settings']).then(() => {
      expect(location.path()).toBe('/settings');
    });
  }) );
});
