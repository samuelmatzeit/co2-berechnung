import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-emission-comparison',
  templateUrl: './emission-comparison.component.html',
  styleUrls: ['./emission-comparison.component.css'],
  standalone: true
})
export class EmissionComparisonComponent implements AfterViewInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Du', 'Branche', 'Vergleich 1', 'Vergleich 2'],
        datasets: [{
          label: 'CO₂-Emissionen in Tonnen',
          data: [80, 30, 70, 50],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            type: 'linear'  // Make sure the scale type is set correctly
          },
          x: {
            type: 'category'  // Make sure the scale type is set correctly
          }
        }
      }
    });
  }
}
