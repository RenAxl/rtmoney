import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { ResearchPersonsComponent } from './persons/research-persons/research-persons.component';
import { ReleaseRegisterComponent } from './releases/release-register/release-register.component';
import { ResearchReleasesComponent } from './releases/research-releases/research-releases.component';

const routes: Routes = [
  { path: '', redirectTo: 'releases', pathMatch: 'full' },
  { path: 'releases', component: ResearchReleasesComponent },
  { path: 'releases/new', component: ReleaseRegisterComponent },
  { path: 'releases/:id', component: ReleaseRegisterComponent },
  { path: 'persons', component: ResearchPersonsComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
