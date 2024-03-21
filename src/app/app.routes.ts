import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'v-email',
    loadComponent: () => import('./v-email/v-email.page').then( m => m.VEmailPage)
  },
  {
    path: 'v-password',
    loadComponent: () => import('./v-password/v-password.page').then( m => m.VPasswordPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'ejercicios',
    loadComponent: () => import('./ejercicios/ejercicios.page').then( m => m.EjerciciosPage)
  },
  {
    path: 'ejer',
    loadComponent: () => import('./ejer/ejer.page').then( m => m.EjerPage)
  },
  {
    path: 'calender',
    loadComponent: () => import('./calender/calender.page').then( m => m.CalenderPage)
  },
  {
    path: 'prueba-c',
    loadComponent: () => import('./prueba-c/prueba-c.page').then( m => m.PruebaCPage)
  },
];
