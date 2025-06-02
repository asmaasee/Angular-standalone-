import { Routes } from '@angular/router';
import { authGuard } from '../app/shared_models/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('../app/pages/main/sidepart/hmm/logout.component').then(m => m.LogoutComponent)
  },

  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/main/sidepart/hmm/sidepart.routes').then(m => m.SIDEPART_ROUTES)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  }
];
