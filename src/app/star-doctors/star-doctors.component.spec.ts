import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDoctorsComponent } from './star-doctors.component';

describe('StarDoctorsComponent', () => {
  let component: StarDoctorsComponent;
  let fixture: ComponentFixture<StarDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
