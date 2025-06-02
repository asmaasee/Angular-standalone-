import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stations } from '../../../../shared_models/stationsList';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.scss'],
})
export class StationCardComponent {
  @Input() station!: Stations;
}
