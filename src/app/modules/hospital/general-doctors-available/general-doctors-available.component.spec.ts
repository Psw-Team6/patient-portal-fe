import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDoctorsAvailableComponent } from './general-doctors-available.component';

describe('GeneralDoctorsAvailableComponent', () => {
  let component: GeneralDoctorsAvailableComponent;
  let fixture: ComponentFixture<GeneralDoctorsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDoctorsAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralDoctorsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
