import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ResearchReleasesComponent } from './research-releases/research-releases.component';

const routes: Routes = [
  {
    path: 'releases',
    component: ResearchReleasesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERATOR', 'ROLE_ADMIN']}
  },
  {
    path: 'releases/new',
    component: ReleaseRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERATOR', 'ROLE_ADMIN']}
  },
  {
    path: 'releases/:id',
    component: ReleaseRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERATOR', 'ROLE_ADMIN']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesRoutingModule {}
