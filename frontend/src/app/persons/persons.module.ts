import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchPersonsComponent } from './research-persons/research-persons.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { PersonsRoutingModule } from './persons-routing.module';



@NgModule({
  declarations: [
    ResearchPersonsComponent,
    PersonRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    InputMaskModule,
    SharedModule,
    PersonsRoutingModule
  ],
  exports: []
})
export class PersonsModule { }
