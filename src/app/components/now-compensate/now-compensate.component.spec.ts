import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowCompensateComponent } from './now-compensate.component';

describe('NowCompensateComponent', () => {
  let component: NowCompensateComponent;
  let fixture: ComponentFixture<NowCompensateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowCompensateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowCompensateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
