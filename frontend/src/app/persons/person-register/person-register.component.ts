import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Person } from 'src/app/core/model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit{

  person: Person = new Person();

  constructor(
    private personService: PersonService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    const personId = this.route.snapshot.params['id'];

    if (personId) {
      this.carregarPessoa(personId)
    }

    this.title.setTitle('Nova Pessoa')
  }

  get editando() {
    return Boolean(this.person.id);
  }

  salvar(form: NgForm) {
    if(this.editando){
      this.atualizarPessoa();
    }else {
      this.adicionarPessoa(form);
    }
  }

  atualizarPessoa() {
    this.personService.atualizar(this.person)
      .then((person: Person) => {
        this.person = person;
        this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
        this.router.navigate(['/persons']);
      }
      ).catch(erro => this.errorHandler.handle(erro))
  }

  adicionarPessoa(form: NgForm) {
    this.personService.adicionar(this.person)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
        this.router.navigate(['/persons']);
      })
      .catch(erro => this.errorHandler.handle(erro));
 }

 carregarPessoa(id: number) {
  this.personService.buscarPorCodigo(id)
    .then(person => {
      this.person = person;
      this.atualizarTituloEdicao();
    },
      erro => this.errorHandler.handle(erro));
}

novo(form: NgForm) {
  form.reset();

  this.person = new Person();

  this.router.navigate(['persons/new']);
}

atualizarTituloEdicao() {
  this.title.setTitle(`Edição de Pessoa: ${this.person.name}`)
}

}
