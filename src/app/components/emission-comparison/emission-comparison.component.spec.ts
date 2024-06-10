import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionComparisonComponent } from './emission-comparison.component';

describe('EmissionComparisonComponent', () => {
  let component: EmissionComparisonComponent;
  let fixture: ComponentFixture<EmissionComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissionComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
