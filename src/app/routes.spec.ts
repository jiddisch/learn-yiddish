import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgZone } from '@angular/core';

describe('Router', () => {
  let router: Router;
  let location: Location;
  let ngZone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    ngZone = TestBed.inject(NgZone);

    ngZone.run(() => {
      router.initialNavigation();
    });
  });

  it('navigate to "" redirects you to /home', async(() => {
    ngZone.run(() => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/home');
      });
    });
  }));

  it('navigate to "home" redirects you to /home', async(() => {
    ngZone.run(() => {
      router.navigate(['home']).then(() => {
        expect(location.path()).toBe('/home');
      });
    });
  }));

  it('navigate to "alphabet" redirects you to /alphabet', async(() => {
    ngZone.run(() => {
      router.navigate(['alphabet']).then(() => {
        expect(location.path()).toBe('/alphabet');
      });
    });
  }));

  it('navigate to "test-letters" redirects you to /test-letters', async(() => {
    ngZone.run(() => {
      router.navigate(['test-letters']).then(() => {
        expect(location.path()).toBe('/test-letters');
      });
    });
  }));

  it('navigate to "settings" redirects you to /settings', async(() => {
    ngZone.run(() => {
      router.navigate(['settings']).then(() => {
        expect(location.path()).toBe('/settings');
      });
    });
  }));
});
