import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomeRoutes from '@/app/pages/home/home.routes';
import ErrorRoutes from './app/pages/error/error.routes';
import AuthRoutes from './app/pages/auth/auth.routes';
import UserRoutes from './app/pages/user/user.routes';

const routes: Routes = [
  ...HomeRoutes,
  ...AuthRoutes,
  ...UserRoutes,
  ...ErrorRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
