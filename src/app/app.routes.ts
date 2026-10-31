import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'feedback',
    loadComponent: () => import('./pages/feedback/feedback').then((m) => m.Feedback),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'library',
    loadComponent: () => import('./pages/library/library').then((m) => m.Library),
  },
  {
    path: 'planning',
    loadComponent: () => import('./pages/planning/planning').then((m) => m.Planning),
  },
  {
    path: 'review',
    loadComponent: () => import('./pages/review/review').then((m) => m.Review),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings').then((m) => m.Settings),
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin').then((m) => m.Signin),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup),
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support').then((m) => m.Support),
  },
  {
    path: 'support-ia',
    loadComponent: () => import('./pages/support-ia/support-ia').then((m) => m.SupportIA),
  },
];
