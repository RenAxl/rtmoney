import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ResearchReleasesComponent } from './research-releases/research-releases.component';
import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ReleasesGridComponent } from './releases-grid/releases-grid.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ResearchReleasesComponent,
    ReleaseRegisterComponent,
    ReleasesGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputNumberModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    SharedModule
  ],
  exports: [ResearchReleasesComponent, ReleaseRegisterComponent],
})
export class ReleasesModule {}
