import {
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTooltip,
} from 'ng-apexcharts';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: string[];
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-custom-summary-chart',
  standalone: true,
  templateUrl: './custom-summary-chart.component.html',
  styleUrls: ['./custom-summary-chart.component.scss'],
  imports: [NgApexchartsModule],
})
export class CustomSummaryChartComponent {
  chartOptions: ChartOptions = {
    series: [
      {
        name: 'Sales Summary',
        data: [71028, 20000, 20000, 1567],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    xaxis: {
      categories: ['Total Value', 'Total Sales', 'Avg Sales', 'Transactions'],
      labels: {
        style: {
          fontSize: '14px',
          colors: '#666',
        },
      },
    },
    title: {
      text: '📊 Station Summary Overview',
      align: 'left',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
        colors: ['#fff'],
      },
      background: {
        enabled: true,
        borderRadius: 6,
        dropShadow: {
          enabled: true,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    colors: ['#67B7DC'],
    tooltip: {
      theme: 'light',
    },
  };
}
