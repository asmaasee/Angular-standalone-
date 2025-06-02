import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class AsideComponent {
  asideList = [
    { logo: '/assets/icons/speedometer-svgrepo-com.svg', route: '/overview' },
    { logo: '/assets/icons/dashboard.svg', route: '/dashboard' },
    { logo: '/assets/icons/layers.svg', route: '/layers' },
    { logo: '/assets/icons/889.svg', route: '/settings' },
    { logo: '/assets/icons/99.svg', route: '/notifications' },
    { logo: '/assets/icons/logout-svgrepo-com.svg', route: '/logout' },
  ];

  trackFn(index: number, item: any) {
    return item.logo;
  }
}

