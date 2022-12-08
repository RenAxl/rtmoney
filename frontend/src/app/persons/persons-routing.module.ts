import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { ResearchPersonsComponent } from './research-persons/research-persons.component';

const routes: Routes = [
  {
    path: 'persons',
    component: ResearchPersonsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN']}
  },
  {
    path: 'persons/new',
    component: PersonRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN']}
  },
  {
    path: 'persons/:id',
    component: PersonRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
