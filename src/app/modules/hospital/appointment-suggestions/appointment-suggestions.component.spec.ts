import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSuggestionsComponent } from './appointment-suggestions.component';

describe('AppointmentSuggestionsComponent', () => {
  let component: AppointmentSuggestionsComponent;
  let fixture: ComponentFixture<AppointmentSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
