import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEmployeeComponent } from './good-employee.component';

describe('GoodEmployeeComponent', () => {
  let component: GoodEmployeeComponent;
  let fixture: ComponentFixture<GoodEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
