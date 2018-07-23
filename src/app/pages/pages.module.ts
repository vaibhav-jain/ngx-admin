import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
// import

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { IndexModule } from "./index/index.modules";

import { UserService } from "../services/user.service";

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    IndexModule,
    HttpModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [UserService]
})
export class PagesModule {
}
