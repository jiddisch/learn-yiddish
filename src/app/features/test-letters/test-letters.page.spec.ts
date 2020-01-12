import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestLettersPage } from './test-letters.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatchLettersService } from 'src/app/core/services/match-letters/match-letters.service';

describe('TestLettersPage', () => {
  let component: TestLettersPage;
  let fixture: ComponentFixture<TestLettersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLettersPage ],
      imports: [IonicModule],
      providers: [
        {provide: MatchLettersService, useClass: MatchLettersServiceStub}
      ]
    });

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MatchLettersServiceStub {}