import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsService } from '../../../../shared_models/stations.service';
import { Stations } from '../../../../shared_models/stationsList';
import { StationSalesComponent } from '../station-sales/station-sales.component';
import { CustomSummaryChartComponent } from '../custom-summary-chart/custom-summary-chart.component';
import { HourlySalesComponent } from '../hourly-chart/hourly-chart.component';
import { TotalStatisticsComponent } from '../total-statistics/total-statistics.component';
import { StationCardComponent } from '../station-card/station-card.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    StationCardComponent,
    TotalStatisticsComponent,
    HourlySalesComponent,
    CustomSummaryChartComponent,
    StationSalesComponent
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private stationsService = inject(StationsService);


  currentView = signal<'graph' | 'list'>('list');
  switchView(view: 'graph' | 'list') {
    this.currentView.set(view);
  }


  stationsList = signal<Stations[]>([]);

  //  التحكم في التحميل التدريجي
  offset = signal(0);
  limit = 2;

  //  تحميل المزيد (Lazy Loading)
  loadMoreStations() {
    this.stationsService.getStations(this.offset(), this.limit).subscribe((newStations) => {
      const current = this.stationsList();
      this.stationsList.set([...current, ...newStations]);
      this.offset.set(this.offset() + this.limit);
    });
  }


  statisticsList = signal([
    {
      totalValue: '71028',
      currency: 'EGP',
      totalType: 'Total Value',
      incrementalValue: '2%',
      arrowDirection: 'down' as 'down',
      coloredIncremental: '#f99fb9',
    },
    {
      totalValue: '20000',
      currency: 'm³',
      totalType: 'Total Sales',
      incrementalValue: '50 m³',
      arrowDirection: 'up' as 'up',
      coloredIncremental: '#00CBC0',
    },
    {
      totalValue: '20000',
      currency: 'm³',
      totalType: 'Avg Sales',
      incrementalValue: '50 m³',
      arrowDirection: 'down' as 'down',
      coloredIncremental: '#f99fb9',
    },
    {
      totalValue: '1,567',
      currency: '',
      totalType: 'Total Transaction Count',
      incrementalValue: '20',
      arrowDirection: 'up' as 'up',
      coloredIncremental: '#00CBC0',
    },
  ]);


  ngOnInit(): void {
    this.loadMoreStations(); // بدل getStations()
  }
}
