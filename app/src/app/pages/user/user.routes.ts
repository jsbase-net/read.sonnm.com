import { Routes } from '@angular/router';

const UserRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('@/app/pages/user/user.module').then((m) => m.UserModule),
  },
];

export default UserRoutes;
