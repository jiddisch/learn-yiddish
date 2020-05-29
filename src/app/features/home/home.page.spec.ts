import { ComponentFixture, async } from '@angular/core/testing';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { routes } from 'src/app/app-routing.module';
import { DebugElement } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTranslocoModule } from 'src/app/transloco-testing.module';

describe('HomePage', () => {
  const createComponent = createComponentFactory({
    component: HomePage,
    imports: [
      SharedModule,
      RouterTestingModule.withRoutes(routes),
      HttpClientTestingModule,
      getTranslocoModule()
    ]
  });
  let spectator: Spectator<HomePage>;
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let location: Location;
  let debugElement: DebugElement;

  beforeEach(() => {
    spectator = createComponent();
    fixture = spectator.fixture;
    component = spectator.component;
    debugElement = spectator.debugElement;
    location = spectator.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('btns variable should exist', () => {
    expect(component.btns).toBeDefined();
  });

  it('clicking on the first button should navigate to the /alphabet page', async( async () => {
    const button = spectator.query('.alphabet-btn');

    spectator.click(button);

    await fixture.whenStable();
    expect(location.path()).toBe('/alphabet');
  }));

  it('clicking on the second button should navigate to the /test-letters page', async( async () => {
    const button = spectator.query('.test-letters-btn');

    spectator.click(button);

    await fixture.whenStable();
    expect(location.path()).toBe('/test-letters');
  }) );
});
