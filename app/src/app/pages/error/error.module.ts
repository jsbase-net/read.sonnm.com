import { NgModule } from '@angular/core';
import { SharedModule } from '@/app/modules/shared/shared.module';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ErrorUnauthorizedComponent } from './error-unauthorized/error-unauthorized.component';
import { ErrorForbiddenComponent } from './error-forbidden/error-forbidden.component';

@NgModule({
  declarations: [
    ErrorNotFoundComponent,
    ErrorUnauthorizedComponent,
    ErrorForbiddenComponent,
  ],
  imports: [SharedModule],
})
export class ErrorModule {}
