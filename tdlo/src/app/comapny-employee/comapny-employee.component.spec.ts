import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyEmployeeComponent } from './comapny-employee.component';

describe('ComapnyEmployeeComponent', () => {
  let component: ComapnyEmployeeComponent;
  let fixture: ComponentFixture<ComapnyEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapnyEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapnyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
