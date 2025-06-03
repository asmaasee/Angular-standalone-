import { Component, HostListener } from '@angular/core';
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

  isMobile: boolean = false;
  mobileMenuOpen: boolean = false;

  ngOnInit(): void {
    this.checkIsMobile();
  }

  @HostListener('window:resize')
  checkIsMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  switchPeriodPage(periodDate: string): void {
    this.activatedPage = periodDate;
  }
}
