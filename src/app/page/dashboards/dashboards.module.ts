import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from 'primeng/api';
import { AppDialogModule } from 'src/app/shared/component/dialog/app-dialog.module'


@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    SharedModule,
    AppDialogModule
  ],


})
export class DashboardsModule { }
