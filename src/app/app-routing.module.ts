/*
 Routing module
 */

import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DaAuthComponent} from "./@theme/components/auth/components/auth.component";
import {DaLoginComponent} from "./@theme/components/auth/components/login/login.component";
import {DaRegisterComponent} from "./@theme/components/auth/components/register/register.component";
import {DaLogoutComponent} from "./@theme/components/auth/components/logout/logout.component";
import {DaRequestPasswordComponent} from "./@theme/components/auth/components/request-password/request-password.component";
import {DaResetPasswordComponent} from "./@theme/components/auth/components/reset-password/reset-password.component";

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: DaAuthComponent,
    children: [
      {
        path: '',
        component: DaLoginComponent,
      },
      {
        path: 'login',
        component: DaLoginComponent,
      },
      {
        path: 'register',
        component: DaRegisterComponent,
      },
      {
        path: 'logout',
        component: DaLogoutComponent,
      },
      {
        path: 'request-password',
        component: DaRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: DaResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
