import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Person } from 'src/app/core/model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent {

  person: Person = new Person();

  constructor(
    private personService: PersonService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService
  ) { }

  salvar(form: NgForm) {
    this.personService.adicionar(this.person)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
        form.reset();
      })
      .catch(erro => this.errorHandler.handle(erro));
 }

}
