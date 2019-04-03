import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidDiagnosisComponent } from './rapid-diagnosis.component';

describe('RapidDiagnosisComponent', () => {
  let component: RapidDiagnosisComponent;
  let fixture: ComponentFixture<RapidDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
