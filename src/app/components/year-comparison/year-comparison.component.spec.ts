import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearComparisonComponent } from './year-comparison.component';

describe('YearComparisonComponent', () => {
  let component: YearComparisonComponent;
  let fixture: ComponentFixture<YearComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
