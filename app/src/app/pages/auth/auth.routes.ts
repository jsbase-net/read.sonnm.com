import { Routes } from '@angular/router';

const AuthRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@/app/pages/auth/auth.module').then((m) => m.AuthModule),
  },
];

export default AuthRoutes;
