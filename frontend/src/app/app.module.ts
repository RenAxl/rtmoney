import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReleasesModule } from './releases/releases.module';
import { PersonsModule } from './persons/persons.module';
import { CoreModule } from './core/core.module';
import { ResearchReleasesComponent } from './releases/research-releases/research-releases.component';
import { ReleaseRegisterComponent } from './releases/release-register/release-register.component';
import { ResearchPersonsComponent } from './persons/research-persons/research-persons.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

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
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    AppRoutingModule, 
    ReleasesModule, 
    PersonsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
