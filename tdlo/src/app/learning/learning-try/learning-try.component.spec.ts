import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTryComponent } from './learning-try.component';

describe('LearningTryComponent', () => {
  let component: LearningTryComponent;
  let fixture: ComponentFixture<LearningTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
