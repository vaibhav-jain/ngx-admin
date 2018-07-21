/**
 * App module
 */

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DaAuthComponent } from './@theme/components/auth/components/auth.component';
import { DaAuthBlockComponent } from './@theme/components/auth/components/auth-block/auth-block.component';
import { DaLoginComponent } from './@theme/components/auth/components/login/login.component';
import { DaRegisterComponent } from './@theme/components/auth/components/register/register.component';
import { DaLogoutComponent } from './@theme/components/auth/components/logout/logout.component';
import { DaRequestPasswordComponent } from './@theme/components/auth/components/request-password/request-password.component';
import { DaResetPasswordComponent } from './@theme/components/auth/components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    DaAuthComponent,
    DaAuthBlockComponent,
    DaLoginComponent,
    DaRegisterComponent,
    DaRequestPasswordComponent,
    DaResetPasswordComponent,
    DaLogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
