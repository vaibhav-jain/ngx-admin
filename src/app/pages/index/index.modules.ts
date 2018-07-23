import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";

import { ThemeModule } from '../../@theme/theme.module';
import { IndexComponent } from './index.component';

import { UserService } from "../../services/user.service";

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    IndexComponent,
  ],
  providers: [
    UserService
  ]
})
export class IndexModule { }
