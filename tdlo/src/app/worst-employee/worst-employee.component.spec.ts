import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstEmployeeComponent } from './worst-employee.component';

describe('WorstEmployeeComponent', () => {
  let component: WorstEmployeeComponent;
  let fixture: ComponentFixture<WorstEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorstEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
