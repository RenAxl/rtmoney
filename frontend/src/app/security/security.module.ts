import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { SecurityRoutingModule } from "./security-routing.module";
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
    declarations: [
    LoginFormComponent
  ],
    imports: [
      CommonModule,
      FormsModule,
      
      InputTextModule,
      ButtonModule,
      SecurityRoutingModule
    ],
    exports: []
  })
  export class SecurityModule {}