import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { ReportReleaseComponent } from './report-release/report-release.component';

const routes: Routes = [
  {
    path: 'reports/releases',
    component: ReportReleaseComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERATOR', 'ROLE_ADMIN']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
