import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIntegralComponent } from './my-integral.component';

describe('MyIntegralComponent', () => {
  let component: MyIntegralComponent;
  let fixture: ComponentFixture<MyIntegralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIntegralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIntegralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
