import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLettersPage } from './test-letters.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('TestLettersPage', () => {
  let component: TestLettersPage;
  let fixture: ComponentFixture<TestLettersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLettersPage ],
      imports: [IonicModule, TranslateModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestLettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
