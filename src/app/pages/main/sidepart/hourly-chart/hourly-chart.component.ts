import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-hourly-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hourly-chart.component.html',
  styleUrls: ['./hourly-chart.component.scss']
})
export class HourlySalesComponent implements AfterViewInit {
  @ViewChild('radarCanvas') radarCanvas!: ElementRef;

  ngAfterViewInit(): void {
    new Chart(this.radarCanvas.nativeElement, {
      type: 'radar',
      data: {
        labels: [
          '00:00', '02:00', '04:00', '06:00',
          '08:00', '10:00', '12:00', '14:00',
          '16:00', '18:00', '20:00', '22:00'
        ],
        datasets: [
          {
            label: 'Sales',
            data: [20, 35, 30, 45, 60, 40, 30, 50, 45, 20, 25, 30],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Hourly Sales',
            font: {
              size: 18,
              weight: 'bold'
            },
            color: '#333'
          },
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              color: '#999'
            },
            pointLabels: {
              color: '#666',
              font: {
                size: 12
              }
            },
            grid: {
              color: '#ddd'
            },
            angleLines: {
              color: '#ccc'
            }
          }
        }
      }
    });
  }
}
