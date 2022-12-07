import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { SecurityRoutingModule } from "./security-routing.module";
import { LoginFormComponent } from './login-form/login-form.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoneyHttpInterceptor } from "./money-http-interceptor";

export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

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
          tokenGetter,
          allowedDomains: ['localhost:8080'],
          disallowedRoutes: ['http://localhost:8080/oauth/token']
        }
      }),
    ],
    providers: [
      JwtHelperService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MoneyHttpInterceptor,
        multi: true
      }
    ]
  })
  export class SecurityModule {}