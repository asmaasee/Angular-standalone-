import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, CalendarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activatedPage: string = 'today';
  dateStart: Date | undefined;
  dateEnd: Date | undefined;

  switchPeriodPage(periodDate: string): void {
    this.activatedPage = periodDate;
  }


  }


