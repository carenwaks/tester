import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiveComponent } from './testive.component';

describe('TestiveComponent', () => {
  let component: TestiveComponent;
  let fixture: ComponentFixture<TestiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestiveComponent]
    });
    fixture = TestBed.createComponent(TestiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
