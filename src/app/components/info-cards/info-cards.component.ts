import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-cards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    Chart.register(...registerables);

    const labels = ['Du', 'Branche', 'Vergleich 1', 'Vergleich 2'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'CO2-Emissionen in Tonnen',
          backgroundColor: '#4CAF50',
          borderColor: '#4CAF50',
          data: [80, 40, 90, 60],
        }
      ]
    };

    const configChart = {
      type: 'bar' as const,
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    var chartBar = new Chart(
      document.getElementById('barChart') as HTMLCanvasElement,
      configChart
    );
  }
}
