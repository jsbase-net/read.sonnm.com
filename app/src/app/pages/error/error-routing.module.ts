import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@/app/layouts/main-layout/main-layout.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ErrorUnauthorizedComponent } from './error-unauthorized/error-unauthorized.component';
import { ErrorForbiddenComponent } from './error-forbidden/error-forbidden.component';

const routes: Routes = [
  {
    path: 'error-401',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ErrorUnauthorizedComponent,
      },
    ],
  },
  {
    path: 'error-403',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ErrorForbiddenComponent,
      },
    ],
  },
  {
    path: '**',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ErrorNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
