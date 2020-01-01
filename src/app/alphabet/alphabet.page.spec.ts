import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlphabetPage } from './alphabet.page';

describe('AlphabetPage', () => {
  let component: AlphabetPage;
  let fixture: ComponentFixture<AlphabetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
