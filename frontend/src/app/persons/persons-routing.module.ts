import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { ResearchPersonsComponent } from './research-persons/research-persons.component';

const routes: Routes = [
    { path: 'persons', component: ResearchPersonsComponent },
    { path: 'persons/new', component: PersonRegisterComponent },
    { path: 'persons/:id', component: PersonRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }

