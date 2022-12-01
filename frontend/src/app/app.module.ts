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

const routes: Routes = [
  { path: 'releases', component: ResearchReleasesComponent },
  { path: 'releases/new', component: ReleaseRegisterComponent },
  { path: 'persons', component: ResearchPersonsComponent }
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
