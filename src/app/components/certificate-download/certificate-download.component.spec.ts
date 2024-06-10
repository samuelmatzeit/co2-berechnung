import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDownloadComponent } from './certificate-download.component';

describe('CertificateDownloadComponent', () => {
  let component: CertificateDownloadComponent;
  let fixture: ComponentFixture<CertificateDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
