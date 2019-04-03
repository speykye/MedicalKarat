import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDepartmentComponent } from './medical-department.component';

describe('MedicalDepartmentComponent', () => {
  let component: MedicalDepartmentComponent;
  let fixture: ComponentFixture<MedicalDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
