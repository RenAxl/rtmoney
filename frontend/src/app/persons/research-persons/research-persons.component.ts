import { Component, ViewChild } from '@angular/core';
import { PersonService, PessoaFiltro,  } from '../person.service';
import { Table } from 'primeng/table';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-research-persons',
  templateUrl: './research-persons.component.html',
  styleUrls: ['./research-persons.component.css'],
})
export class ResearchPersonsComponent {

  filtro = new PessoaFiltro();

  totalRegistros: number = 0;

  persons: any[] = [];

  @ViewChild('tabela') grid!: Table;

  constructor (
    private personService: PersonService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    ){}

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;
    
    this.personService.pesquisar(this.filtro)
    .then((dados: any) => {
      this.persons = dados.pessoas;
      this.totalRegistros = dados.total;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(person: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(person);
      }
    });
  }
  
  excluir(person: any) {
    this.personService.excluir(person.id)
      .then(() => {
        this.grid.reset();
        this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }  
  
}
