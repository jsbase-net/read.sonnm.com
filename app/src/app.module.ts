import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './app/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './app/layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, AuthLayoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
