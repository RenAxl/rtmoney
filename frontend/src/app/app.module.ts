import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { ResearchReleasesComponent } from './research-releases/research-releases.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResearchPersonsComponent } from './research-persons/research-persons.component';


@NgModule({
  declarations: [
    AppComponent,
    ResearchReleasesComponent,
    NavbarComponent,
    ResearchPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    TableModule,
    TooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
