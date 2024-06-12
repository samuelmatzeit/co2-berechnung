import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationMainComponent } from './calculation-main.component';

describe('CalculationMainComponent', () => {
  let component: CalculationMainComponent;
  let fixture: ComponentFixture<CalculationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
