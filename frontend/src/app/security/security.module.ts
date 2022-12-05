import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { SecurityRoutingModule } from "./security-routing.module";
import { LoginFormComponent } from './login-form/login-form.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


@NgModule({
    declarations: [
    LoginFormComponent
  ],
    imports: [
      CommonModule,
      FormsModule,
      
      InputTextModule,
      ButtonModule,
      SecurityRoutingModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return '';
          }
        }
      }),
    ],
    providers: [JwtHelperService]
  })
  export class SecurityModule {}