import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTenderComponentComponent } from './details-tender-component.component';

describe('DetailsTenderComponentComponent', () => {
  let component: DetailsTenderComponentComponent;
  let fixture: ComponentFixture<DetailsTenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
