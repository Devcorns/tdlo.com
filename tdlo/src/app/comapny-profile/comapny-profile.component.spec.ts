import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyProfileComponent } from './comapny-profile.component';

describe('ComapnyProfileComponent', () => {
  let component: ComapnyProfileComponent;
  let fixture: ComponentFixture<ComapnyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapnyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapnyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
