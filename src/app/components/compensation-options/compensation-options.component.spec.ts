import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationOptionsComponent } from './compensation-options.component';

describe('CompensationOptionsComponent', () => {
  let component: CompensationOptionsComponent;
  let fixture: ComponentFixture<CompensationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompensationOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompensationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
