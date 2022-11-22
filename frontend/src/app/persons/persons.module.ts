import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchPersonsComponent } from './research-persons/research-persons.component';
import { PersonsGridComponent } from './persons-grid/persons-grid.component';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    ResearchPersonsComponent,
    PersonRegisterComponent,
    PersonsGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    InputMaskModule,
    SharedModule
  ],
  exports: [
    ResearchPersonsComponent,
    PersonRegisterComponent
  ]
})
export class PersonsModule { }
