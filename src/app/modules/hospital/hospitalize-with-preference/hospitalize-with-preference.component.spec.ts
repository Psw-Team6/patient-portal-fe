import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizeWithPreferenceComponent } from './hospitalize-with-preference.component';

describe('HospitalizeWithPreferenceComponent', () => {
  let component: HospitalizeWithPreferenceComponent;
  let fixture: ComponentFixture<HospitalizeWithPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalizeWithPreferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalizeWithPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
