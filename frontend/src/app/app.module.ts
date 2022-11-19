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
import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    ResearchReleasesComponent,
    NavbarComponent,
    ResearchPersonsComponent,
    ReleaseRegisterComponent,
    PersonRegisterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
