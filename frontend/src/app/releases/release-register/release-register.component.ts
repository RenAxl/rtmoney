import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from './../../persons/person.service';
import { CategoryService } from 'src/app/categories/category.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Release } from 'src/app/core/model';
import { ReleaseService } from '../release.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-release-register',
  templateUrl: './release-register.component.html',
  styleUrls: ['./release-register.component.css']
})
export class ReleaseRegisterComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  release: Release = new Release();

  categories = [];

  persons = [];

  constructor(
    private categoryService: CategoryService,
    private personService: PersonService,
    private releaseService: ReleaseService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    return this.categoryService.listarTodas()
      .then(categories => {
        this.categories = categories.map((c: any) => ({ label: c.name, value: c.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas(){
    return this.personService.listarTodas()
    .then(persons => {
      this.persons = persons.map((p: any) => ({ label: p.name, value: p.id }));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    this.releaseService.adicionar(this.release)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });
        form.reset();
      })
      .catch(erro => this.errorHandler.handle(erro));
 }

}
