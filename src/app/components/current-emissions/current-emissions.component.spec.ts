import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEmissionsComponent } from './current-emissions.component';

describe('CurrentEmissionsComponent', () => {
  let component: CurrentEmissionsComponent;
  let fixture: ComponentFixture<CurrentEmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentEmissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentEmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
