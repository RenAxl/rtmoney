import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
    .then(() => {
      this.router.navigate(['/releases']);
      this.messageService.add({ severity: 'success', detail: 'Usuário autenticado com sucesso!' });
    })
    .catch(erro => {
      this.errorHandler.handle(erro);
    });
  }

}
