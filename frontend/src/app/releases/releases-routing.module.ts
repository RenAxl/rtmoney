import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ResearchReleasesComponent } from './research-releases/research-releases.component';

const routes: Routes = [
  { path: 'releases', component: ResearchReleasesComponent },
  { path: 'releases/new', component: ReleaseRegisterComponent },
  { path: 'releases/:id', component: ReleaseRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule { }

