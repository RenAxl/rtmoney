import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from './../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportReleaseComponent } from './report-release/report-release.component';



@NgModule({
  declarations: [
    ReportReleaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    CalendarModule,

    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
