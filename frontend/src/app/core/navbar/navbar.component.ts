import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  exibindoMenu: boolean = false;

  usuarioLogado: string = '';

  constructor(private auth: AuthService) { }
  
    ngOnInit() {
      this.usuarioLogado = this.auth.jwtPayload?.user_name;
    }

    temPermissao(permissao: string) {
      return this.auth.temPermissao(permissao);
    }
  
}
