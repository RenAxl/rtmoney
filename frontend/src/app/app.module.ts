import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReleasesModule } from './releases/releases.module';
import { PersonsModule } from './persons/persons.module';
import { CoreModule } from './core/core.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReleasesModule, 
    PersonsModule,
    CoreModule,
    ToastModule,
    ConfirmDialogModule
    
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
