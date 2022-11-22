import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'primeng/tooltip';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReleasesModule } from './releases/releases.module';
import { PersonsModule } from './persons/persons.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReleasesModule,
    PersonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
