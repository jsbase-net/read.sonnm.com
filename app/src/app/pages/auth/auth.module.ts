import { NgModule } from '@angular/core';
import { SharedModule } from '@/app/modules/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
