import { Routes } from '@angular/router';

export const SIDEPART_ROUTES: Routes = [
  {
    path: 'overview',
    loadComponent: () =>
      import('./overview.component').then(m => m.OverviewComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'layers',
    loadComponent: () =>
      import('./layers.component').then(m => m.LayersComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings.component').then(m => m.SettingsComponent),
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./notifications.component').then(m => m.NotificationsComponent),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./logout.component').then(m => m.LogoutComponent),
  }
];
