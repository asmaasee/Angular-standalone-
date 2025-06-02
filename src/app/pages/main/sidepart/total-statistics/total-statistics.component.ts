
import { Component, Input, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-statistics.component.html',
  styleUrls: ['./total-statistics.component.scss']
})
export class TotalStatisticsComponent {
  @Input() totalValue!: string;
  @Input() totalType!: string;
  @Input() currency: string = 'EGP';
  @Input() incrementalValue: string = '-';
  @Input() arrowDirection: 'up' | 'down' | 'neutral' = 'neutral';
  @Input() coloredIncremental: string = '';


}

