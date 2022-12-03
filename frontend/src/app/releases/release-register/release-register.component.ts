import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    const releaseId = this.route.snapshot.params['id'];

    if (releaseId) {
      this.carregarLancamento(releaseId)
    }

    this.carregarCategorias();
    this.carregarPessoas();

    this.title.setTitle('Novo lançamento')
  }

  get editando() {
    return Boolean(this.release.id);
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
    if (this.editando) {
      this.atualizarLancamento()
    } else {
      this.adicionarLancamento(form)
    }
  }

  atualizarLancamento() {
    this.releaseService.atualizar(this.release)
      .then((release: Release) => {
        this.release = release;
        this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
        this.router.navigate(['/releases']);
      }
      ).catch(erro => this.errorHandler.handle(erro))
  }

  adicionarLancamento(form: NgForm) {
    this.releaseService.adicionar(this.release)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });
        this.router.navigate(['/releases']);
      })
      .catch(erro => this.errorHandler.handle(erro));
 }

 carregarLancamento(id: number) {
  this.releaseService.buscarPorCodigo(id)
    .then(release => {
      this.release = release;
      this.atualizarTituloEdicao()
    },
      erro => this.errorHandler.handle(erro));
}

novo(form: NgForm) {
  form.reset();

  /* Esta função é para quando o formulário é resetado, o botão RECEITA/DESPESA
precisa ficar no default com RECEITA marcado, e somente com o reset de formulário
Não estava ficando nada marcado */
  setTimeout(() => {
    this.release = new Release();
  }, 1);

  this.router.navigate(['releases/new']);
}

atualizarTituloEdicao() {
  this.title.setTitle(`Edição de lançamento: ${this.release.description}`)
}

}
