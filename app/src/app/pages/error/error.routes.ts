import { Routes } from '@angular/router';

const ErrorRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@/app/pages/error/error.module').then((m) => m.ErrorModule),
  },
];

export default ErrorRoutes;
