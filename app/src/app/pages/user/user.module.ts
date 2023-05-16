import { NgModule } from '@angular/core';
import { SharedModule } from '@/app/modules/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [ManageUsersComponent, EditUserComponent, CreateUserComponent],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
