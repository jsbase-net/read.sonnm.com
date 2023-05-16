import { Routes } from '@angular/router';

const HomeRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@/app/pages/home/home.module').then((m) => m.HomeModule),
  },
];

export default HomeRoutes;
