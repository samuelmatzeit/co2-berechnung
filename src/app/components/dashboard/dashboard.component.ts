// dashboard.component.ts
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { CertificateDownloadComponent } from '../certificate-download/certificate-download.component';
import { YearComparisonComponent } from '../year-comparison/year-comparison.component';
import { EmissionComparisonComponent } from '../emission-comparison/emission-comparison.component';
import { CompensationOptionsComponent } from '../compensation-options/compensation-options.component';
import { CurrentEmissionsComponent } from '../current-emissions/current-emissions.component';
import { NowCompensateComponent } from '../now-compensate/now-compensate.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    CertificateDownloadComponent,
    YearComparisonComponent,
    EmissionComparisonComponent,
    CompensationOptionsComponent,
    CurrentEmissionsComponent,
    NowCompensateComponent
  ]
})
export class DashboardComponent {}
