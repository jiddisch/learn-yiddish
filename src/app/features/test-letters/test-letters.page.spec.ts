import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLettersPage } from './test-letters.page';

describe('TestLettersPage', () => {
  let component: TestLettersPage;
  let fixture: ComponentFixture<TestLettersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLettersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
