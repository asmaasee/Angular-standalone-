import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-station-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station-sales.component.html',
  styleUrls: ['./station-sales.component.scss']
})
export class StationSalesComponent {
 @Input() station!: { name: string; value: string; progress: number };

}
