import { MainLayoutComponent } from '@/app/layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'create',
        pathMatch: 'full',
        component: CreateUserComponent,
      },
      {
        path: 'edit/:id',
        pathMatch: 'full',
        component: EditUserComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: ManageUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
