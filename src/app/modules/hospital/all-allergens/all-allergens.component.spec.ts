import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAllergensComponent } from './all-allergens.component';

describe('AllAllergensComponent', () => {
  let component: AllAllergensComponent;
  let fixture: ComponentFixture<AllAllergensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAllergensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAllergensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
